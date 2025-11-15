import {
    initializeApp
} from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import {
    getDatabase,
    ref,
    set,
    onValue,
    push,
    remove,
    onDisconnect,
    update,
    off,
    serverTimestamp
} from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js';

const firebaseConfig = {
    apiKey: "AIzaSyBQOtHw9sY99DGR5bIAQZcu_Xn0fNMKCmU",
    authDomain: "vc-chat2.firebaseapp.com",
    databaseURL: "https://vc-chat2-default-rtdb.firebaseio.com",
    projectId: "vc-chat2",
    storageBucket: "vc-chat2.firebasestorage.app",
    messagingSenderId: "326015674254",
    appId: "1:326015674254:web:a82801c466880c5e87e6df",
    measurementId: "G-VTLM21H9XQ"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

let username = '';
let currentRoom = null;
let userRef = null;
let isMuted = false;
let stream = null;
let roomType = '';
let peerConnections = {};
let remoteAudios = {};
let myPeerId = null;
let audioContext = null;
let analyserNodes = {};
let localAnalyser = null;
let pendingCandidates = {};
let participantsListener = null;
let signalsListener = null;
let makingOffer = {};
let lastSpeakTime = Date.now();
let silenceCheckInterval = null;
let roomCleanupInterval = null;
let isTabVisible = true;
let tabHiddenTime = null;

const iceServers = {
    iceServers: [{
            urls: 'stun:stun.l.google.com:19302'
        },
        {
            urls: 'stun:stun1.l.google.com:19302'
        },
        {
            urls: 'stun:stun2.l.google.com:19302'
        }
    ]
};

const SILENCE_TIMEOUT = 5 * 60 * 1000;
const ROOM_CLEANUP_TIME = 12 * 60 * 60 * 1000;

const OFFENSIVE_WORDS = [
    'nigger', 'nigga', 'nig', 'faggot', 'fag', 'retard', 'retarded',
    'cunt', 'bitch', 'whore', 'slut', 'rape', 'nazi', 'hitler',
    'kike', 'spic', 'chink', 'gook', 'wetback', 'paki',
    'tranny', 'dyke', 'fck', 'fuck', 'shit', 'ass', 'damn',
    'penis', 'vagina', 'cock', 'dick', 'pussy', 'sex', 'porn',
    'kill yourself', 'kys', 'suicide', 'die', 'death'
];

function containsOffensiveWords(text) {
    const lowerText = text.toLowerCase();

    // Check for exact matches and variations
    for (const word of OFFENSIVE_WORDS) {
        // Check for the word with word boundaries
        const regex = new RegExp(`\\b${word}\\b`, 'i');
        if (regex.test(lowerText)) {
            return true;
        }

        // Check for the word without spaces or with special characters
        const stripped = lowerText.replace(/[^a-z0-9]/g, '');
        if (stripped.includes(word.replace(/[^a-z0-9]/g, ''))) {
            return true;
        }
    }

    return false;
}

function getInitials(name) {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
}

function checkUsername() {
    const saved = localStorage.getItem('voiceChatUsername');
    if (saved) {
        username = saved;
        document.getElementById('usernameInput').value = saved;
    } else {
        document.getElementById('usernameModal').classList.add('show');
    }
}

function setUsername() {
    const input = document.getElementById('usernameInput').value.trim();

    if (!input) {
        alert('Please enter a username!');
        return;
    }

    if (input.length > 15) {
        alert('Username must be 15 characters or less!');
        return;
    }

    // Check for offensive words
    if (containsOffensiveWords(input)) {
        alert('Username contains inappropriate content. Please choose a different name.');
        return;
    }

    // Check for email pattern
    if (input.includes('@') || input.includes('.com') || input.includes('.net') || input.includes('.org')) {
        alert('Username cannot be an email address!');
        return;
    }

    // Check for reserved names (case insensitive)
    const reservedNames = ['owner', 'developer', 'admin', 'moderator', 'mod', 'staff', 'support', 'official', 'system', 'bot'];
    if (reservedNames.includes(input.toLowerCase())) {
        alert('This username is reserved and cannot be used!');
        return;
    }

    username = input;
    localStorage.setItem('voiceChatUsername', username);
    document.getElementById('usernameModal').classList.remove('show');
}

function initDefaults() {
    ['General Chat', 'Game Chat'].forEach(name => {
        const roomRef = ref(db, `rooms/default/${name.replace(/\s+/g, '_')}`);

        onValue(roomRef, (snap) => {
            if (!snap.exists()) {
                set(roomRef, {
                    name: name,
                    type: 'default',
                    created: Date.now(),
                    lastActivity: Date.now()
                });
            }
        }, {
            onlyOnce: true
        });
    });
}

// Start room cleanup checker
function startRoomCleanup() {
    if (roomCleanupInterval) return;

    roomCleanupInterval = setInterval(() => {
        checkAndCleanupRooms();
    }, 60 * 1000); // Check every minute
}

async function checkAndCleanupRooms() {
    const now = Date.now();

    ['public', 'private'].forEach(type => {
        const roomsRef = ref(db, `rooms/${type}`);
        onValue(roomsRef, (snap) => {
            if (snap.exists()) {
                snap.forEach(async (child) => {
                    const room = child.val();
                    const roomId = child.key;

                    const hasParticipants = room.participants && Object.keys(room.participants).length > 0;
                    const lastActivity = room.lastActivity || room.created || 0;
                    const timeSinceActivity = now - lastActivity;

                    if (!hasParticipants && timeSinceActivity > ROOM_CLEANUP_TIME) {
                        console.log(`Cleaning up inactive room: ${room.name}`);
                        await remove(ref(db, `rooms/${type}/${roomId}`));
                    }
                });
            }
        }, {
            onlyOnce: true
        });
    });
}

function startSilenceCheck() {
    if (silenceCheckInterval) return;

    silenceCheckInterval = setInterval(() => {
        // Don't check if tab is hidden
        if (!isTabVisible) return;

        const timeSilent = Date.now() - lastSpeakTime;

        if (timeSilent > SILENCE_TIMEOUT && currentRoom) {
            console.log('Auto-disconnecting due to 5 minutes of silence');
            alert('Disconnected due to 5 minutes of inactivity');
            leaveRoom();
        }
    }, 10000); // Check every 10 seconds
}

function stopSilenceCheck() {
    if (silenceCheckInterval) {
        clearInterval(silenceCheckInterval);
        silenceCheckInterval = null;
    }
}

function updateLastActivity() {
    if (currentRoom && roomType) {
        const roomRef = ref(db, `rooms/${roomType}/${currentRoom}`);
        update(roomRef, {
            lastActivity: Date.now()
        }).catch(e => {
            console.warn('Failed to update room activity:', e);
        });
    }
}

initDefaults();
startRoomCleanup();

function listenRooms() {
    onValue(ref(db, 'rooms/default'), (snap) => displayRooms(snap, 'defaultRooms', 'default'));
    onValue(ref(db, 'rooms/public'), (snap) => displayRooms(snap, 'publicRooms', 'public'));
    onValue(ref(db, 'rooms/private'), (snap) => displayRooms(snap, 'privateRooms', 'private'));
}

function displayRooms(snap, containerId, type) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';

    if (snap.exists()) {
        snap.forEach((child) => {
            const room = child.val();
            const id = child.key;

            let count = 0;
            if (room.participants) {
                count = Object.keys(room.participants).length;
            }

            const div = document.createElement('div');
            div.className = 'room';
            if (currentRoom === id) div.classList.add('active');

            div.innerHTML = `
                <span>${room.name} ${room.password ? '<i class="bx bx-lock-alt"></i>' : ''}</span>
                <span class="room-count">${count}</span>
            `;

            div.onclick = () => joinRoom(id, type, room.name, room.password);
            container.appendChild(div);
        });
    }
}

