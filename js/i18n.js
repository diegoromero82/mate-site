// =========================================================
// i18n.js - Motor de Internacionalización (Versión ES | EN)
// =========================================================

document.addEventListener('DOMContentLoaded', () => {
    const btnEs = document.getElementById('btn-lang-es');
    const btnEn = document.getElementById('btn-lang-en');

    let currentLang = localStorage.getItem('lang') || 'es';

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);
        document.documentElement.lang = lang;

        // 1. Actualizar estilos visuales de los botones (Negrita y Subrayado)
        updateButtonStyles(lang);

        // 2. Traducir elementos con el atributo data-i18n
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');

            if (typeof translations !== 'undefined' && translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // 3. Notificar a otros componentes
        const event = new CustomEvent('languageChanged', { detail: { lang: lang } });
        document.dispatchEvent(event);
    }

    function updateButtonStyles(lang) {
        if (!btnEs || !btnEn) return;

        // Clases para el idioma ACTIVO
        const activeClasses = ['font-bold', 'border-magenta', 'text-deepPurple', 'dark:text-white'];
        // Clases para el idioma INACTIVO
        const inactiveClasses = ['font-medium', 'border-transparent', 'text-slate-400'];

        if (lang === 'es') {
            // Activar ES, Desactivar EN
            btnEs.classList.add(...activeClasses);
            btnEs.classList.remove(...inactiveClasses);

            btnEn.classList.add(...inactiveClasses);
            btnEn.classList.remove(...activeClasses);
        } else {
            // Activar EN, Desactivar ES
            btnEn.classList.add(...activeClasses);
            btnEn.classList.remove(...inactiveClasses);

            btnEs.classList.add(...inactiveClasses);
            btnEs.classList.remove(...activeClasses);
        }
    }

    // Inicializar el idioma al cargar la página
    setLanguage(currentLang);

    // Eventos de clic para cada opción
    if (btnEs) {
        btnEs.addEventListener('click', () => {
            if (currentLang !== 'es') setLanguage('es');
        });
    }

    if (btnEn) {
        btnEn.addEventListener('click', () => {
            if (currentLang !== 'en') setLanguage('en');
        });
    }
});