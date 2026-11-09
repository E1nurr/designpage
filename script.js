// Мобильное меню
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  burger.setAttribute('aria-expanded', String(isOpen));
});

nav.querySelectorAll('.nav__link').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
  });
});

// Аккордеон этапов занятия
const accordion = document.getElementById('accordion');

accordion.querySelectorAll('.accordion__header').forEach((header) => {
  header.addEventListener('click', () => {
    const body = header.nextElementSibling;
    const isOpen = header.getAttribute('aria-expanded') === 'true';

    // Закрываем все — «механизм» открывает только один отсек
    accordion.querySelectorAll('.accordion__header').forEach((h) => {
      h.setAttribute('aria-expanded', 'false');
      h.nextElementSibling.style.maxHeight = null;
    });

    if (!isOpen) {
      header.setAttribute('aria-expanded', 'true');
      body.style.maxHeight = body.scrollHeight + 'px';
    }
  });
});

// Пересчёт высоты открытого отсека при ресайзе (адаптивность)
window.addEventListener('resize', () => {
  const open = accordion.querySelector('.accordion__header[aria-expanded="true"]');
  if (open) {
    const body = open.nextElementSibling;
    body.style.maxHeight = body.scrollHeight + 'px';
  }
});