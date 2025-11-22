// claude helped me write this. only 50% of it tho
import {
  initializeApp
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  orderBy,
  onSnapshot,
  serverTimestamp,
  doc,
  setDoc,
  getDocs,
  updateDoc,
  getDoc
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";
import {
  getAuth,
  signInAnonymously,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

const firebaseConfig = {
   apiKey: "AIzaSyDXy_o49-yjJMHfQALVCqqklWA7-OCQ3xE",
   authDomain: "chattingsys-5b74e.firebaseapp.com",
   projectId: "chattingsys-5b74e",
   storageBucket: "chattingsys-5b74e.firebasestorage.app",
   messagingSenderId: "299919901570",
   appId: "1:299919901570:web:ea5a199f35e6f0c35d059b",
   measurementId: "G-56SP4JFZ4T"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
let me = {
  uid: null,
  name: sessionStorage.getItem("username") || "",
  tag: sessionStorage.getItem("usertag") || "",
  avatar: "?"
};
let current = {
  type: "public",
  id: "public",
  title: "General Chat"
};
let unsubMsgs = null,
  unsubMyRooms = null,
  unsubUsers = null;
let lastMessageTime = 0,
  messageHistory = [],
  mutedUntil = 0;
let roomCache = {};
let activeListeners = {};
const COOLDOWN_MS = 3000,
  MUTE_DURATION_MS = 600000,
  SPAM_THRESHOLD = 5;
const swearingBlacklist = ["fuck", "shit", "damn", "bitch", "bastard", "dickhead", "asshole", "motherfucker", "bullshit", "dumbass", "retard", "slut", "whore", "fag", "cunt", "pussy", "cock", "dick", "penis", "vagina", "tits", "boobs", "sex", "porn", "masturbate", "orgasm", "horny", "nude", "naked", "strip", "rape", "murder", "die", "death", "suicide", "bomb", "terrorist"];
let isAdmin = false,
  adminCheckComplete = false;
const emojis = ["😀", "😃", "😄", "😁", "😆", "😅", "🤣", "😂", "🙂", "🙃", "😉", "😊", "😇", "🥰", "😍", "🤩", "😘", "😗", "😚", "😙", "🥲", "😋", "😛", "😜", "🤪", "😝", "🤑", "🤗", "🤭", "🤫", "🤔", "🤐", "🤨", "😐", "😑", "😶", "😏", "😒", "🙄", "😬", "🤥", "😌", "😔", "😪", "🤤", "😴", "😷", "🤒", "🤕", "🤢", "🤮", "🤧", "🥵", "🥶", "🥴", "😵", "🤯", "🤠", "🥳", "🥸", "😎", "🤓", "🧐", "😕", "😟", "🙁", "☹️", "😮", "😯", "😲", "😳", "🥺", "😦", "😧", "😨", "😰", "😥", "😢", "😭", "😱", "😖", "😣", "😞", "😓", "😩", "😫", "🥱", "😤", "😡", "😠", "🤬", "😈", "👿", "💀", "☠️", "💩", "🤡", "👹", "👺", "👻", "👽", "👾", "🤖", "🎃", "😺", "❤️", "🧡", "💛", "💚", "💙", "💜", "🖤", "🤍", "🤎", "💔", "❣️", "💕", "💖", "💗", "💘", "💝", "💟", "♥️", "💯", "👍", "👎", "✌️", "🤞", "🤟", "🤘", "🤙", "👈", "👉", "👆", "👇", "☝️", "✋", "🤚", "🖐️", "🖖", "👋", "🤛", "🤜", "✊", "👊", "💪", "🙏", "✨", "⭐", "🌟", "💥", "🔥", "❄️", "⚡", "🌈", "☀️", "☁️"];
const usersPanel = document.getElementById("usersPanel");
const toggleUsersBtn = document.getElementById("toggleUsers");
const usersList = document.getElementById("usersList");
const chatTitle = document.getElementById("chatTitle");
const messagesEl = document.getElementById("messages");
const messageInput = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");
const publicBtn = document.getElementById("publicBtn");
const myChats = document.getElementById("myChats");
const startDmBtn = document.getElementById("startDmBtn");
const createGroupBtn = document.getElementById("createGroupBtn");
const changeNameBtn = document.getElementById("changeNameBtn");
const renameGroupBtn = document.getElementById("renameGroupBtn");
const adminPanelBtn = document.getElementById("adminPanelBtn");
const adminKeyBtn = document.getElementById("adminKeyBtn");
const modalOverlay = document.getElementById("modalOverlay");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const modalCancel = document.getElementById("modalCancel");
const modalSave = document.getElementById("modalSave");

async function requestNotificationPermission() {
  if ('Notification' in window && Notification.permission === 'default') await Notification.requestPermission();
}

function showMessageNotification(messageData, roomType) {
  if (messageData.uid === me.uid || roomType === 'public' || !('Notification' in window) || Notification.permission !== 'granted') return;
  let title, body;
  const senderName = sanitizeInput(messageData.name || "Unknown", 20);
  const senderTag = sanitizeInput(messageData.tag || "0000", 10);
  const messageText = sanitizeInput(messageData.text || "", 50);
  const userName = sanitizeInput(me.name || "User", 20);
  const fullSenderName = safeUsername(senderName, senderTag);
  if (roomType === 'dm') {
    title = `New Direct Message`;
    body = `Hey ${userName}! ${fullSenderName} has just DM'ed you:\n'${messageText}'`;
  } else if (roomType === 'group') {
    title = `New Group Message`;
    body = `Hey ${userName}! ${fullSenderName} has sent a group message:\n'${messageText}'`;
  }
  if (title && body) {
    const notification = new Notification(title, {
      body: body,
      tag: `message-${roomType}-${messageData.uid}`,
      requireInteraction: false
    });
    notification.onclick = () => {
      window.focus();
      notification.close();
    };
    setTimeout(() => notification.close(), 5000);
  }
}

function sanitizeInput(input, maxLength = 50) {
  if (typeof input !== 'string') return '';
  return input.trim().substring(0, maxLength);
}

function validateId(id) {
  if (typeof id !== 'string') return false;
  return /^[a-zA-Z0-9_-]+$/.test(id);
}

function createTextElement(tagName, text, className = null) {
  const element = document.createElement(tagName);
  element.textContent = text;
  if (className) element.className = className;
  return element;
}

function safeSetAttribute(element, attribute, value) {
  if (typeof attribute !== 'string' || typeof value !== 'string') return;
  const safeAttributes = ['id', 'class', 'data-uid', 'data-name', 'data-tag', 'type', 'name', 'value', 'placeholder', 'maxlength'];
  if (safeAttributes.includes(attribute)) {
    const sanitizedValue = value.replace(/[<>"']/g, '');
    element.setAttribute(attribute, sanitizedValue);
  }
}

function avatarLetter(name) {
  const safeName = sanitizeInput(name);
  return (safeName[0] || "?").toUpperCase();
}

function randomTag() {
  return Math.floor(1000 + Math.random() * 9000).toString();
}

function safeUsername(name, tag) {
  const safeName = sanitizeInput(name, 20);
  const safeTag = sanitizeInput(tag, 10);
  return `${safeName}#${safeTag}`;
}

function formatTimestamp(timestamp) {
  if (!timestamp) return "";

  const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);

  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  const messageDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

  const timeStr = date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });

  if (messageDate.getTime() === today.getTime()) {
    return timeStr;
  } else if (messageDate.getTime() === yesterday.getTime()) {
    return `Yesterday, ${timeStr}`;
  } else {
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2);
    return `${month}/${day}/${year}, ${timeStr}`;
  }
}

function filterSwearing(text) {
  let filtered = sanitizeInput(text, 119);
  swearingBlacklist.forEach(word => {
    const regex = new RegExp(`\\b\\w*${word}\\w*\\b`, 'gi');
    filtered = filtered.replace(regex, (match) => '*'.repeat(match.length));
  });
  return filtered;
}

async function checkAdminStatus() {
  if (!me.uid) return false;
  try {
    const adminQuery = query(collection(db, "admins"), where("uid", "==", me.uid));
    const adminDoc = await getDocs(adminQuery);

    if (!adminDoc.empty) {
      isAdmin = true;
      const adminData = adminDoc.docs[0].data();

      me.name = "♛ JRDN";
      me.tag = "3164";
      me.isAdmin = true;
      me.isOwner = adminData.isOwner;

      sessionStorage.setItem("username", me.name);
      sessionStorage.setItem("usertag", me.tag);

      updateOwnerBadge();

      return true;
    }
    return false;
  } catch (error) {
    console.error("Admin check error:", error);
    return false;
  }
}

function updateOwnerBadge() {
  console.log("updateOwnerBadge called", { isOwner: me.isOwner, uid: me.uid });
  
  if (!me.isOwner) {
    console.log("Not owner, skipping badge");
    return;
  }
  
  const myUserRow = document.querySelector(`.user-row[data-uid="${me.uid}"]`);
  console.log("Found user row:", myUserRow);
  
  if (myUserRow) {
    const nameEl = myUserRow.querySelector('.user-name');
    console.log("Found name element:", nameEl);
    
    if (nameEl) {
      nameEl.textContent = '';
      
      const badge = document.createElement('span');
      badge.id = 'owner-badge';
      badge.textContent = '♛ JRDN';
      nameEl.appendChild(badge);
      
      nameEl.appendChild(document.createTextNode(' [Owner] #3164 (you)'));
      console.log("Badge applied successfully");
    }
  } else {
    console.log("User row not found yet - will be applied on next render");
  }
}

function updateAdminUI() {
  const adminBtn = document.getElementById("adminPanelBtn");
  const adminKeyBtn = document.getElementById("adminKeyBtn");
  if (adminBtn) adminBtn.style.display = isAdmin ? "block" : "none";
  if (adminKeyBtn) adminKeyBtn.style.display = !isAdmin ? "block" : "none";
}

function showStatusMessage(message, type = 'info') {
  const statusDiv = document.createElement('div');
  statusDiv.style.cssText = `position:fixed;top:20px;right:20px;padding:12px 20px;border-radius:8px;color:white;font-weight:500;z-index:10000;animation:slideIn 0.3s ease-out;max-width:300px;word-wrap:break-word;`;
  if (type === 'error') statusDiv.style.background = '#ff4444';
  else if (type === 'warning') statusDiv.style.background = '#ff8800';
  else statusDiv.style.background = '#4CAF50';
  statusDiv.textContent = sanitizeInput(message, 200);
  document.body.appendChild(statusDiv);
  setTimeout(() => {
    statusDiv.style.animation = 'slideOut 0.3s ease-in forwards';
    setTimeout(() => statusDiv.remove(), 300);
  }, 3000);
}

function checkSpamProtection(text) {
  const now = Date.now();
  if (now < mutedUntil) {
    const remainingTime = Math.ceil((mutedUntil - now) / 1000);
    showStatusMessage(`You are muted for ${remainingTime} more seconds`, 'error');
    return false;
  }
  const timeSinceLastMessage = now - lastMessageTime;
  if (timeSinceLastMessage < COOLDOWN_MS) {
    const remainingCooldown = Math.ceil((COOLDOWN_MS - timeSinceLastMessage) / 1000);
    showStatusMessage(`Please wait ${remainingCooldown} seconds before sending another message`, 'warning');
    return false;
  }
  messageHistory.push({
    text: text.toLowerCase().trim(),
    timestamp: now
  });
  if (messageHistory.length > 10) messageHistory.shift();
  const recentIdentical = messageHistory.filter(msg => msg.text === text.toLowerCase().trim() && (now - msg.timestamp) < 60000);
  if (recentIdentical.length >= SPAM_THRESHOLD) {
    mutedUntil = now + MUTE_DURATION_MS;
    showStatusMessage('You have been muted for 10 minutes due to spam', 'error');
    messageHistory = messageHistory.filter(msg => msg.text !== text.toLowerCase().trim());
    return false;
  }
  lastMessageTime = now;
  return true;
}

function updateSendButtonState() {
  const now = Date.now();
  const isEnabled = messageInput.value.trim() && now >= mutedUntil && (now - lastMessageTime) >= COOLDOWN_MS;
  sendBtn.disabled = !isEnabled;
  sendBtn.style.opacity = isEnabled ? '1' : '0.5';
  sendBtn.style.cursor = isEnabled ? 'pointer' : 'not-allowed';
  if (now < mutedUntil) {
    const remainingTime = Math.ceil((mutedUntil - now) / 1000);
    messageInput.placeholder = `Muted for ${remainingTime} seconds...`;
    messageInput.disabled = true;
  } else {
    messageInput.placeholder = "Type a message...";
    messageInput.disabled = false;
  }
}

function addEmojiPicker() {
  const picker = document.createElement('div');
  picker.id = 'emojiPicker';
  picker.style.cssText = `position:absolute;bottom:60px;right:10px;background:var(--surface-hover);border:1px solid #ccc;border-radius:8px;padding:10px;max-width:300px;max-height:200px;overflow-y:auto;display:none;z-index:9999999;box-shadow:0 4px 12px rgba(0,0,0,0.15);`;
  emojis.forEach(emoji => {
    const emojiBtn = document.createElement('button');
    emojiBtn.textContent = emoji;
    emojiBtn.style.cssText = `border:none;background:none;font-size:20px;margin:2px;cursor:pointer;padding:4px;border-radius:4px;`;
    emojiBtn.onclick = () => {
      if (messageInput.value.length < 119) {
        messageInput.value += emoji;
        updateCharCount();
        picker.style.display = 'none';
        messageInput.focus();
      }
    };
    picker.appendChild(emojiBtn);
  });
  document.body.appendChild(picker);
  const emojiToggle = document.createElement('button');
  emojiToggle.textContent = '😀';
  emojiToggle.style.cssText = `position:absolute;right:20px;bottom:40px;transform:translateY(-50%);border:none;background:var(--surface);font-size:20px;cursor:pointer;padding:5px;border-radius:4px;z-index:9999;`;
  emojiToggle.onclick = () => {
    picker.style.display = picker.style.display === 'none' ? 'block' : 'none';
  };
  const charCounter = document.createElement('div');
  charCounter.id = 'charCounter';
  charCounter.style.cssText = `position:absolute;right:10px;bottom:450px;transform:translateY(-50%);font-size:12px;color:var(--text-muted);pointer-events:none;opacity:0;transition:opacity 0.2s ease;`;
  const inputContainer = messageInput.parentElement;
  inputContainer.style.position = 'relative';
  inputContainer.appendChild(emojiToggle);
  inputContainer.appendChild(charCounter);

  function updateCharCount() {
    const count = messageInput.value.length;
    charCounter.textContent = `${count}/119`;
    if (count >= 90) {
      charCounter.style.opacity = '1';
      if (count > 100) charCounter.style.color = count >= 119 ? '#ff4444' : '#ff8800';
      else charCounter.style.color = 'var(--text-muted)';
    } else charCounter.style.opacity = '0';
    updateSendButtonState();
  }
  messageInput.addEventListener('input', (e) => {
    if (e.target.value.length > 119) e.target.value = e.target.value.substring(0, 119);
    updateCharCount();
  });
  messageInput.addEventListener('focus', () => {
    const count = messageInput.value.length;
    if (count >= 90) charCounter.style.opacity = '1';
  });
  messageInput.addEventListener('blur', () => {
    const count = messageInput.value.length;
    if (count < 90) charCounter.style.opacity = '0';
  });
  updateCharCount();
  window.updateCharCount = updateCharCount;
  setInterval(updateSendButtonState, 1000);
  document.addEventListener('click', (e) => {
    if (!picker.contains(e.target) && e.target !== emojiToggle) picker.style.display = 'none';
  });
}

function createSafeModal(title, contentBuilder, onSave) {
  modalTitle.textContent = sanitizeInput(title, 100);
  modalBody.innerHTML = "";
  const content = contentBuilder();
  modalBody.appendChild(content);
  modalOverlay.style.display = "flex";
  const firstInput = modalBody.querySelector("input");
  if (firstInput) setTimeout(() => firstInput.focus(), 0);
  modalSave.onclick = async () => {
    if (onSave) await onSave();
  };
}

function closeModal() {
  modalOverlay.style.display = "none";
  modalBody.innerHTML = "";
  modalSave.onclick = null;
}
modalCancel.onclick = closeModal;

function roomPathForCurrent() {
  if (current.type === "public") return ["rooms", "public", "messages"];
  if (current.type === "dm") return ["dms", current.id, "messages"];
  if (current.type === "group") return ["groups", current.id, "messages"];
  return ["rooms", "public", "messages"];
}

function renderMessage(m) {
  const row = document.createElement("div");
  row.className = "bubble" + (m.uid === me.uid ? " me" : "");
  const av = document.createElement("div");
  av.className = "avatar";
  av.textContent = avatarLetter(m.name);
  const content = document.createElement("div");
  content.className = "content";
  const nm = document.createElement("div");
  nm.className = "name";
  const timestamp = formatTimestamp(m.timestamp);
  const safeName = sanitizeInput(m.name || "Unknown", 20);
  const safeTag = sanitizeInput(m.tag || "0000", 10);
  nm.textContent = `${safeUsername(safeName, safeTag)} • ${timestamp}`;
  const tx = document.createElement("div");
  const safeText = filterSwearing(sanitizeInput(m.text || "", 119));
  tx.textContent = safeText;
  content.appendChild(nm);
  content.appendChild(tx);
  row.appendChild(av);
  row.appendChild(content);
  return row;
}

function setActiveRoomButton(id) {
  document.querySelectorAll(".room-btn").forEach(b => b.classList.remove("active"));
  if (validateId(id)) {
    const btn = document.getElementById(`roombtn_${id}`);
    if (btn) btn.classList.add("active");
  }
  if (id === "public") publicBtn.classList.add("active");
}

async function loadUserProfile() {
  if (!me.uid) return false;
  
  try {
    const userDoc = await getDoc(doc(db, "users", me.uid));
    
    if (userDoc.exists()) {
      const userData = userDoc.data();
      me.name = userData.name;
      me.tag = userData.tag;
      me.avatar = avatarLetter(me.name);
      sessionStorage.setItem("username", me.name);
      sessionStorage.setItem("usertag", me.tag);
      console.log("Loaded existing profile:", me.name, me.tag);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error("Error loading user profile:", error);
    return false;
  }
}

onAuthStateChanged(auth, async (user) => {
  if (!user) return;
  
  me.uid = user.uid;
  await checkAdminStatus();
  adminCheckComplete = true;
  const profileLoaded = await loadUserProfile();
  
  if (!profileLoaded && !me.name) {
    showUsernameModal("Set Username");
  } else {
    me.avatar = avatarLetter(me.name);
    await upsertUserProfile();
    updateAdminUI();
    startListeners();
    addEmojiPicker();
    requestNotificationPermission();
  }
});
signInAnonymously(auth).catch(console.error);

function showUsernameModal(title) {
  createSafeModal(title, () => {
    const container = document.createElement('div');
    const input = document.createElement('input');
    input.id = 'usernameInput';
    input.className = 'input';
    input.placeholder = 'Your name';
    input.maxLength = 14;
    const hint = createTextElement('div', 'Maximum 14 characters. Lowercase letters, numbers, and basic punctuation only.');
    hint.style.cssText = 'font-size:12px;color:var(--text-muted);margin-top:5px;';
    container.appendChild(input);
    container.appendChild(hint);
    
    if (title === "Set Username") {
      modalCancel.style.display = 'none';
    }
    
    return container;
  }, async () => {
    const rawVal = document.getElementById("usernameInput").value;
    const allowedPattern = /^[a-z0-9\s._-]+$/;
    
    if (!allowedPattern.test(rawVal.trim())) {
      alert('Username can only contain lowercase letters, numbers, spaces, and basic punctuation (. _ -)');
      return;
    }
    
    const val = sanitizeInput(rawVal, 20);
    if (!val) return;
    
    me.name = val;
    me.tag = randomTag();
    me.avatar = avatarLetter(val);
    sessionStorage.setItem("username", me.name);
    sessionStorage.setItem("usertag", me.tag);
    await upsertUserProfile();

    modalCancel.style.display = '';
    
    closeModal();
    updateAdminUI();
    startListeners();
    addEmojiPicker();
    requestNotificationPermission();
  });
}
changeNameBtn.onclick = () => showUsernameModal("Change Username");

async function upsertUserProfile() {
  if (!me.uid) return;
  try {
    const ref = doc(db, "users", me.uid);
    await setDoc(ref, {
      uid: me.uid,
      name: sanitizeInput(me.name, 20),
      tag: sanitizeInput(me.tag, 10),
      avatar: avatarLetter(me.name),
      status: "online",
      lastSeen: serverTimestamp()
    }, {
      merge: true
    });
  } catch (error) {
    console.error("Profile update error:", error);
  }
  window.addEventListener("beforeunload", async () => {
    try {
      const ref = doc(db, "users", me.uid);
      await updateDoc(ref, {
        status: "offline",
        lastSeen: serverTimestamp()
      });
    } catch (e) {
      console.error("Status update error:", e);
    }
  });
}

function showLoadingScreen() {
  if (roomCache[current.id]?.loaded) return;
  
  messagesEl.innerHTML = `
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:1rem;">
      <div style="width:50px;height:50px;border:4px solid var(--surface-hover);border-top:4px solid var(--primary);border-radius:50%;animation:spin 1s linear infinite;"></div>
      <div style="color:var(--text-muted);font-size:0.9rem;">Loading...</div>
    </div>
  `;
}

function openRoom(kind, id, title) {
  const safeKind = sanitizeInput(kind, 10);
  const safeId = sanitizeInput(id, 50);
  const safeTitle = sanitizeInput(title, 100);
  
  current = {
    type: safeKind,
    id: safeId,
    title: safeTitle
  };
  
  chatTitle.textContent = safeTitle;
  const renameBtn = document.getElementById("renameGroupBtn");
  if (renameBtn) renameBtn.style.display = safeKind === "group" ? "inline-block" : "none";
  
  const cacheKey = safeId;
  if (roomCache[cacheKey]?.loaded && roomCache[cacheKey].fragment) {
    messagesEl.innerHTML = "";
    messagesEl.appendChild(roomCache[cacheKey].fragment.cloneNode(true));
    messagesEl.scrollTop = messagesEl.scrollHeight;
    
    if (!activeListeners[cacheKey]) {
      setupRoomListener(safeKind, safeId, cacheKey, false);
    }
  } else {
    showLoadingScreen();
    setupRoomListener(safeKind, safeId, cacheKey, true);
  }
  
  setActiveRoomButton(safeId);
}

function setupRoomListener(kind, id, cacheKey, isInitialLoad) {
  if (activeListeners[id]) {
    activeListeners[id]();
  }
  
  const [c1, c2, c3] = kind === "public" ? ["rooms", "public", "messages"] :
                       kind === "dm" ? ["dms", id, "messages"] :
                       ["groups", id, "messages"];
  
  const messageQuery = query(collection(db, c1, c2, c3), orderBy("timestamp"));
  
  const lastProcessedIndex = { value: -1 };
  
  activeListeners[id] = onSnapshot(messageQuery, (snap) => {
    const isActiveRoom = current.id === id;
    
    if (isInitialLoad) {
      const fragment = document.createDocumentFragment();
      const messages = [];
      
      const batchSize = 100;
      const docs = snap.docs;
      
      for (let i = 0; i < docs.length; i += batchSize) {
        const batch = docs.slice(i, i + batchSize);
        batch.forEach(docSnap => {
          const el = renderMessage(docSnap.data());
          fragment.appendChild(el);
          messages.push(el.cloneNode(true));
        });
      }
      
      roomCache[cacheKey] = {
        messages: messages,
        loaded: true,
        fragment: fragment.cloneNode(true)
      };
      
      if (isActiveRoom) {
        messagesEl.innerHTML = "";
        messagesEl.appendChild(fragment);
        messagesEl.scrollTop = messagesEl.scrollHeight;
      }
      
      lastProcessedIndex.value = snap.docs.length - 1;
      isInitialLoad = false;
    } else {
      for (const change of snap.docChanges()) {
        if (change.type === "added" && change.newIndex > lastProcessedIndex.value) {
          const m = change.doc.data();
          const messageElement = renderMessage(m);
          
          if (roomCache[cacheKey]) {
            roomCache[cacheKey].messages.push(messageElement.cloneNode(true));
            if (roomCache[cacheKey].fragment) {
              roomCache[cacheKey].fragment.appendChild(messageElement.cloneNode(true));
            }
          }
          
          if (isActiveRoom) {
            messagesEl.appendChild(messageElement);
            showMessageNotification(m, current.type);
            messagesEl.scrollTop = messagesEl.scrollHeight;
          }
          
          lastProcessedIndex.value = change.newIndex;
        }
      }
    }
  }, (error) => {
    console.error("Messages listener error:", error);
    if (isActiveRoom) {
      messagesEl.innerHTML = `<div style="text-align:center;padding:2rem;color:var(--text-muted);">Failed to load messages</div>`;
      showStatusMessage("Failed to load messages", "error");
    }
  });
}

function startListeners() {
  if (!me.uid) {
    setTimeout(() => startListeners(), 100);
    return;
  }
  if (unsubUsers) unsubUsers();
  unsubUsers = onSnapshot(query(collection(db, "users"), orderBy("name")), (snap) => {
    usersList.innerHTML = "";
    snap.forEach(d => {
      const u = d.data();
      if (!u.name) return;
      const userData = {
        uid: u.uid,
        name: sanitizeInput(u.name, 20),
        tag: sanitizeInput(u.tag, 10),
        status: sanitizeInput(u.status || "offline", 20)
      };
      if (userData.uid === me.uid) {
        userData.name = me.name;
        userData.tag = me.tag;
      }
      const row = document.createElement("div");
      row.className = "user-row";
      safeSetAttribute(row, 'data-uid', userData.uid);
      const avatar = createTextElement('div', avatarLetter(userData.name), 'avatar');
      const userInfo = document.createElement('div');
      const userName = createTextElement('div', `${safeUsername(userData.name, userData.tag)}${userData.uid === me.uid ? " (you)" : ""}`, 'user-name');
      const userMeta = createTextElement('div', userData.status, 'user-meta');
      userInfo.appendChild(userName);
      userInfo.appendChild(userMeta);
      row.appendChild(avatar);
      row.appendChild(userInfo);
      row.onclick = () => {
        if (userData.uid !== me.uid) {
          createOrOpenDM(userData.uid, userData.name, userData.tag);
          usersPanel.classList.remove("open");
        }
      };
      usersList.appendChild(row);
    });
  }, (error) => {
    console.error("Users listener error:", error);
    showStatusMessage("Failed to load users", "error");
  });
  if (unsubMyRooms) unsubMyRooms();
  const renderRooms = {
    dms: [],
    groups: []
  };
  const drawRooms = () => {
    myChats.innerHTML = "";
    const sortedDMs = renderRooms.dms.sort((a, b) => (b.updatedAt?.seconds || 0) - (a.updatedAt?.seconds || 0));
    const sortedGroups = renderRooms.groups.sort((a, b) => (b.updatedAt?.seconds || 0) - (a.updatedAt?.seconds || 0));
    if (sortedDMs.length > 0) {
      sortedDMs.forEach(r => {
        const btn = document.createElement("button");
        btn.className = "room-btn";
        if (validateId(r.key)) btn.id = `roombtn_${r.key}`;
        btn.textContent = sanitizeInput(r.label.replace("DM: ", ""), 50);
        btn.onclick = () => openRoom(r.kind, r.id, r.label);
        myChats.appendChild(btn);
      });
    }
    if (sortedGroups.length > 0) {
      if (sortedDMs.length > 0) {
        const separator = createTextElement("div", "Groups", "side-title");
        separator.style.marginTop = "1rem";
        myChats.appendChild(separator);
      }
      sortedGroups.forEach(r => {
        const btn = document.createElement("button");
        btn.className = "room-btn";
        if (validateId(r.key)) btn.id = `roombtn_${r.key}`;
        btn.textContent = sanitizeInput(r.label.replace("Group: ", ""), 50);
        btn.onclick = () => openRoom(r.kind, r.id, r.label);
        myChats.appendChild(btn);
      });
    }
    if (sortedDMs.length === 0 && sortedGroups.length === 0) {
      const emptyMsg = createTextElement("div", "No conversations yet. Start a DM or create a group!");
      emptyMsg.style.cssText = `padding:1rem;color:var(--text-muted);font-size:0.9rem;`;
      myChats.appendChild(emptyMsg);
    }
    setActiveRoomButton(current.id);
  };
  const dmQuery = query(collection(db, "dms"), where("memberUids", "array-contains", me.uid));
  const dmUnsub = onSnapshot(dmQuery, (snap) => {
    renderRooms.dms = snap.docs.map(d => {
      const r = d.data();
      const otherUid = (r.memberUids || []).find(x => x !== me.uid);
      const otherName = sanitizeInput(r.memberNames?.[otherUid] || "Unknown", 20);
      const otherTag = sanitizeInput(r.memberTags?.[otherUid] || "0000", 10);
      return {
        kind: "dm",
        id: d.id,
        key: d.id,
        label: `DM: ${safeUsername(otherName, otherTag)}`,
        updatedAt: r.updatedAt
      };
    });
    drawRooms();
  }, (error) => {
    console.error("DM listener error:", error);
  });
  const groupQuery = query(collection(db, "groups"), where("memberUids", "array-contains", me.uid));
  const groupUnsub = onSnapshot(groupQuery, (snap) => {
    renderRooms.groups = snap.docs.map(d => {
      const r = d.data();
      const safeName = sanitizeInput(r.name || "Unnamed", 50);
      return {
        kind: "group",
        id: d.id,
        key: d.id,
        label: `Group: ${safeName}`,
        updatedAt: r.updatedAt
      };
    });
    drawRooms();
  }, (error) => {
    console.error("Group listener error:", error);
  });
  unsubMyRooms = () => {
    dmUnsub();
    groupUnsub();
  };
  openRoom(current.type, current.id, current.title);
  
  if (current.id !== "public") {
    setTimeout(() => {
      setupRoomListener("public", "public", "public", true);
    }, 500);
  }
}

async function sendMessage() {
  const text = sanitizeInput(messageInput.value, 119);
  if (!text || !me.uid || !me.name) return;

  try {
    const userQuery = query(collection(db, "users"), where("uid", "==", me.uid));
    const userSnap = await getDocs(userQuery);
    
    if (!userSnap.empty) {
      const userData = userSnap.docs[0].data();
      
      if (userData.banned) {
        showStatusMessage("You are banned from this chat, get a life", "error");
        messageInput.value = "";
        if (window.updateCharCount) window.updateCharCount();
        return;
      }
      
      if (userData.mutedUntil && userData.mutedUntil > Date.now()) {
        const remainingTime = Math.ceil((userData.mutedUntil - Date.now()) / 1000);
        showStatusMessage(`You are muted for ${remainingTime} more seconds`, "error");
        messageInput.value = "";
        if (window.updateCharCount) window.updateCharCount();
        return;
      }
    }
  } catch (error) {
    console.error("User status check error:", error);
  }
  
  if (!checkSpamProtection(text)) return;
  
  try {
    const [c1, c2, c3] = roomPathForCurrent();
    const messageData = {
      uid: me.uid,
      name: sanitizeInput(me.name, 20),
      tag: sanitizeInput(me.tag, 10),
      text: text,
      timestamp: serverTimestamp()
    };
    await addDoc(collection(db, c1, c2, c3), messageData);
    if (current.type === "dm") await setDoc(doc(db, "dms", current.id), {
      updatedAt: serverTimestamp()
    }, {
      merge: true
    }).catch(console.error);
    else if (current.type === "group") await setDoc(doc(db, "groups", current.id), {
      updatedAt: serverTimestamp()
    }, {
      merge: true
    }).catch(console.error);
    messageInput.value = "";
    if (window.updateCharCount) window.updateCharCount();
  } catch (error) {
    console.error("Send error:", error);
    showStatusMessage("Failed to send message. Try again.", "error");
  }
}
sendBtn.onclick = sendMessage;
messageInput.addEventListener("keydown", e => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
});
publicBtn.onclick = () => openRoom("public", "public", "General Chat");
toggleUsersBtn.onclick = () => usersPanel.classList.toggle("open");

startDmBtn.onclick = async () => {
  try {
    const usersSnap = await getDocs(query(collection(db, "users"), orderBy("name")));
    createSafeModal("Start a Direct Message", () => {
      const container = document.createElement('div');
      const listContainer = document.createElement('div');
      listContainer.className = 'list';
      let hasUsers = false;
      usersSnap.forEach(d => {
        const u = d.data();
        if (u.uid === me.uid || !u.name) return;
        hasUsers = true;
        const label = document.createElement('label');
        label.className = 'list-row';
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'dmTarget';
        radio.value = u.uid;
        safeSetAttribute(radio, 'data-name', sanitizeInput(u.name, 20));
        safeSetAttribute(radio, 'data-tag', sanitizeInput(u.tag, 10));
        const avatar = createTextElement('div', avatarLetter(u.name), 'avatar');
        const userName = createTextElement('div', safeUsername(u.name, u.tag));
        label.appendChild(radio);
        label.appendChild(avatar);
        label.appendChild(userName);
        listContainer.appendChild(label);
      });
      if (hasUsers) {
        const hint = createTextElement('div', 'Pick exactly one person.', 'hint');
        container.appendChild(listContainer);
        container.appendChild(hint);
      } else {
        const noUsers = createTextElement('div', 'No other users yet.', 'hint');
        container.appendChild(noUsers);
      }
      return container;
    }, async () => {
      const selected = modalBody.querySelector('input[name="dmTarget"]:checked');
      if (!selected) return;
      const targetUid = selected.value;
      const targetName = selected.getAttribute('data-name');
      const targetTag = selected.getAttribute('data-tag');
      await createOrOpenDM(targetUid, targetName, targetTag);
      closeModal();
    });
  } catch (error) {
    console.error("DM load error:", error);
  }
};

async function createOrOpenDM(otherUid, otherName, otherTag) {
  if (otherUid === me.uid) return;
  try {
    const safeOtherUid = sanitizeInput(otherUid, 50);
    const safeOtherName = sanitizeInput(otherName, 20);
    const safeOtherTag = sanitizeInput(otherTag, 10);
    const pair = [me.uid, safeOtherUid].sort();
    const dmId = `dm_${pair[0]}_${pair[1]}`;
    const dmRef = doc(db, "dms", dmId);
    await setDoc(dmRef, {
      id: dmId,
      kind: "dm",
      memberUids: pair,
      memberNames: {
        [me.uid]: sanitizeInput(me.name, 20),
        [safeOtherUid]: safeOtherName
      },
      memberTags: {
        [me.uid]: sanitizeInput(me.tag, 10),
        [safeOtherUid]: safeOtherTag
      },
      updatedAt: serverTimestamp()
    }, {
      merge: true
    });
    openRoom("dm", dmId, `DM: ${safeUsername(safeOtherName, safeOtherTag)}`);
  } catch (error) {
    console.error("DM create error:", error);
  }
}

createGroupBtn.onclick = async () => {
  try {
    const usersSnap = await getDocs(query(collection(db, "users"), orderBy("name")));
    createSafeModal("Create Group (up to 10)", () => {
      const container = document.createElement('div');
      const nameInput = document.createElement('input');
      nameInput.id = 'groupName';
      nameInput.className = 'input';
      nameInput.placeholder = 'Group name';
      nameInput.maxLength = 20;
      const hint = createTextElement('div', 'Maximum 20 characters');
      hint.style.cssText = 'font-size:12px;color:var(--text-muted);margin-top:5px;';
      const listContainer = document.createElement('div');
      listContainer.className = 'list';
      listContainer.style.marginTop = '0.6rem';
      let hasUsers = false;
      usersSnap.forEach(d => {
        const u = d.data();
        if (u.uid === me.uid || !u.name) return;
        hasUsers = true;
        const label = document.createElement('label');
        label.className = 'list-row';
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = 'groupTargets';
        checkbox.value = u.uid;
        const avatar = createTextElement('div', avatarLetter(u.name), 'avatar');
        const userName = createTextElement('div', safeUsername(u.name, u.tag));
        label.appendChild(checkbox);
        label.appendChild(avatar);
        label.appendChild(userName);
        listContainer.appendChild(label);
      });
      container.appendChild(nameInput);
      container.appendChild(hint);
      if (hasUsers) container.appendChild(listContainer);
      else {
        const noUsers = createTextElement('div', 'No other users.', 'hint');
        noUsers.style.marginTop = '0.6rem';
        container.appendChild(noUsers);
      }
      return container;
    },
      async () => {
        const name = sanitizeInput(document.getElementById("groupName").value, 20);
        if (!name) return;
        const selected = Array.from(modalBody.querySelectorAll('input[name="groupTargets"]:checked')).map(i => sanitizeInput(i.value, 50));
        const members = Array.from(new Set([me.uid, ...selected])).slice(0, 10);
        const groupId = `grp_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 6)}`;
        await setDoc(doc(db, "groups", groupId), {
          id: groupId,
          name: name,
          kind: "group",
          memberUids: members,
          updatedAt: serverTimestamp()
        }, {
          merge: true
        });
        closeModal();
        openRoom("group", groupId, `Group: ${name}`);
      });
  } catch (error) {
    console.error("Group create error:", error);
  }
};

renameGroupBtn.onclick = async () => {
  if (current.type !== "group") return;
  try {
    const groupRef = doc(db, "groups", current.id);
    const currentName = sanitizeInput(current.title.replace('Group: ', ''), 20);
    createSafeModal("Rename Group", () => {
      const container = document.createElement('div');
      const input = document.createElement('input');
      input.id = 'newGroupName';
      input.className = 'input';
      input.placeholder = 'New group name';
      input.value = currentName;
      input.maxLength = 20;
      const hint = createTextElement('div', 'Maximum 20 characters');
      hint.style.cssText = 'font-size:12px;color:var(--text-muted);margin-top:5px;';
      container.appendChild(input);
      container.appendChild(hint);
      return container;
    }, async () => {
      const newName = sanitizeInput(document.getElementById("newGroupName").value, 20);
      if (!newName) return;
      await updateDoc(groupRef, {
        name: newName,
        updatedAt: serverTimestamp()
      });
      current.title = `Group: ${newName}`;
      chatTitle.textContent = current.title;
      const btn = document.getElementById(`roombtn_${current.id}`);
      if (btn) btn.textContent = newName;
      closeModal();
    });
  } catch (error) {
    console.error("Rename error:", error);
  }
};

adminPanelBtn.onclick = async () => {
  if (!isAdmin) {
    showStatusMessage("Access denied", "error");
    return;
  }
  try {
    const usersSnap = await getDocs(query(collection(db, "users"), orderBy("name")));
    const groupsSnap = await getDocs(collection(db, "groups"));
    const dmsSnap = await getDocs(collection(db, "dms"));
    const messagesCount = {};
    const onlineUsers = [];
    const bannedUsers = [];
    const mutedUsers = [];
    
    for (const userDoc of usersSnap.docs) {
      const userData = userDoc.data();
      messagesCount[userData.uid] = 0;
      if (userData.status === "online") onlineUsers.push(userData);
      if (userData.banned) bannedUsers.push(userData);
      if (userData.mutedUntil && userData.mutedUntil > Date.now()) mutedUsers.push(userData);
    }
    
    const publicMessages = await getDocs(collection(db, "rooms", "public", "messages"));
    publicMessages.forEach(msgDoc => {
      const msg = msgDoc.data();
      if (messagesCount[msg.uid] !== undefined) messagesCount[msg.uid]++;
    });
    
    createSafeModal("Admin Panel", () => {
      const container = document.createElement('div');
      container.style.cssText = 'max-height:500px;overflow-y:auto;';
      
      const title = createTextElement('h3', '👑 Administrator Dashboard');
      title.style.cssText = 'margin-bottom:1rem;color:var(--primary);font-size:1.3rem;';
      
      const statsGrid = document.createElement('div');
      statsGrid.style.cssText = 'display:grid;grid-template-columns:1fr 1fr;gap:0.5rem;margin-bottom:1rem;';
      
      const statCard = (label, value, color = 'var(--primary)') => {
        const card = document.createElement('div');
        card.style.cssText = `padding:0.8rem;background:var(--surface-hover);border-radius:8px;border-left:3px solid ${color};`;
        const valueEl = createTextElement('div', value);
        valueEl.style.cssText = `font-size:1.5rem;font-weight:bold;color:${color};`;
        const labelEl = createTextElement('div', label);
        labelEl.style.cssText = 'font-size:0.85rem;color:var(--text-muted);margin-top:0.2rem;';
        card.appendChild(valueEl);
        card.appendChild(labelEl);
        return card;
      };
      
      statsGrid.appendChild(statCard('Total Users', usersSnap.size.toString(), '#4CAF50'));
      statsGrid.appendChild(statCard('Online Now', onlineUsers.length.toString(), '#2196F3'));
      statsGrid.appendChild(statCard('Banned Users', bannedUsers.length.toString(), '#F44336'));
      statsGrid.appendChild(statCard('Muted Users', mutedUsers.length.toString(), '#FF9800'));
      
      const separator = document.createElement('hr');
      separator.style.cssText = 'border:none;border-top:1px solid var(--border);margin:1rem 0;';
      
      const userList = document.createElement('div');
      userList.style.cssText = 'margin-top:1rem;';
      
      const listTitle = createTextElement('h4', '📊 User Management');
      listTitle.style.cssText = 'margin-bottom:0.8rem;font-size:1.1rem;';
      
      const sortedUsers = Array.from(usersSnap.docs).map(d => ({
        ...d.data(),
        docId: d.id,
        msgCount: messagesCount[d.data().uid] || 0
      })).filter(u => u.name).sort((a, b) => b.msgCount - a.msgCount);
      
      sortedUsers.forEach((u, idx) => {
        const userRow = document.createElement('div');
        const isMuted = u.mutedUntil && u.mutedUntil > Date.now();
        userRow.style.cssText = `padding:0.7rem;margin-bottom:0.5rem;background:var(--surface);border-radius:6px;display:flex;justify-content:space-between;align-items:center;border-left:3px solid ${u.banned ? '#F44336' : isMuted ? '#FF9800' : u.status === 'online' ? '#4CAF50' : '#666'};`;
        
        const leftSection = document.createElement('div');
        leftSection.style.cssText = 'display:flex;align-items:center;gap:0.5rem;flex:1;';
        
        const rank = createTextElement('div', `#${idx + 1}`);
        rank.style.cssText = 'font-weight:bold;color:var(--text-muted);min-width:30px;';
        
        const userInfo = createTextElement('div', `${safeUsername(u.name, u.tag)}`);
        userInfo.style.cssText = `font-weight:500;${u.banned ? 'text-decoration:line-through;opacity:0.6;' : ''}`;
        
        const statusBadge = createTextElement('span', u.banned ? '🚫' : isMuted ? '🔇' : u.status === 'online' ? '🟢' : '⚫');
        statusBadge.style.cssText = 'font-size:0.7rem;';
        
        leftSection.appendChild(rank);
        leftSection.appendChild(statusBadge);
        leftSection.appendChild(userInfo);
        
        const middleSection = document.createElement('div');
        middleSection.style.cssText = 'text-align:right;margin-right:1rem;';
        const msgCount = createTextElement('div', `${u.msgCount}`);
        msgCount.style.cssText = 'font-size:1.2rem;font-weight:bold;color:var(--primary);';
        const msgLabel = createTextElement('div', 'messages');
        msgLabel.style.cssText = 'font-size:0.75rem;color:var(--text-muted);';
        middleSection.appendChild(msgCount);
        middleSection.appendChild(msgLabel);
        
        const actionSection = document.createElement('div');
        actionSection.style.cssText = 'display:flex;gap:0.5rem;';
        
        if (u.uid !== me.uid) {
          const banBtn = document.createElement('button');
          banBtn.textContent = u.banned ? 'Unban' : 'Ban';
          banBtn.style.cssText = `padding:0.3rem 0.6rem;border:none;border-radius:4px;font-size:0.8rem;cursor:pointer;background:${u.banned ? '#4CAF50' : '#F44336'};color:white;font-weight:500;`;
          banBtn.onclick = async (e) => {
            e.stopPropagation();
            try {
              const newStatus = !u.banned;
              await updateDoc(doc(db, "users", u.docId), {
                banned: newStatus,
                bannedAt: newStatus ? Date.now() : null
              });
              showStatusMessage(`${u.name} has been ${newStatus ? 'banned' : 'unbanned'}`, "success");
              adminPanelBtn.click();
            } catch (error) {
              console.error("Ban error:", error);
              showStatusMessage("Failed to update ban status", "error");
            }
          };
          
          const muteBtn = document.createElement('button');
          muteBtn.textContent = isMuted ? 'Unmute' : 'Mute';
          muteBtn.style.cssText = `padding:0.3rem 0.6rem;border:none;border-radius:4px;font-size:0.8rem;cursor:pointer;background:${isMuted ? '#4CAF50' : '#FF9800'};color:white;font-weight:500;`;
          muteBtn.onclick = async (e) => {
            e.stopPropagation();
            try {
              const newMuteTime = isMuted ? 0 : Date.now() + 600000;
              await updateDoc(doc(db, "users", u.docId), {
                mutedUntil: newMuteTime
              });
              showStatusMessage(`${u.name} has been ${isMuted ? 'unmuted' : 'muted for 10 minutes'}`, "success");
              adminPanelBtn.click();
            } catch (error) {
              console.error("Mute error:", error);
              showStatusMessage("Failed to update mute status", "error");
            }
          };
          
          actionSection.appendChild(muteBtn);
          actionSection.appendChild(banBtn);
        }
        
        userRow.appendChild(leftSection);
        userRow.appendChild(middleSection);
        userRow.appendChild(actionSection);
        userList.appendChild(userRow);
      });
      
      const footer = createTextElement('div', '💡 Tip: Ban removes access, Mute prevents messaging for 10 minutes');
      footer.style.cssText = 'margin-top:1rem;padding:0.5rem;background:var(--surface-hover);border-radius:4px;font-size:0.85rem;color:var(--text-muted);text-align:center;';
      
      container.appendChild(title);
      container.appendChild(statsGrid);
      container.appendChild(separator);
      container.appendChild(listTitle);
      container.appendChild(userList);
      container.appendChild(footer);
      return container;
    }, () => {
      closeModal();
    });
  } catch (error) {
    console.error("Admin panel error:", error);
    showStatusMessage("Failed to load admin panel", "error");
  }
};

adminKeyBtn.onclick = async () => {
  createSafeModal("Enter Admin Key", () => {
    const container = document.createElement('div');
    const keyInput = document.createElement('input');
    keyInput.id = 'adminKeyInput';
    keyInput.className = 'input';
    keyInput.type = 'password';
    keyInput.placeholder = 'Admin access key';
    keyInput.maxLength = 100;

    const hint = createTextElement('div', 'Enter the admin key to unlock special privileges');
    hint.style.cssText = 'font-size:12px;color:var(--text-muted);margin-top:5px;';

    container.appendChild(keyInput);
    container.appendChild(hint);
    return container;
  }, async () => {
    const enteredKey = sanitizeInput(document.getElementById("adminKeyInput").value, 100);
    if (!enteredKey) return;

    try {
      const keysSnap = await getDocs(collection(db, "adminKeys"));
      let validKey = false;
      let isOwnerKey = false;

      keysSnap.forEach(doc => {
        const keyData = doc.data();
        if (keyData.key === enteredKey && keyData.active === true) {
          validKey = true;
          if (keyData.role === "owner") isOwnerKey = true;
        }
      });

      if (validKey) {
        await setDoc(doc(db, "admins", me.uid), {
          uid: me.uid,
          isOwner: isOwnerKey,
          grantedAt: serverTimestamp()
        });
        isAdmin = true;
        me.isAdmin = true;
        me.isOwner = isOwnerKey;

        if (isOwnerKey) {
          me.name = "♛ JRDN";
          me.tag = "3164";
          sessionStorage.setItem("username", me.name);
          sessionStorage.setItem("usertag", me.tag);
        }

        await upsertUserProfile();
        updateAdminUI();
        showStatusMessage("Admin access granted!", "info");
        closeModal();
      } else {
        showStatusMessage("Invalid admin key", "error");
      }
    } catch (error) {
      console.error("Admin key verification error:", error);
      showStatusMessage("Failed to verify key", "error");
    }
  });
};

const style = document.createElement('style');
style.textContent = `@keyframes slideIn{from{transform:translateX(100%);opacity:0}to{transform:translateX(0);opacity:1}}@keyframes slideOut{from{transform:translateX(0);opacity:1}to{transform:translateX(100%);opacity:0}}@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}`;
document.head.appendChild(style);
if (me.name) me.avatar = avatarLetter(me.name);