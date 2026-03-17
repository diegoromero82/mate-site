// seo.js
document.addEventListener('languageChanged', (e) => {
    const lang = e.detail.lang;

    // Obtener la ruta actual de la página (ej: "/somos-mate.html")
    const path = window.location.pathname;

    // Variables para guardar qué claves vamos a buscar en data.js
    let titleKey = '';
    let descKey = '';

    // LÓGICA EXPANDIDA: Detectar en qué página estamos
    if (path.includes('somos-mate.html')) {
        titleKey = 'meta_title_somos';
        descKey = 'meta_desc_somos';
    }
    else if (path.includes('proyectos.html')) {
        titleKey = 'meta_title_proyectos';
        descKey = 'meta_desc_proyectos';
    }
    else if (path.includes('contacto.html')) {
        titleKey = 'meta_title_contacto';
        descKey = 'meta_desc_contacto';
    }
    else {
        // Si no es ninguna de las anteriores, asumimos que es el Home (index.html o raíz '/')
        titleKey = 'meta_title_index';
        descKey = 'meta_desc_index';
    }

    // Si las claves existen en nuestro data.js para el idioma actual, aplicamos los cambios
    if (titleKey && descKey && translations[lang]) {
        const newTitle = translations[lang][titleKey];
        const newDesc = translations[lang][descKey];

        // 1. Actualizar el Title del navegador (Pestaña)
        document.title = newTitle;

        // 2. Actualizar Meta Description genérica
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute('content', newDesc);

        // 3. Actualizar Open Graph (Facebook/LinkedIn/WhatsApp)
        const ogTitle = document.querySelector('meta[property="og:title"]');
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogTitle) ogTitle.setAttribute('content', newTitle);
        if (ogDesc) ogDesc.setAttribute('content', newDesc);

        // 4. Actualizar Twitter Cards
        const twTitle = document.querySelector('meta[name="twitter:title"]');
        const twDesc = document.querySelector('meta[name="twitter:description"]');
        if (twTitle) twTitle.setAttribute('content', newTitle);
        if (twDesc) twDesc.setAttribute('content', newDesc);
    }
});