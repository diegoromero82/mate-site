// =========================================================
// i18n.js - Motor de Internacionalización
// =========================================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Capturamos el botón del HTML por su ID
    const langBtn = document.getElementById('btn-lang');

    // 2. Revisamos si el usuario ya tenía un idioma guardado previamente, si no, usamos Español por defecto
    let currentLang = localStorage.getItem('lang') || 'es';

    // 3. Función principal que se encarga de cambiar todo el idioma
    function setLanguage(lang) {
        currentLang = lang;

        // Guardamos la preferencia en el navegador para que no se pierda al recargar la página
        localStorage.setItem('lang', lang);

        // Cambiamos el atributo lang de la etiqueta <html> por temas de accesibilidad y SEO
        document.documentElement.lang = lang;

        // Actualizamos el texto del botón CON LAS BANDERAS. 
        // Si estamos en español, el botón debe invitar a cambiar a inglés (EN) y viceversa.
        // Actualizamos el texto del botón CON BANDERAS EN IMAGEN. 
        if (langBtn) {
            if (lang === 'es') {
                // Si estamos en español, mostramos la bandera de USA para invitar a cambiar a Inglés
                langBtn.innerHTML = '<img src="https://flagcdn.com/w20/us.png" alt="English" class="w-4 h-auto rounded-sm"> EN';
            } else {
                // Si estamos en inglés, mostramos la bandera de España para invitar a cambiar a Español
                langBtn.innerHTML = '<img src="https://flagcdn.com/w20/es.png" alt="Español" class="w-4 h-auto rounded-sm"> SP';
            }
        }

        // 4. Magia de traducción: Buscamos TODOS los elementos que tengan el atributo data-i18n
        const elements = document.querySelectorAll('[data-i18n]');

        elements.forEach(el => {
            // Obtenemos la clave (ej: "nav_home", "hero_title")
            const key = el.getAttribute('data-i18n');

            // Nos aseguramos de que el archivo data.js haya cargado y la clave exista
            if (typeof translations !== 'undefined' && translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // 5. Avisamos al archivo seo.js que el idioma cambió para que actualice los metadatos
        const event = new CustomEvent('languageChanged', { detail: { lang: lang } });
        document.dispatchEvent(event);
    }

    // Ejecutamos la función apenas carga la página con el idioma guardado
    setLanguage(currentLang);

    // 6. EVENTO CLIC (Este era el bloque que faltaba)
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            // Si el idioma actual es español, cambiamos a inglés. Si no, volvemos a español.
            const newLang = currentLang === 'es' ? 'en' : 'es';
            setLanguage(newLang);
        });
    }
});