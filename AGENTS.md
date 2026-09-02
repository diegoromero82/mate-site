# Instrucciones para colaboradores automatizados

## Alcance

Este repositorio contiene el sitio institucional estático de MATE SAS. Trabajar únicamente dentro de este repositorio y en las tareas solicitadas por el responsable del proyecto.

## Autorización de cambios

- No crear, modificar, mover ni eliminar archivos, código, recursos multimedia o configuración sin autorización explícita y previa del responsable.
- Antes de editar, indicar con claridad los archivos objetivo, el propósito y el impacto esperado.
- Cuando la autorización cubra solo ciertos archivos, limitar los cambios estrictamente a ellos.
- No reemplazar, descartar ni revertir cambios existentes que no hayan sido realizados durante la tarea actual.

## Git y publicación

- No ejecutar `push`, `pull`, `fetch`, `merge`, `rebase`, `commit`, creación de ramas, etiquetado ni operaciones equivalentes sin autorización explícita posterior.
- Se permiten inspecciones locales de solo lectura, como `git status`, `git diff`, `git log` y consulta de la configuración local.
- No modificar el remoto ni las credenciales. El responsable gestiona la sincronización al cierre de cada jornada.

## Estándares técnicos

- Preservar compatibilidad con el sitio estático actual (HTML, CSS y JavaScript nativo) salvo que se apruebe una migración.
- Mantener accesibilidad: HTML semántico, foco visible, navegación por teclado, contraste adecuado y `alt` significativo en imágenes informativas.
- Mantener responsive design y probar los cambios en vista móvil y escritorio.
- Evitar introducir dependencias CDN nuevas sin aprobación; priorizar rendimiento y privacidad.
- No almacenar secretos, datos personales, tokens ni claves en el repositorio.
- Si se modifica contenido indexable, revisar los metadatos, canonical, `robots.txt` y `sitemap.xml` que correspondan.
- Optimizar activos gráficos antes de agregarlos; preferir formatos y tamaños apropiados para web.

## Verificación y documentación

- Realizar verificaciones proporcionadas al riesgo del cambio y reportar qué se validó y qué no.
- Mantener `CHANGELOG.md` y `PROJECT_STATUS.md` actualizados cuando el responsable autorice cambios funcionales.
- Documentar en el resultado final los archivos modificados y los hallazgos relevantes.
