// DOM hazir olunca calistir
document.addEventListener('DOMContentLoaded', function () {

  /* ---- 1. MOBiL MENU ---- */
  var hamburger = document.getElementById('hamburger');
  var navMenu   = document.getElementById('navMenu');

  // Butona tiklaninca menuyu ac / kapat
  hamburger.addEventListener('click', function () {
    navMenu.classList.toggle('open');
  });

  // Bir nav linkine tiklaninca menuyu kapat (mobil)
  var navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      navMenu.classList.remove('open');
    });
  });

  /* ---- 2. SMOOTH SCROLL ---- */
  // '#' ile baslayan tum linklerde smooth scroll uygula
  var allLinks = document.querySelectorAll('a[href^="#"]');
  allLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (!target) return;       // hedef yoksa cik
      e.preventDefault();

      var headerHeight = document.querySelector('.header').offsetHeight;
      var top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

});
/* ---- Api key koruması ---- */

async function sendMessageToBot(userMessage) {
  // Kullanıcıya "Yazıyor..." göster (opsiyonel)
  
  try {
    // Kendi güvenli API'ne istek at
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: userMessage })
    });

    const data = await response.json();

    if (data.error) {
      return "Üzgünüm, bir hata oluştu.";
    }

    return data.reply; // Grok'tan gelen cevabı döndür

  } catch (error) {
    console.error('Hata:', error);
    return "Bağlantı hatası.";
  }
}