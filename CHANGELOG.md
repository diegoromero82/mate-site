# Historial de cambios

Este archivo sigue el formato de [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/) y utiliza versionado semántico cuando aplique.

## [Sin publicar]

### Publicado

- Publicada en producción la versión vigente del sitio en `https://www.matesas.com/` el 1 de septiembre de 2026.

### Añadido

- Documentación inicial de arquitectura y operación en `README.md`.
- Instrucciones de colaboración y control de cambios en `AGENTS.md`.
- Registro de cambios y estado del proyecto.

### Modificado

- Configurado `.gitignore` para excluir credenciales, archivos temporales, registros, dependencias y configuraciones locales, manteniendo en el repositorio la bitácora, contenido y recursos necesarios para el sitio.
- Restaurado el envío compatible con Google Apps Script en el formulario de Contacto mediante `no-cors`, evitando el bloqueo CORS que impedía remitir solicitudes al endpoint publicado; el aviso ahora informa que el mensaje fue enviado para procesamiento.
- Retirada una expresión regular incompatible del campo Nombre completo en Contacto, eliminando el error de validación mostrado por navegadores actuales.
- Reconfigurado el carrusel del Hero de Inicio para mostrar exclusivamente las seis imágenes entregadas en `media/images/Inicio/hero`, en orden de `001` a `006`.
- Incorporada una cuarta imagen al carrusel del Hero de Inicio y ajustado el ciclo de animación para cuatro diapositivas.
- Actualizadas la segunda y tercera imagen del Hero de Inicio con los nuevos recursos proporcionados.
- Homologado el diseño editorial del Hero de Somos MATE, Experiencia y Contacto con el Hero de Servicios, conservando las imágenes y textos propios de cada página.
- Reestructurada la etapa “Medimos y ajustamos” en el ciclo EMPRESA MATE para alinear su icono y texto como una unidad y mantener dos líneas consistentes en escritorio y móvil.
- Ajustado el punto focal vertical de la imagen del Hero de Servicios para elevar la ubicación visual de las personas.
- Retirado el perfil de Alba Beatriz Roncancio Barrios de Nuestro Equipo en Somos MATE.
- Simplificada la sección de iniciativas de Inicio: se retiraron PROPULXORA y Economía Plateada, y Fundación MATE quedó como la iniciativa inicial.
- Preparada la configuración Apache para publicación como `.htaccess`: redirección permanente desde `proyectos.html`, canonicalización HTTPS/WWW, error 404, compresión, caché y bloqueo de listados de directorios.
- Actualizadas las fechas `lastmod` del sitemap y completada la URL Open Graph de Experiencia.
- Corregido el menú móvil para abrir exclusivamente el contenedor `#mobile-menu`, con estados ARIA, cierre al seleccionar un enlace o al pulsar Escape, y navegación móvil habilitada también en la página 404.
- Sustituidas las imágenes sociales inexistentes por fotografías publicadas del sitio y completados los metadatos Twitter faltantes en Contacto y Experiencia.
- Convertidas las reglas personalizadas de la hoja de estilos a CSS nativo, eliminando las directivas que requerían una compilación no configurada.
- Ajustado el formulario de contacto para confirmar el envío únicamente después de una respuesta HTTP válida; si el servicio no permite esa confirmación, informa el error en lugar de declarar un éxito no verificable.
- Optimizadas las tres imágenes de Servicios que superaban 3 MB, con reducción a 0,29–0,42 MB y carga diferida, y redimensionado el logo de Banca de las Oportunidades de 3,08 MB a 0,05 MB; los originales se conservaron como respaldo en `paquetes/imagenes/originales-optimizados`.
- Actualizado el titular y el texto descriptivo del Hero de la página de inicio en español e inglés; el titular se distribuyó en tres renglones y se conservaron los distintivos originales de transformación social.
- Rediseñada la sección “¿Por qué somos diferentes?” de Inicio: cuatro tarjetas, nuevo contenido bilingüe e iconografía asociada.
- Actualizada la sección “¿Cómo lo hacemos?” de Inicio: encabezado, contenido de las cinco tarjetas y traducciones corporativas; se conservaron las imágenes existentes.
- Incorporada la sección “Nuestra Historia” en Somos MATE, con contenido en español e inglés.
- Reestructurada la presentación institucional de Somos MATE: “Nuestra Historia” se separó como sección independiente y se incorporó “Acerca de la Organización”.
- Reforzado el cierre visual de “Nuestra Historia” con una cita destacada.
- Actualizado el bloque “Nuestra Misión” de Somos MATE en español e inglés.
- Actualizada la sección de Alianzas de Somos MATE con seis tarjetas informativas y contenido bilingüe; pendiente de incorporar los nuevos logos.
- Mejorado el espaciado y las traducciones de los enlaces de conferencias en la tarjeta Fondo Mujer.
- Renombrada la página Proyectos a Experiencia, con actualización de enlaces, SEO y redirección permanente desde `proyectos.html`.
- Creada la página Servicios con sus secciones de Longevidad, Bienestar y Cuidado, e Inclusión Económica y Autonomía Financiera.
- Ampliada la primera sección de Servicios con desarrollo de capacidades para niñez, adolescencia y juventud, y sus cuatro líneas de negocio.
- Añadidas cuatro experiencias de éxito al contenido de niñez, adolescencia y juventud en Servicios.
- Actualizado el texto introductorio del Hero de Inicio en español e inglés.
- Añadido el servicio de modelos holísticos y sostenibles de cuidado, salud y bienestar a la sección de Longevidad, Bienestar y Cuidado.
- Ampliada la sección de Inclusión Económica y Autonomía Financiera con servicios, modelo EMPRESA MATE, tecnología, datos e IA, y enfoque territorial.
- Renovada la experiencia visual de Servicios: Hero, navegación contextual, profundidad visual, tarjetas interactivas y animaciones accesibles.
- Eliminado el selector de rutas bajo el Hero de Servicios e incorporadas imágenes temporales en las tarjetas de líneas de negocio de juventud y cuidado.
- Ajustada la composición de las tarjetas de líneas de negocio de Servicios para alinearla con el diseño de tarjetas de Inicio.
- Configurada la línea de Desarrollo de capacidades para niñez, adolescencia y juventud en una grilla 2×2 y unificado el color de sus títulos con las tarjetas de Inicio.
- Añadidos los servicios de Economía Plateada y nuevas oportunidades, y Finanzas para la Longevidad, al cierre de la sección de Longevidad, Bienestar y Cuidado.
- Actualizados los bloques Mujer Étnica y Banca de las Oportunidades en Experiencia con nuevo contenido, flujo visual y enlaces externos de consulta.
- Ampliado el equipo de Somos MATE con seis nuevos perfiles y accesos de LinkedIn en las tarjetas de perfiles con enlace disponible.
- Homologada la altura de las tarjetas de los nuevos perfiles del equipo y simplificados sus cargos al retirar la referencia “– MATE”.
- Actualizadas las rutas de fotografías del equipo y añadidas las imágenes disponibles para Mauricio, Martha, Claudia Negrete y Erick.
- Ajustadas las fotografías de Ana Milena, Any Andrea e Ivonne para utilizar sus versiones `.jpg`.
- Ampliada la información profesional de Ana Milena, Any Andrea, Ivonne y Claudia Sofía, y reemplazado el perfil de Estefany Brieva en español e inglés.
- Ajustado el formato de imágenes de las tarjetas de Longevidad para mostrar un encuadre más vertical y priorizar la parte superior de las fotografías.
- Reorganizados los recursos de imagen por página, con actualización de referencias y traslado de archivos no utilizados al paquete de imágenes.
- Incorporadas imágenes temporales en las tarjetas de Inclusión Económica y Autonomía Financiera, con el mismo diseño visual de las líneas de negocio de Longevidad.
- Rediseñado el bloque EMPRESA MATE con composición editorial, ciclo visual de acompañamiento empresarial y objetivo destacado.
- Mejorada la interacción visual del ciclo EMPRESA MATE con etapas numeradas, acentos cromáticos y microanimaciones accesibles.
- Simplificado el ciclo EMPRESA MATE al retirar la numeración y unificar el tamaño de sus cinco etapas.
- Homologadas las tarjetas de Tecnología, datos e IA y de Personas y territorios con el estilo de las líneas de negocio.
- Integradas las tarjetas de Tecnología, datos e IA y de Personas y territorios en la cuadrícula de servicios de EMPRESA MATE.
- Añadida la sección Experiencias de éxito al cierre de Longevidad, con información y enlaces sobre IMPACTO 50+ y la conversación nacional de longevidad.
- Retirado de la tarjeta IMPACTO 50+ un comentario interno no destinado a la publicación.
- Incorporada la sección Nuestro equipo de Longevidad con perfiles de Róbinson Cuadros, Wilson Ossa y Marisol Acosta.
- Retirado el rótulo auxiliar de la sección Experiencias de éxito.
- Añadido un bloque de contacto al cierre de Longevidad con llamado a conversar sobre longevidad e imagen temporal.
- Añadida la sección de capacidades transversales con cuatro áreas de especialidad en Servicios.
- Reubicada la sección de capacidades transversales inmediatamente después del bloque de contacto de Longevidad.
- Corregido el centrado visual del título de la sección de capacidades transversales.
- Alineado el fondo de la sección de capacidades transversales con el fondo blanco de Longevidad.
- Integrado el bloque de capacidades dentro de Longevidad para conservar únicamente las dos secciones principales de Servicios.
- Jornada cerrada el 31 de agosto de 2026; los siguientes ajustes quedan sujetos a nuevas instrucciones del responsable del proyecto.
- Añadido el enlace de consulta en video al bloque Familias en su Tierra de Experiencia.
- Actualizado el perfil de Juanito Perez a José Carlos Zapa e incorporada su fotografía en Nuestro Equipo.
- Incorporados enlaces a los documentos de la Jornada de Limpieza del Lago de Tota y Mis Derechos Sí Cuentan en Servicios.
- Retirado el enlace de IMPACTO 50+ y añadido un recurso de YouTube a la tarjeta de conversación sobre longevidad.
- Renombrado el enlace de YouTube como Entrevista Noticias Caracol.
- Añadido el enlace de LinkedIn de Wilson Daniel Ossa a su perfil de equipo en Longevidad.

### Pendiente de registrar

- Los cambios funcionales futuros autorizados por el responsable del proyecto.

## Historial anterior

Los cambios anteriores a este registro pueden consultarse en el historial local de Git. El último cambio registrado antes de crear esta documentación fue el 4 de mayo de 2026: incorporación del documento de tratamiento de datos personales.