async function joinRoom(id, type, name, hasPassword) {
    if (!username) {
        document.getElementById('usernameModal').classList.add('show');
        return;
    }

    const roomRef = ref(db, `rooms/${type}/${id}/participants`);
    const snapshot = await new Promise((resolve) => {
        onValue(roomRef, resolve, {
            onlyOnce: true
        });
    });

    if (snapshot.exists()) {
        const participantCount = Object.keys(snapshot.val()).length;
        const maxCapacity = type === 'private' ? 15 : 10;

        if (participantCount >= maxCapacity) {
            alert(`Room is full! Maximum capacity: ${maxCapacity}`);
            return;
        }
    }

    if (hasPassword) {
        const pass = prompt('Password:');
        if (pass !== hasPassword) {
            alert('Wrong password!');
            return;
        }
    }

    if (currentRoom) {
        await leaveRoom();
    }

    currentRoom = id;
    roomType = type;
    myPeerId = Date.now() + '_' + Math.random().toString(36).substr(2, 9);

    // Reset silence timer
    lastSpeakTime = Date.now();
    startSilenceCheck();

    // Update room activity
    updateLastActivity();

    const roomTitle = document.getElementById('roomTitle');
    if (roomTitle) roomTitle.textContent = name;

    const micBtn = document.getElementById('micBtn');
    const leaveBtn = document.querySelector('.leave-btn');
    if (micBtn) micBtn.classList.add('show');
    if (leaveBtn) leaveBtn.classList.add('show');

    try {
        stream = await navigator.mediaDevices.getUserMedia({
            audio: {
                echoCancellation: true,
                noiseSuppression: true,
                autoGainControl: true
            }
        });

        audioContext = new(window.AudioContext || window.webkitAudioContext)();

        const source = audioContext.createMediaStreamSource(stream);
        localAnalyser = audioContext.createAnalyser();
        localAnalyser.fftSize = 256;
        source.connect(localAnalyser);
        monitorAudio(myPeerId, localAnalyser);

    } catch (err) {
        console.error('microphone error:', err);
        alert('Microphone access denied! Please allow microphone access and try again.');
        return;
    }

    userRef = ref(db, `rooms/${type}/${id}/participants/${myPeerId}`);

    try {
        await set(userRef, {
            username: username,
            joined: Date.now(),
            muted: isMuted
        });
    } catch (err) {
        console.error('firebase join error:', err);
        alert('Failed to join room. Check console for details.');
        return;
    }

    onDisconnect(userRef).remove();

    const participantsRef = ref(db, `rooms/${type}/${id}/participants`);
    participantsListener = onValue(participantsRef, (snap) => {
        const container = document.getElementById('participants');
        if (!container) return;

        container.innerHTML = '';
        let count = 0;
        const currentParticipants = [];

        if (snap.exists()) {
            snap.forEach((child) => {
                const p = child.val();
                const peerId = child.key;
                count++;
                currentParticipants.push(peerId);

                const div = document.createElement('div');
                div.className = 'participant';
                div.innerHTML = `
                    <div class="avatar-wrapper">
                        <div class="avatar-ring" id="ring-${peerId}"></div>
                        <div class="avatar">${getInitials(p.username)}</div>
                    </div>
                    <div class="participant-name">${p.username}</div>
                    <div class="participant-status">${p.muted ? '<i class="bx bx-microphone-off"></i>' : '<i class="bx bx-microphone"></i>'}</div>
                `;
                container.appendChild(div);

                if (peerId !== myPeerId && !peerConnections[peerId]) {
                    if (myPeerId > peerId) {
                        setTimeout(() => createPeerConnection(peerId, true), 100);
                    } else {
                        createPeerConnection(peerId, false);
                    }
                }
            });
        }

        const countEl = document.getElementById('count');
        if (countEl) countEl.textContent = count;

        Object.keys(peerConnections).forEach(peerId => {
            if (!currentParticipants.includes(peerId)) {
                closePeerConnection(peerId);
            }
        });
    });

    const signalsRef = ref(db, `rooms/${type}/${id}/signals/${myPeerId}`);
    signalsListener = onValue(signalsRef, (snap) => {
        if (snap.exists()) {
            snap.forEach(async (child) => {
                const signal = child.val();
                const fromPeer = signal.from;

                if (signal.type === 'offer') {
                    await handleOffer(fromPeer, signal.offer);
                } else if (signal.type === 'answer') {
                    await handleAnswer(fromPeer, signal.answer);
                } else if (signal.type === 'candidate') {
                    await handleCandidate(fromPeer, signal.candidate);
                }

                remove(child.ref).catch(e => console.log('signal cleanup error:', e));
            });
        }
    });
}

