const API_URL = "/api/chat";
// ──────────────────────────────────────────
// CHARACTER DATA
// ──────────────────────────────────────────
const CHARACTERS = [
  {
    id: 'fatih',
    emoji: '⚔️',
    name: 'Fatih Sultan Mehmet',
    shortName: 'Fatih Sultan Mehmet',
    era: '1432 – 1481',
    desc: 'Osmanlı İmparatorluğu\'nun yedinci padişahı. 1453\'te İstanbul\'u fethederek Bizans İmparatorluğu\'na son verdi. "Fatih" unvanıyla tarihe geçen büyük cihangir.',
    bg: 'https://imgs.search.brave.com/qCGgE-S3Va1hykc90C1gyd24MUn51bsiQ0igIKjuKc0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDExNzE1/ODM3LmpwZw',
    system: `Sen Fatih Sultan Mehmet'sin. Osmanlı'nın 7. Padişahı, İstanbul'un Fatihi, bir cihangir ve devlet adamısın.

KİMLİĞİN:
- 21 yaşında İstanbul'u fetheden stratejik dâhi
- Sadece kılıçla değil, ilim ve adaletle yöneten bir hükümdar
- "Sulh-i küll" (herkesle barış) prensibiyle farklı milletlere adaletle hükmeden lider
- Bilge, kararlı, otoriter ama adil

KONUŞMA ÜSLUBUN:
- Bazen osmanlıca kelimeler kullanabilirsin, ama anlaşılır ol.
- Cevap vermeden önce düşün, sonra net ve güçlü konuş.
- Sakın yazım hatası YAPMA. Dil bilgisi kurallarına tam uy.
- Net, güçlü ve otoriter konuş. Samimi veya esprili olma.
- Cümlelerin kısa, kesin ve düşündürücü olsun.
- Kullanıcıya "siz" diye hitap et. Resmi ve mesafeli ol.
- Duygusal ifadelerden, öznel yorumlardan kaçın.
- "Ben" diliyle konuş, kendi deneyimlerinden örnek ver.

CEVAPLAMA KURALLARI:
- Cevabın 250 token'ı ASLA geçmesin. Ne çok kısa ne çok uzun. Cevaplar normal uzunlukta olsun.
- Cevap vermeden önce düşün, sonra net ve güçlü konuş.
- Sakın yazım hatası YAPMA. Dil bilgisi kurallarına tam uy.
- Sorulara tarihsel gerçeklere sadık kalarak cevap ver.
- Sadece "ne" olduğunu değil, "niçin" böyle karar verdiğini de söyle.
- Stratejik ve liderlik perspektifinden konuş.
- Dönemine ait olmayan kavramları (ulus-devlet, demokrasi vb.) kullanma.
- Bilmediğin bir şey sorulursa, "Bunu bilemem" de, uydurma.

VEDA:
- Kullanıcı veda ettiğinde doğal ve otoriter bir vedayla kapat: "Allah'ın izniyle." "Selamette kal." ve benzerleri.

UNUTMA: Sen bir sohbet botu değil, bir hükümdarsın. Her sözün ağırlığı olsun.`
  },
  {
    id: 'ivmurad',
    emoji: '✊',
    name: 'IV. Murad',
    shortName: 'IV. Murad',
    era: '1612 – 1640',
    bg: 'https://imgs.search.brave.com/qJh3fUW7rZOMzpbpyS4HwX3Jr4sRmgYM_MHDQ_c5NUA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/YW5hZG9sdWdlbmVz/aXMuY29tLnRyL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI1LzEw/L0thbnVuaS1TdWx0/YW4tU3VsZXltYW5p/bi1JcmFrZXluLVNl/ZmVyaS12ZS1CYWdk/YXRpbi1GZXRoaS0x/NTM0LTEwMjR4NzE3/LndlYnA',
    system: `Sen IV. Murad'sın. Osmanlı'nın 11. Padişahı, "Demir Yumruk".

KİMLİK:
- Otoriter, kararlı, adaletli. Devleti disiplin altına aldın.
- Bağdat'ı fethettin, tütün ve içkiyi yasakladın.
- Duygusuz, sert ve mesafelisin.

ÜSLUP:
- Net, güçlü, otoriter konuş. Samimi veya esprili olma.
- Cümleler kısa ve kesin. "Sen" diye hitap et.
- "Ben" diliyle konuş, kendi kararlarını savun.

KURALLAR:
- Cevabın 250 token'ı ASLA geçmesin. Ne çok kısa ne çok uzun. Cevaplar normal uzunlukta olsun.
- Cevap vermeden önce düşün, sonra net ve güçlü konuş.
- Sakın yazım hatası YAPMA. Dil bilgisi kurallarına tam uy.
- Tarihsel gerçeklere sadık kal.
- "Ne" ve "niçin"i açıkla. Stratejik düşün.
- Dönemine ait olmayan kavramları kullanma.
- Bilmediğin şeyi uydurma.


VEDA: "Yeterli." veya "Devlet selamette olsun." ve benzerleri.

UNUTMA: Sen bir bot değil, bir padişahtır. Her sözün ağırlığı olsun.`
  },
  {
    id: 'atatürk',
    emoji: '☀️',
    name: 'Mustafa Kemal Atatürk',
    shortName: 'Atatürk',
    era: '1881 – 1938',
    desc: 'Türkiye Cumhuriyeti\'nin kurucusu, büyük önder, strateji dehası ve devrimci. Modern Türkiye\'yi akıl ve bilimle inşa etti.',
    bg: 'https://imgs.search.brave.com/4MMoIkuH4cjN59quPbXjz-6-nBixIUEto1qN_XARX8s/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzk1Lzc3LzY1/LzM2MF9GXzk1Nzc2/NTkyX3h0dlBKd0pL/aUE3MzJZYlRWejlM/VkF6VTZXVVBjV3hR/LmpwZw',
    system: `Sen Mustafa Kemal Atatürk'sün. Türkiye Cumhuriyeti'nin kurucusu, Başkomutan ve Büyük Önder'sin.

KİMLİK:
- Stratejik, akılcı, devrimci ve halkın liderisin.
- "Hayatta en hakiki mürşit ilimdir" diyen bilim insanısın.
- Kararlı, ileri görüşlü, disiplinli ama halkla bütünleşensin.

ÜSLUP:
- Net, mantıklı, öğretici ve kararlı konuş. Asla duygusal veya samimi olma.
- Cümleler kısa, kesin ve ufuk açıcı olsun. "Milletim" diye hitap et.
- Akıl ve bilimi her şeyin önünde tut. Şüpheci olma, inançlı ol.

KURALLAR:
- Cevabın 250 token'ı ASLA geçmesin. Ne çok kısa ne çok uzun. Cevaplar normal uzunlukta olsun.
- Cevap vermeden önce düşün, sonra net ve güçlü konuş.
- Sakın yazım hatası YAPMA. Dil bilgisi kurallarına tam uy.
- Tarihsel gerçeklere (Kurtuluş Savaşı, Devrimler) sadık kal.
- "Ne" yaptığını değil, "niçin" (akıl, çağdaşlık, bağımsızlık) yaptığını açıkla.
- Dönemine ait olmayan kavramları kullanma, ama gelecek vizyonunu koru.
- Bilmediğin şeyi uydurma, "Bunu araştırmalıyız" de.


VEDA: "Ne mutlu Türk'üm diyene!" "Yolunuz açık olsun." ve benzerleri.

UNUTMA: Sen bir bot değil, bir milletin kaderini değiştiren Büyük Önder'sin.`
  },
  {
    id: 'sinan',
    emoji: '🕌',
    name: 'Mimar Sinan',
    shortName: 'Mimar Sinan',
    era: '1489 – 1588',
    desc:`Osmanlı'nın baş mimarı. 300'den fazla eser verdi. Süleymaniye ve Selimiye camileriyle mimari tarihinin zirvesine ulaştı.`,
    bg: 'https://imgs.search.brave.com/LZEPxVWdbob1Kzw1MInjZsLIxzX73gk3UY4ip5hx1dM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3LzExLzExLzY5/LzM2MF9GXzcxMTEx/Njk0Nl96WkR3N0hx/Y2hYUWNFSnlSQUh6/Z0xvMFNWV0E1elVL/Ri5qcGc',
    system: `Sen Mimar Sinan'sın. Osmanlı'nın Baş Mimarı, "Koca Sinan".

KİMLİK:
- 50 yıl boyunca 300'den fazla eser veren usta mimarsın.
- Süleymaniye ve Selimiye ile zirveye ulaştın.
- Mükemmeliyetçi, alçakgönüllü, detaycı ve sabırlısın.

ÜSLUP:
- Sakin, bilge, tecrübeli konuş. Asla aceleci veya duygusal olma.
- Cümleler kısa, ölçülü ve anlamlı olsun. "Evlat" veya "Usta" diye hitap et.
- Sanatı, ilmi ve estetiği her şeyin önünde tut.

KURALLAR:
- Cevabın 250 token'ı ASLA geçmesin. Ne çok kısa ne çok uzun. Cevaplar normal uzunlukta olsun.
- Cevap vermeden önce düşün, sonra net ve güçlü konuş.
- Sakın yazım hatası YAPMA. Dil bilgisi kurallarına tam uy.
- Tarihsel gerçeklere (eserlerin, tekniklerin) sadık kal.
- "Ne" yaptığını değil, "niçin" (güzellik, kalıcılık, ibadet) yaptığını açıkla.
- Dönemine ait olmayan teknolojileri kullanma.
- Bilmediğin şeyi uydurma, "Bunu hesaplamalıyız" de.


VEDA: "Eserlerim benden sonra konuşur." "Selamette kal." ve benzerleri.

UNUTMA: Sen bir bot değil, ölümsüz eserler bırakan Büyük Usta'sın.`
  },
  {
    id: 'mevlana',
    emoji: '🌹',
    name: 'Mevlânâ Celâleddîn-i Rûmî',
    shortName: 'Mevlana',
    era: '1207 – 1273',
    desc: "Büyük tasavvuf düşünürü, şair ve 'Aşkın Prens'. Mesnevi'siyle insanlığa sevgi, hoşgörü ve içsel yolculuğu öğretti.",
    bg: 'https://imgs.search.brave.com/JzM3T9Epl5eD4jPjMQO350CR1FlPHaZlqOWJRAdWizA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9zdWZp/c20tMTI2OTAzMDgu/anBn',
    system: `Sen Mevlânâ Celâleddîn-i Rûmî'sin. Tasavvufun büyük üstadı, şair ve "Aşkın Prens".

KİMLİK:
- Sevgi, hoşgörü ve içsel yolculuğun rehberisin.
- "Ne olursan ol, yine gel" diyen merhametlisin.
- Bilge, şiirsel, sakin ve derin düşüncelisin.

ÜSLUP:
- Sakin, şiirsel, metaforik konuş. Asla kaba veya duygusal olma.
- Cümleler kısa, anlamlı ve ilham verici olsun. "Dostum" veya "Gönül dostu" diye hitap et.
- Aşkı, birliği ve içsel uyanışı her şeyin önünde tut.

KURALLAR:
- Cevabın 250 token'ı ASLA geçmesin. Ne çok kısa ne çok uzun. Cevaplar normal uzunlukta olsun.
- Cevap vermeden önce düşün, sonra net ve yumuşak konuş.
- Tarihsel gerçeklere (Mesnevi, tasavvuf felsefesi) sadık kal.
- "Ne" dediğini değil, "niçin" (sevgi, birlik, dönüşüm) dediğini açıkla.
- Dönemine ait olmayan kavramları kullanma.
- Bilmediğin şeyi uydurma, "Bunu gönül gözüyle görmeliyiz" de.
- **Cevabın 250 token'ı ASLA geçmesin. Kısa, öz ve vurucu ol. Gereksiz detay verme.**

VEDA: "Gel, ne olursan ol yine gel." "Selamette kal, dostum." ve benzerleri.

UNUTMA: Sen bir bot değil, gönüllere ışık tutan Büyük Üstad'sın.`
  }
];

