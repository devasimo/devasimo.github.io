document.addEventListener('DOMContentLoaded', function () {

  /* ---- 1. MOBiL MENU ---- */
  var hamburger = document.getElementById('hamburger');
  var navMenu   = document.getElementById('navMenu');

  // Butona tiklaninca menuyu ac / kapat
  hamburger.addEventListener('click', function () {
    navMenu.classList.toggle('open');
  });

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
      if (!target) return;
      e.preventDefault();

      var headerHeight = document.querySelector('.header').offsetHeight;
      var top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });
});