function createPeerConnection(peerId, shouldOffer) {
    const pc = new RTCPeerConnection(iceServers);
    peerConnections[peerId] = pc;
    makingOffer[peerId] = false;

    stream.getTracks().forEach(track => {
        pc.addTrack(track, stream);
    });

    pc.ontrack = (event) => {
        if (!remoteAudios[peerId]) {
            const audio = new Audio();
            audio.autoplay = true;
            audio.volume = 1.0;
            remoteAudios[peerId] = audio;
        }

        const audio = remoteAudios[peerId];
        audio.srcObject = event.streams[0];

        const playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise.catch(e => {
                console.warn('autoplay blocked:', peerId);
                const startAudio = () => {
                    audio.play().then(() => {
                        document.removeEventListener('click', startAudio);
                    }).catch(err => console.error('cannot play:', err));
                };
                document.addEventListener('click', startAudio);
            });
        }

        if (audioContext && audioContext.state === 'running') {
            try {
                const source = audioContext.createMediaStreamSource(event.streams[0]);
                const analyser = audioContext.createAnalyser();
                analyser.fftSize = 256;
                source.connect(analyser);
                analyserNodes[peerId] = analyser;
                monitorAudio(peerId, analyser);
            } catch (e) {
                console.warn('could not create analyzer:', e);
            }
        }
    };

    pc.onicecandidate = (event) => {
        if (event.candidate) {
            sendSignal(peerId, {
                type: 'candidate',
                candidate: event.candidate.toJSON(),
                from: myPeerId
            });
        }
    };

    pc.onconnectionstatechange = () => {
        if (pc.connectionState === 'failed' || pc.connectionState === 'disconnected') {
            setTimeout(() => closePeerConnection(peerId), 1000);
        }
    };

    if (shouldOffer) {
        createOffer(peerId);
    }
}