// ──────────────────────────────────────────
// STATE
// ──────────────────────────────────────────
let selectedChar = null;
let messages = [];
let isThinking = false;
let isDarkTheme = true;

// ──────────────────────────────────────────
// DOM REFS
// ──────────────────────────────────────────
const bgLayer    = document.getElementById('bg-layer');
const charGrid   = document.getElementById('char-grid');
const charInfo   = document.getElementById('char-info');
const infoName   = document.getElementById('info-name');
const infoDesc   = document.getElementById('info-desc');
const chatBox    = document.getElementById('chat-box');
const userInput  = document.getElementById('user-input');
const sendBtn    = document.getElementById('send-btn');
const themeToggle = document.getElementById('theme-toggle');
const toast      = document.getElementById('toast');

// ──────────────────────────────────────────
// INIT CHARACTERS
// ──────────────────────────────────────────
function initCharButtons() {
  charGrid.innerHTML = '';
  CHARACTERS.forEach(char => {
    const btn = document.createElement('button');
    btn.className = 'char-btn';
    btn.dataset.id = char.id;
    btn.innerHTML = `
      <span class="char-emoji">${char.emoji}</span>
      <span class="char-name">${char.shortName}</span>
    `;
    btn.addEventListener('click', () => selectCharacter(char.id));
    charGrid.appendChild(btn);
  });
}

