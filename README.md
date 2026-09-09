# MATE SAS | Sitio web institucional

Sitio web institucional de MATE Inversiones & Negocios. Es una aplicación web estática, responsive y bilingüe (español/inglés), orientada a presentar la organización, sus proyectos y sus canales de contacto.

## Arquitectura

- `index.html`: página de inicio.
- `somos-mate.html`: información institucional, equipo y alianzas.
- `experiencia.html`: experiencia y soluciones de MATE.
- `servicios.html`: servicios y líneas de intervención de MATE.
- `contacto.html`: formulario y datos de contacto.
- `404.html`: página de error personalizada.
- `css/style.css`: estilos propios y componentes visuales.
- `js/data.js`: catálogo de textos para internacionalización.
- `js/i18n.js`: selector y aplicación de idioma.
- `js/main.js`: tema, menú, carruseles, contadores y formulario.
- `js/seo.js`: comportamiento relacionado con SEO del cliente.
- `media/`: imágenes, logotipos, documentos y favicon.
- `robots.txt` y `sitemap.xml`: indexación.
- `htaccess`: reglas para Apache (redirección HTTPS/WWW, compresión, caché y cabeceras).

## Tecnologías y servicios externos

- HTML5, CSS3 y JavaScript sin framework.
- Tailwind CSS cargado desde CDN.
- Google Fonts y Material Icons.
- `intl-tel-input` desde CDN para el campo telefónico.
- Google Apps Script como destino del formulario de contacto.
- Alojamiento compatible con Apache para aplicar las reglas de `htaccess`.

No hay gestor de paquetes, pruebas automatizadas ni proceso de compilación configurados en el repositorio. Para revisión local se puede abrir el sitio con un servidor HTTP estático; no se recomienda abrir los HTML directamente con `file://`.

## Desarrollo local

1. Ubicarse en la raíz del proyecto.
2. Iniciar un servidor HTTP estático de su preferencia.
3. Abrir la dirección servida en un navegador y validar escritorio y móvil.

Antes de publicar, validar como mínimo:

- enlaces internos, anclas, menú móvil y selector de idioma;
- formulario de contacto con una prueba controlada;
- vistas en móvil, tableta y escritorio;
- metadatos SEO, imágenes de previsualización y `sitemap.xml`;
- consola del navegador sin errores.

## Convenciones

- Mantener UTF-8 y contenido en español como idioma base.
- Reutilizar la paleta, tipografías y componentes existentes hasta que se apruebe un rediseño.
- Optimizar imágenes nuevas para web y proporcionar texto alternativo significativo.
- No incrustar secretos, credenciales ni identificadores sensibles en el código.
- Registrar cada cambio funcional en `CHANGELOG.md` y actualizar `PROJECT_STATUS.md` cuando cambien los pendientes o riesgos.

## Flujo de control de cambios

El repositorio remoto está alojado en GitHub. Las operaciones de sincronización y publicación (`push`, `pull`, `merge`, `rebase`, `commit` o equivalentes) las realiza el responsable del proyecto al final de cada jornada, salvo autorización explícita posterior.

Las instrucciones operativas obligatorias para colaboradores automatizados están en `AGENTS.md`.