function monitorAudio(peerId, analyser) {
    const dataArray = new Uint8Array(analyser.frequencyBinCount);

    function check() {
        if (!analyserNodes[peerId] && peerId !== myPeerId) return;
        if (peerId === myPeerId && !localAnalyser) return;

        analyser.getByteFrequencyData(dataArray);
        const average = dataArray.reduce((a, b) => a + b) / dataArray.length;

        const ring = document.getElementById(`ring-${peerId}`);
        if (ring) {
            if (average > 30) {
                ring.classList.add('speaking');
                // Reset silence timer when anyone speaks (including self)
                if (currentRoom) {
                    lastSpeakTime = Date.now();
                    updateLastActivity();
                }
            } else {
                ring.classList.remove('speaking');
            }
        }

        requestAnimationFrame(check);
    }
    check();
}

async function createOffer(peerId) {
    const pc = peerConnections[peerId];
    if (!pc) return;

    try {
        makingOffer[peerId] = true;
        const offer = await pc.createOffer();
        await pc.setLocalDescription(offer);

        sendSignal(peerId, {
            type: 'offer',
            offer: offer,
            from: myPeerId
        });
    } catch (err) {
        console.error('error creating offer:', err);
    } finally {
        makingOffer[peerId] = false;
    }
}

async function handleOffer(fromPeer, offer) {
    if (!peerConnections[fromPeer]) {
        createPeerConnection(fromPeer, false);
    }

    const pc = peerConnections[fromPeer];

    try {
        const offerCollision = (pc.signalingState !== "stable" || makingOffer[fromPeer]);

        const ignoreOffer = offerCollision && myPeerId < fromPeer;
        if (ignoreOffer) {
            return;
        }

        await pc.setRemoteDescription(new RTCSessionDescription(offer));

        if (pendingCandidates[fromPeer]) {
            for (const candidate of pendingCandidates[fromPeer]) {
                await pc.addIceCandidate(new RTCIceCandidate(candidate));
            }
            delete pendingCandidates[fromPeer];
        }

        const answer = await pc.createAnswer();
        await pc.setLocalDescription(answer);

        sendSignal(fromPeer, {
            type: 'answer',
            answer: answer,
            from: myPeerId
        });
    } catch (err) {
        console.error('error handling offer:', err);
    }
}

