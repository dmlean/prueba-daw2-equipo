# Registro de contexto y acuerdos

Resumen de traspaso solicitado por el usuario. No es una transcripción literal del chat. Las comprobaciones fechadas indican cuándo se observó cada dato; Classroom y las decisiones del equipo pueden cambiar.

## Estado vigente — 30/09/2026

- El repositorio de equipo es `dmlean/prueba-daw2-equipo`. GitHub lo muestra **privado**, con `2exan` y `Miguel-Gil-Moral` como los dos colaboradores efectivos. La cuenta propietaria es `dmlean`. No se ha cambiado la visibilidad del repositorio público original `Miguel-Gil-Moral/prueba-daw2`.
- La rama `main` contiene `README.md`, `AGENTS.md`, `CHATGPT_PROJECT_INSTRUCTIONS.md`, este registro, `index.html` y `styles.css`. La página actual es estática; aún no hay aplicación Laravel, autenticación, datos, permisos ni despliegue.
- El hilo actual de Codex sigue privado. Este archivo permite recuperar el contexto desde otro clon, pero no transfiere los mensajes literales ni comparte los chats de las cuentas del equipo.
- El [enunciado intermodular](https://sites.google.com/politecnics.barcelona/proj01-gestideprojectes/el-projecte), enlazado desde Classroom, exige para DAW autenticación, proyectos, tareas, roles y permisos, identidad corporativa, diseño adaptable mediante framework CSS y despliegue. Indica entrega de aplicación web, modelo relacional y script SQL con `INSERT` necesarios, con fecha **20/12/2026**. Análisis, calendario, recursos y documentos son opcionales.
- El [reto de programación 0612 y 0613](https://sites.google.com/politecnics.barcelona/m0607rep01programarleinadegest/repte) concreta Laravel y Eloquent para servidor y datos, comunicación mediante API y JavaScript para la interfaz. Define reglas adicionales para proyectos, miembros, tareas, estados y Kanban. Consultar el texto original al implementar cada regla.
- El [reto de despliegue 0614](https://sites.google.com/politecnics.barcelona/m08-repte1/repte) requiere hosting de producción, documentación del proceso y bases de datos locales independientes para los desarrolladores. Presenta XAMPP como opción, sin fijar un motor de base de datos. La página muestra fechas para dos versiones sin año y está revisada en 2025; no se han tomado como calendario vigente.
- Dirección técnica propuesta con el criterio de arranque fácil y mantenimiento mínimo: Laravel 12/Eloquent, JavaScript nativo, Bootstrap y SQLite para bases locales independientes. En este PC se verificaron PHP 8.2.12 y Composer 2.8.5; Laravel 13 requiere PHP 8.3. Primera funcionalidad propuesta: registro e inicio de sesión mediante API, mostrando el usuario autenticado. El motor de producción, el script SQL final, el despliegue y la aceptación por todo el equipo siguen sin constar.

## Acuerdos de trabajo

- Dar prioridad a encender y usar, después al mantenimiento mínimo y luego a la productividad práctica. Evitar piezas que añadan mantenimiento o rompan el flujo sin resolver una necesidad real.
- Para tareas evaluables, ofrecer una sola acción siguiente, el conocimiento necesario y una pista breve. El estudiante realiza y redacta la entrega. Si se bloquea, dar solo la ayuda necesaria para continuar.
- Mantener cambios pequeños y compatibles con Windows; no crear carpetas, dependencias o automatizaciones sin una función concreta.
- El repositorio privado comparte archivos solo con `dmlean`, `2exan` y `Miguel-Gil-Moral`. No invitar a profesorado ni publicar secretos. Compartir un proyecto de ChatGPT requerirá comprobar por separado quién verá sus chats y archivos.
- Usar el proyecto de ChatGPT existente “0616 - Projecte Intermodular 1” para instrucciones y conversaciones, sujeto a verificar su audiencia antes de compartirlo. Priorizar tareas intermodulares por riesgo de aplazar, esfuerzo e impacto, cada uno de 1 a 5 y sin fórmula combinada.

## Tareas formativas registradas

- `✍️ Estudi de l'enunciat (equip)`: mapa mental y presentación al equipo docente según sus indicaciones; no se ha redactado la entrega por el estudiante.
- `🎛️0.6 Github (Visual Studio Code)`: práctica evaluable de ramas, merge y capturas; guiar sin realizar los pasos evaluables por el estudiante.
- `🎨 Manual d'identitat corporativa`: Classroom mostraba entrega el **4/10/2026** e incluía wireframe o prototipo. Conviene volver a consultar la tarea si se va a trabajar en ella.
- También figuran constitución y nombre del equipo, Agile vs. Waterfall y diagrama de casos de uso. Los estados de entrega de estas tareas pueden haber cambiado.

## Reanudar desde otro ordenador

1. Clonar `https://github.com/dmlean/prueba-daw2-equipo.git` con una cuenta autorizada y abrir la carpeta en Codex.
2. Iniciar un chat en esa carpeta y pedir: «Lee `AGENTS.md`, `README.md` y `REGISTRO_DE_CONVERSACION.md`; continúa con el estado actual, verifica lo que haya cambiado y acompáñame en las tareas evaluables sin hacerlas por mí».

## Historial breve

- El nuevo repo se creó con historial Git propio a partir de los archivos versionados del repo público original. Los nombres iniciales `Untitled-1.html` y `h1 {.css` se corrigieron después a `index.html` y `styles.css`.
- El 28/09/2026 se publicó este resumen en el repo privado y se enviaron las invitaciones. El 30/09/2026 se verificó que ambos colaboradores tenían acceso efectivo.
- Se eligió usar Repomix puntualmente con `npx`, sin instalación global. Para un repo tan pequeño, el ahorro de tokens observado fue mínimo.