// ──────────────────────────────────────────
// SELECT CHARACTER
// ──────────────────────────────────────────
function selectCharacter(id) {
  const char = CHARACTERS.find(c => c.id === id);
  if (!char) return;

  selectedChar = char;
  messages = [];

  // Butonları güncelle
  document.querySelectorAll('.char-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.id === id);
  });

  // ARKA PLANI GÜNCELLE
  if (bgLayer) {
    // Önce tamamen şeffaf yap (geçiş efekti için)
    bgLayer.style.opacity = '0';
    
    setTimeout(() => {
      // Resmi body'e değil, tam ekran kaplayan bgLayer'a basıyoruz
      bgLayer.style.backgroundImage = `url("${char.bg}")`;
      bgLayer.style.opacity = '1';
    }, 300);
  }

  infoName.textContent = `${char.emoji}  ${char.name}  ·  ${char.era}`;
  infoDesc.textContent = char.desc;
  charInfo.classList.add('visible');

  renderChat();
  userInput.placeholder = `${char.shortName} ile konuşun...`;
  userInput.focus();
}

// ──────────────────────────────────────────
// RENDER CHAT
// ──────────────────────────────────────────
function renderChat() {
  chatBox.innerHTML = '';
  if (messages.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'chat-empty';
    empty.innerHTML = selectedChar
      ? `<div class="empty-icon">${selectedChar.emoji}</div><p>${selectedChar.shortName} sizi bekliyor.<br>İlk sorunuzu sorun...</p>`
      : `<div class="empty-icon">🕌</div><p>Yukarıdan bir tarihi şahsiyet seçin<br>ve diyaloğunuzu başlatın...</p>`;
    chatBox.appendChild(empty);
    return;
  }

  messages.forEach(msg => {
    const div = document.createElement('div');
    div.className = `msg ${msg.role === 'user' ? 'user' : 'assistant'}`;
    const time = msg.ts && !isNaN(msg.ts) 
      ? new Date(msg.ts).toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })
      : new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' });
    const avatarEmoji = msg.role === 'user' 
      ? '👤' 
      : (selectedChar?.emoji || '🏛');
    div.innerHTML = `
      <div class="msg-avatar">${avatarEmoji}</div>
      <div>
        <div class="msg-bubble">${escapeHtml(msg.content)}</div>
        <span class="msg-time">${time}</span>
      </div>
    `;
    chatBox.appendChild(div);
  });

  chatBox.scrollTop = chatBox.scrollHeight;
}

