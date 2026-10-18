(() => {
  const key = 'syncoregames-language';
  const root = document.documentElement;
  const button = document.getElementById('language');
  const setLanguage = (lang) => {
    const chosen = lang === 'en' ? 'en' : 'es';
    root.lang = chosen;
    document.querySelectorAll('[data-es][data-en]').forEach((element) => {
      element.innerHTML = element.dataset[chosen];
    });
    const nav = document.querySelector('.nav');
    nav.setAttribute('aria-label', nav.dataset[chosen === 'es' ? 'labelEs' : 'labelEn']);
    button.textContent = chosen === 'es' ? 'EN' : 'ES';
    button.setAttribute('aria-label', chosen === 'es' ? 'Switch language to English' : 'Cambiar idioma a español');
    document.title = chosen === 'es' ? 'SYNCORE Games — Tus juegos, a tu manera' : 'SYNCORE Games — Your games, your way';
    try { localStorage.setItem(key, chosen); } catch (_) { /* storage can be unavailable in private browsing */ }
  };
  let saved = 'es';
  try { saved = localStorage.getItem(key) || 'es'; } catch (_) {}
  setLanguage(saved);
  button.addEventListener('click', () => setLanguage(root.lang === 'es' ? 'en' : 'es'));
  document.getElementById('year').textContent = new Date().getFullYear();
})();