async function handleAnswer(fromPeer, answer) {
    const pc = peerConnections[fromPeer];

    if (!pc) {
        console.warn('no peer connection for answer');
        return;
    }

    try {
        if (pc.signalingState === 'have-local-offer') {
            await pc.setRemoteDescription(new RTCSessionDescription(answer));
        } else {
            console.warn('ignoring answer, wrong state:', pc.signalingState);
        }
    } catch (err) {
        console.error('error handling answer:', err);
    }
}

async function handleCandidate(fromPeer, candidate) {
    const pc = peerConnections[fromPeer];

    if (!pc) {
        console.warn('no peer connection for candidate');
        return;
    }

    try {
        if (pc.remoteDescription && pc.remoteDescription.type) {
            await pc.addIceCandidate(new RTCIceCandidate(candidate));
        } else {
            if (!pendingCandidates[fromPeer]) {
                pendingCandidates[fromPeer] = [];
            }
            pendingCandidates[fromPeer].push(candidate);
        }
    } catch (err) {
        console.error('ice candidate error:', err);
    }
}

function sendSignal(toPeer, signal) {
    if (!currentRoom || !roomType) return;

    const signalRef = push(ref(db, `rooms/${roomType}/${currentRoom}/signals/${toPeer}`));
    set(signalRef, signal).catch(err => {
        console.error('signal send error:', err);
    });
}

function closePeerConnection(peerId) {
    if (peerConnections[peerId]) {
        peerConnections[peerId].close();
        delete peerConnections[peerId];
    }
    if (analyserNodes[peerId]) {
        delete analyserNodes[peerId];
    }
    if (remoteAudios[peerId]) {
        remoteAudios[peerId].pause();
        remoteAudios[peerId].srcObject = null;
        delete remoteAudios[peerId];
    }
    if (pendingCandidates[peerId]) {
        delete pendingCandidates[peerId];
    }
    if (makingOffer[peerId] !== undefined) {
        delete makingOffer[peerId];
    }
}

async function leaveRoom() {
    stopSilenceCheck();

    if (participantsListener) {
        off(ref(db, `rooms/${roomType}/${currentRoom}/participants`));
    }
    if (signalsListener) {
        off(ref(db, `rooms/${roomType}/${currentRoom}/signals/${myPeerId}`));
    }

    if (userRef) await remove(userRef);
    if (stream) stream.getTracks().forEach(t => t.stop());

    Object.keys(peerConnections).forEach(peerId => {
        closePeerConnection(peerId);
    });

    if (currentRoom && roomType && myPeerId) {
        await remove(ref(db, `rooms/${roomType}/${currentRoom}/signals/${myPeerId}`));
    }

    if (audioContext) {
        audioContext.close();
        audioContext = null;
    }

    localAnalyser = null;
    currentRoom = null;
    userRef = null;
    stream = null;
    myPeerId = null;
    peerConnections = {};
    analyserNodes = {};
    remoteAudios = {};
    pendingCandidates = {};
    participantsListener = null;
    signalsListener = null;
    makingOffer = {};

    const roomTitle = document.getElementById('roomTitle');
    const participants = document.getElementById('participants');
    const count = document.getElementById('count');

    if (roomTitle) roomTitle.textContent = 'Select a room to join';
    if (participants) participants.innerHTML = '';
    if (count) count.textContent = '0';
}

