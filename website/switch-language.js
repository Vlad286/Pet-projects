document.addEventListener('DOMContentLoaded', () => {
  const currentLang = localStorage.getItem('lang') || 'de';
  loadLanguage(currentLang);

  document.querySelectorAll('.language-switcher img').forEach(img => {
    img.addEventListener('click', () => {
      const selectedLang = img.dataset.lang;
      localStorage.setItem('lang', selectedLang);
      loadLanguage(selectedLang);
    });
  });
});

async function loadLanguage(lang) {
  try {
    const res = await fetch(`./locales/${lang}.json`);
    if (!res.ok) throw new Error(`Файл ${lang}.json не найден`);

    const translations = await res.json();
    translatePage(translations);
  } catch (error) {
    console.error('Ошибка загрузки языка:', error);
  }
}


function translatePage(translations) {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const translated = getNestedTranslation(translations, key);
    if (translated) el.innerText = translated;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    const translated = getNestedTranslation(translations, key);
    if (translated) el.setAttribute('placeholder', translated);
  });
}

function getNestedTranslation(obj, key) {
  return key.split('.').reduce((acc, part) => acc && acc[part], obj);
}