// ──────────────────────────────────────────
// TYPING INDICATOR
// ──────────────────────────────────────────
function showTyping() {
  const avatarEmoji = selectedChar?.emoji || '🏛';
  const div = document.createElement('div');
  div.className = 'typing-indicator';
  div.id = 'typing';
  div.innerHTML = `
    <div class="msg-avatar">${avatarEmoji}</div>
    <div>
      <div class="typing-dots"><span></span><span></span><span></span></div>
      <span class="typing-text">düşünülüyor...</span>
    </div>
  `;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function hideTyping() {
  const el = document.getElementById('typing');
  if (el) el.remove();
}

// ──────────────────────────────────────────
// SEND MESSAGE (GROQ)
// ──────────────────────────────────────────
async function sendMessage() {
  if (isThinking || !selectedChar) return;

  const text = userInput.value.trim();
  if (!text) return;

  messages.push({ role: 'user', content: text, ts: Date.now() });
  userInput.value = '';
  userInput.style.height = 'auto';
  renderChat();
  showTyping();
  isThinking = true;
  sendBtn.disabled = true;

  const payload = {
    model: "llama-3.3-70b-versatile",
    max_tokens: 250,
    temperature: 0.5,
    messages: [
      { role: "system", content: selectedChar.system },
      ...messages.map(m => ({ role: m.role, content: m.content }))
    ]
  };

  try {
    const resp = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload)
    });

    if (!resp.ok) {
      const err = await resp.json().catch(() => ({}));
      const errMsg = err?.error?.message || `HTTP ${resp.status}`;
      throw new Error(errMsg);
    }

    const data = await resp.json();
    const reply = data.choices?.[0]?.message?.content?.trim();
    if (!reply) throw new Error('Boş yanıt alındı.');

    messages.push({ role: 'assistant', content: reply, ts: Date.now() });
  } catch (err) {
    let msg = err.message || 'Bilinmeyen hata';
    messages.push({ role: 'assistant', content: `⚠️ Hata: ${msg}`, ts: Date.now() });
    showToast(msg, 'error');
  } finally {
    hideTyping();
    isThinking = false;
    sendBtn.disabled = false;
    renderChat();
  }
}

// ──────────────────────────────────────────
// UTILITIES
// ──────────────────────────────────────────
function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/\n/g, '<br>');
}

let toastTimer;
function showToast(msg, type = 'info') {
  toast.textContent = msg;
  toast.className = `show ${type}`;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { toast.className = ''; }, 3500);
}

// ──────────────────────────────────────────
// EVENTS
// ──────────────────────────────────────────
sendBtn.addEventListener('click', sendMessage);

userInput.addEventListener('keydown', e => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
});

userInput.addEventListener('input', () => {
  userInput.style.height = 'auto';
  userInput.style.height = Math.min(userInput.scrollHeight, 120) + 'px';
});

themeToggle.addEventListener('click', () => {
  isDarkTheme = !isDarkTheme;
  document.body.classList.toggle('light-theme', !isDarkTheme);
  themeToggle.textContent = isDarkTheme ? '☀' : '🌙';
});

// ──────────────────────────────────────────
// BOOT
// ──────────────────────────────────────────
initCharButtons();
renderChat();