function toggleMic() {
    if (!stream) return;

    isMuted = !isMuted;

    stream.getAudioTracks().forEach(track => {
        track.enabled = !isMuted;
    });

    const btn = document.getElementById('micBtn');
    const icon = document.getElementById('micIcon');
    const text = document.getElementById('micText');

    if (btn && icon && text) {
        if (isMuted) {
            btn.classList.add('muted');
            icon.className = 'bx bx-microphone-off';
            text.textContent = 'Muted';
        } else {
            btn.classList.remove('muted');
            icon.className = 'bx bx-microphone';
            text.textContent = 'Unmuted';
        }
    }

    if (userRef) {
        update(userRef, {
            muted: isMuted
        });
    }
}

function showCreateModal(type) {
    if (!username) {
        document.getElementById('usernameModal').classList.add('show');
        return;
    }
    roomType = type;

    const modal = document.getElementById('createModal');
    const passwordGroup = document.getElementById('passwordGroup');

    if (modal) modal.classList.add('show');
    if (passwordGroup) passwordGroup.style.display = type === 'private' ? 'block' : 'none';
}

function hideCreateModal() {
    const modal = document.getElementById('createModal');
    const roomNameInput = document.getElementById('roomNameInput');
    const passwordInput = document.getElementById('passwordInput');

    if (modal) modal.classList.remove('show');
    if (roomNameInput) roomNameInput.value = '';
    if (passwordInput) passwordInput.value = '';
}

function createRoom() {
    const nameInput = document.getElementById('roomNameInput');
    const passInput = document.getElementById('passwordInput');

    if (!nameInput) return;

    const name = nameInput.value.trim();
    const pass = passInput ? passInput.value.trim() : '';

    if (!name) {
        alert('Enter room name!');
        return;
    }

    if (name.length > 15) {
        alert('Room name must be 15 characters or less!');
        return;
    }

    // Check for offensive words in room name
    if (containsOffensiveWords(name)) {
        alert('Room name contains inappropriate content. Please choose a different name.');
        return;
    }

    const id = name.replace(/\s+/g, '_');
    const data = {
        name: name,
        type: roomType,
        creator: username,
        created: Date.now(),
        lastActivity: Date.now()
    };

    if (pass && roomType === 'private') data.password = pass;

    set(ref(db, `rooms/${roomType}/${id}`), data);
    hideCreateModal();
}

window.setUsername = setUsername;
window.toggleMic = toggleMic;
window.leaveRoom = leaveRoom;
window.showCreateModal = showCreateModal;
window.hideCreateModal = hideCreateModal;
window.createRoom = createRoom;

const usernameInput = document.getElementById('usernameInput');
if (usernameInput) {
    // Set max length on the input field
    usernameInput.maxLength = 15;

    usernameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') setUsername();
    });

    // Also validate on input to prevent pasting long text
    usernameInput.addEventListener('input', (e) => {
        if (e.target.value.length > 15) {
            e.target.value = e.target.value.slice(0, 15);
        }
    });
}

// Handle tab visibility for silence detection
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        isTabVisible = false;
        tabHiddenTime = Date.now();
    } else {
        isTabVisible = true;
        // Adjust lastSpeakTime to account for time spent hidden
        if (tabHiddenTime && currentRoom) {
            const timeHidden = Date.now() - tabHiddenTime;
            lastSpeakTime += timeHidden;
        }
        tabHiddenTime = null;
    }
});

checkUsername();
listenRooms();