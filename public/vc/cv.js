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
            onDisconnect
        } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js';

        const firebaseConfig = {
            apiKey: "AIzaSyC7jhfwo8pX2M0ux0Vtt0di2As9mUfH-7s",
            authDomain: "voicechat-global.firebaseapp.com",
            databaseURL: "https://voicechat-global-default-rtdb.firebaseio.com",
            projectId: "voicechat-global",
            storageBucket: "voicechat-global.firebasestorage.app",
            messagingSenderId: "810575934201",
            appId: "1:810575934201:web:7bfb46b12243f6d9d22828",
            measurementId: "G-GSJWGXFEET"
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
        let myPeerId = null;
        let audioContext = null;
        let analyserNodes = {};

        const iceServers = {
            iceServers: [{
                    urls: 'stun:stun.l.google.com:19302'
                },
                {
                    urls: 'stun:stun1.l.google.com:19302'
                }
            ]
        };

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
            if (input) {
                username = input;
                localStorage.setItem('voiceChatUsername', username);
                document.getElementById('usernameModal').classList.remove('show');
            }
        }

        function initDefaults() {
            ['General Chat', 'Game Chat'].forEach(name => {
                set(ref(db, `rooms/default/${name.replace(/\s+/g, '_')}`), {
                    name: name,
                    type: 'default',
                    created: Date.now()
                });
            });
        }

        initDefaults();

        function listenRooms() {
            onValue(ref(db, 'rooms/default'), (snap) => displayRooms(snap, 'defaultRooms', 'default'));
            onValue(ref(db, 'rooms/public'), (snap) => displayRooms(snap, 'publicRooms', 'public'));
            onValue(ref(db, 'rooms/private'), (snap) => displayRooms(snap, 'privateRooms', 'private'));
        }

        function displayRooms(snap, containerId, type) {
            const container = document.getElementById(containerId);
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

            if (hasPassword) {
                const pass = prompt('Password:');
                if (pass !== hasPassword) {
                    alert('Wrong password!');
                    return;
                }
            }

            if (currentRoom) await leaveRoom();

            currentRoom = id;
            roomType = type;
            myPeerId = Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            document.getElementById('roomTitle').textContent = name;

            try {
                stream = await navigator.mediaDevices.getUserMedia({
                    audio: true
                });
                audioContext = new(window.AudioContext || window.webkitAudioContext)();
            } catch (err) {
                alert('Microphone access denied!');
                return;
            }

            userRef = ref(db, `rooms/${type}/${id}/participants/${myPeerId}`);
            await set(userRef, {
                username: username,
                joined: Date.now(),
                muted: isMuted
            });

            onDisconnect(userRef).remove();

            onValue(ref(db, `rooms/${type}/${id}/participants`), (snap) => {
                const container = document.getElementById('participants');
                container.innerHTML = '';
                let count = 0;

                if (snap.exists()) {
                    snap.forEach((child) => {
                        const p = child.val();
                        const peerId = child.key;
                        count++;

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
                            createPeerConnection(peerId);
                        }
                    });
                }

                document.getElementById('count').textContent = count;

                Object.keys(peerConnections).forEach(peerId => {
                    if (!snap.child(peerId).exists()) {
                        closePeerConnection(peerId);
                    }
                });
            });

            onValue(ref(db, `rooms/${type}/${id}/signals/${myPeerId}`), (snap) => {
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

                        remove(child.ref);
                    });
                }
            });
        }

        function createPeerConnection(peerId) {
            const pc = new RTCPeerConnection(iceServers);
            peerConnections[peerId] = pc;

            stream.getTracks().forEach(track => {
                pc.addTrack(track, stream);
            });

            pc.ontrack = (event) => {
                const audio = new Audio();
                audio.srcObject = event.streams[0];
                audio.play();

                const source = audioContext.createMediaStreamSource(event.streams[0]);
                const analyser = audioContext.createAnalyser();
                analyser.fftSize = 256;
                source.connect(analyser);
                analyserNodes[peerId] = analyser;

                monitorAudio(peerId, analyser);
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
                    closePeerConnection(peerId);
                }
            };

            createOffer(peerId);
        }

        function monitorAudio(peerId, analyser) {
            const dataArray = new Uint8Array(analyser.frequencyBinCount);

            function check() {
                if (!analyserNodes[peerId]) return;

                analyser.getByteFrequencyData(dataArray);
                const average = dataArray.reduce((a, b) => a + b) / dataArray.length;

                const ring = document.getElementById(`ring-${peerId}`);
                if (ring) {
                    if (average > 30) {
                        ring.classList.add('speaking');
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

            const offer = await pc.createOffer();
            await pc.setLocalDescription(offer);

            sendSignal(peerId, {
                type: 'offer',
                offer: offer,
                from: myPeerId
            });
        }

        async function handleOffer(fromPeer, offer) {
            if (!peerConnections[fromPeer]) {
                const pc = new RTCPeerConnection(iceServers);
                peerConnections[fromPeer] = pc;

                stream.getTracks().forEach(track => {
                    pc.addTrack(track, stream);
                });

                pc.ontrack = (event) => {
                    const audio = new Audio();
                    audio.srcObject = event.streams[0];
                    audio.play();

                    const source = audioContext.createMediaStreamSource(event.streams[0]);
                    const analyser = audioContext.createAnalyser();
                    analyser.fftSize = 256;
                    source.connect(analyser);
                    analyserNodes[fromPeer] = analyser;

                    monitorAudio(fromPeer, analyser);
                };

                pc.onicecandidate = (event) => {
                    if (event.candidate) {
                        sendSignal(fromPeer, {
                            type: 'candidate',
                            candidate: event.candidate.toJSON(),
                            from: myPeerId
                        });
                    }
                };
            }

            const pc = peerConnections[fromPeer];
            await pc.setRemoteDescription(new RTCSessionDescription(offer));

            const answer = await pc.createAnswer();
            await pc.setLocalDescription(answer);

            sendSignal(fromPeer, {
                type: 'answer',
                answer: answer,
                from: myPeerId
            });
        }

        async function handleAnswer(fromPeer, answer) {
            const pc = peerConnections[fromPeer];
            if (pc && pc.signalingState === 'have-local-offer') {
                await pc.setRemoteDescription(new RTCSessionDescription(answer));
            }
        }

        async function handleCandidate(fromPeer, candidate) {
            const pc = peerConnections[fromPeer];
            if (pc && pc.remoteDescription) {
                await pc.addIceCandidate(new RTCIceCandidate(candidate));
            }
        }

        function sendSignal(toPeer, signal) {
            const signalRef = push(ref(db, `rooms/${roomType}/${currentRoom}/signals/${toPeer}`));
            set(signalRef, signal);
        }

        function closePeerConnection(peerId) {
            if (peerConnections[peerId]) {
                peerConnections[peerId].close();
                delete peerConnections[peerId];
            }
            if (analyserNodes[peerId]) {
                delete analyserNodes[peerId];
            }
        }

        async function leaveRoom() {
            if (userRef) await remove(userRef);
            if (stream) stream.getTracks().forEach(t => t.stop());

            Object.keys(peerConnections).forEach(peerId => {
                closePeerConnection(peerId);
            });

            if (currentRoom && roomType) {
                await remove(ref(db, `rooms/${roomType}/${currentRoom}/signals/${myPeerId}`));
            }

            if (audioContext) {
                audioContext.close();
                audioContext = null;
            }

            currentRoom = null;
            userRef = null;
            stream = null;
            myPeerId = null;
            peerConnections = {};
            analyserNodes = {};
            document.getElementById('roomTitle').textContent = 'Select a room to join';
            document.getElementById('participants').innerHTML = '';
            document.getElementById('count').textContent = '0';
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

            if (isMuted) {
                btn.classList.add('muted');
                icon.className = 'bx bx-microphone-off';
                text.textContent = 'Muted';
            } else {
                btn.classList.remove('muted');
                icon.className = 'bx bx-microphone';
                text.textContent = 'Unmuted';
            }

            if (userRef) {
                set(userRef, {
                    username: username,
                    joined: Date.now(),
                    muted: isMuted
                });
            }

            stream.getTracks().forEach(track => {
                track.enabled = !isMuted;
            });
        }

        function showCreateModal(type) {
            if (!username) {
                document.getElementById('usernameModal').classList.add('show');
                return;
            }
            roomType = type;
            document.getElementById('createModal').classList.add('show');
            document.getElementById('passwordGroup').style.display = type === 'private' ? 'block' : 'none';
        }

        function hideCreateModal() {
            document.getElementById('createModal').classList.remove('show');
            document.getElementById('roomNameInput').value = '';
            document.getElementById('passwordInput').value = '';
        }

        function createRoom() {
            const name = document.getElementById('roomNameInput').value.trim();
            const pass = document.getElementById('passwordInput').value.trim();

            if (!name) {
                alert('Enter room name!');
                return;
            }

            const id = name.replace(/\s+/g, '_');
            const data = {
                name: name,
                type: roomType,
                creator: username,
                created: Date.now()
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

        document.getElementById('usernameInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') setUsername();
        });

        checkUsername();
        listenRooms();