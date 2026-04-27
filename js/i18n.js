// =========================================================
// i18n.js - Motor de Internacionalización
// =========================================================

document.addEventListener('DOMContentLoaded', () => {    
    const langBtn = document.getElementById('btn-lang');    
    let currentLang = localStorage.getItem('lang') || 'es';
    
    function setLanguage(lang) {
        currentLang = lang;        
        localStorage.setItem('lang', lang);        
        document.documentElement.lang = lang;

        if (langBtn) {
            if (lang === 'es') {                
                langBtn.innerHTML = '<img src="https://flagcdn.com/w20/us.png" alt="English" class="w-4 h-auto rounded-sm"> EN';
            } else {                
                langBtn.innerHTML = '<img src="https://flagcdn.com/w20/es.png" alt="Español" class="w-4 h-auto rounded-sm"> SP';
            }
        }

        const elements = document.querySelectorAll('[data-i18n]');

        elements.forEach(el => {            
            const key = el.getAttribute('data-i18n');
            
            if (typeof translations !== 'undefined' && translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        
        const event = new CustomEvent('languageChanged', { detail: { lang: lang } });
        document.dispatchEvent(event);
    }
    
    setLanguage(currentLang);
    
    if (langBtn) {
        langBtn.addEventListener('click', () => {            
            const newLang = currentLang === 'es' ? 'en' : 'es';
            setLanguage(newLang);
        });
    }
});