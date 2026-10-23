'use strict';
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.getElementById('site-nav');
function closeMenu() {
  navigation?.classList.remove('is-open');
  menuButton?.setAttribute('aria-expanded', 'false');
  menuButton?.setAttribute('aria-label', 'Open navigation');
}
menuButton?.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  menuButton.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
  navigation.classList.toggle('is-open', !expanded);
});
navigation?.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton?.getAttribute('aria-expanded') === 'true') {
    closeMenu(); menuButton.focus();
  }
});
document.addEventListener('click', event => {
  if (!event.target.closest('.site-header')) closeMenu();
});
window.matchMedia('(min-width: 951px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
document.querySelectorAll('[data-country]').forEach(button => {
  button.addEventListener('click', () => {
    const country = button.dataset.country;
    document.querySelectorAll('[data-country]').forEach(item => {
      const selected = item === button;
      item.classList.toggle('selected', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    document.getElementById('india-pricing').hidden = country !== 'india';
    document.getElementById('canada-pricing').hidden = country !== 'canada';
  });
});
document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });
const topButton = document.querySelector('.back-top');
function updateTopButton() {
  if (!topButton) return;
  const visible = window.scrollY > 600;
  topButton.classList.toggle('visible', visible);
  topButton.tabIndex = visible ? 0 : -1;
  topButton.setAttribute('aria-hidden', String(!visible));
}
window.addEventListener('scroll', updateTopButton, { passive: true });
updateTopButton();
topButton?.addEventListener('click', () => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({ top: 0, behavior: reduced ? 'instant' : 'smooth' });
});
