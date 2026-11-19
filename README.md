# Proyecto intermodular DAW2

Aplicación web de gestión de proyectos para equipos de estudiantes. Este repositorio privado es el espacio de trabajo del equipo.

## Retomar sin reconstruir el chat

Cada miembro abre la carpeta raíz de su clon de `dmlean/prueba-daw2-equipo` como proyecto local en Codex y pide: **«Retomemos»**. El asistente identifica la copia de trabajo y su estado, lee [AGENTS.md](AGENTS.md) y [WIP.md](WIP.md), comprueba lo que afecte al paso actual y propone una siguiente acción. Para una tarea evaluable, espera vuestro intento antes de continuar. Si otro entorno de Work/Codex no carga las instrucciones, usa el [texto de inicio](CHATGPT_PROJECT_INSTRUCTIONS.md).

| Documento | Para qué abrirlo |
|---|---|
| [WIP.md](WIP.md) | Trabajo observable, bloqueo, próxima acción y pendientes. Integra las funciones de WIP, BACKLOG y HANDOFF. |
| [Síntesis del proyecto](sintesis-proyecto.md) | Entender producto, requisitos, entregables, calendario y propuestas. |
| [Mapa de evidencias](mapa-evidencias.md) | Consultar la fuente de un requisito o resolver una contradicción. |

Airtable conserva la gestión detallada de tareas y responsables; Git conserva código y cambios. Estos documentos permiten continuar con contexto y no crean un segundo tablero. La reconstrucción privada completa permanece fuera del repo.

## Empezar ahora

Necesitas Git y Codex o Visual Studio Code en el ordenador donde vayas a trabajar.

1. Entra en GitHub con una cuenta que tenga acceso al repositorio.
2. Clona el proyecto:

   ```powershell
   git clone https://github.com/dmlean/prueba-daw2-equipo.git
   cd prueba-daw2-equipo
   ```

3. Abre esta carpeta en Codex o Visual Studio Code. Para ver la página HTML inicial, abre `index.html` en un navegador.

La página HTML inicial puede abrirse sin instalar paquetes ni arrancar un servidor. La carpeta `Trama` contiene un proyecto Laravel, cuyos requisitos declarados están en `Trama/composer.json`. Cada clon es una copia local; los cambios del equipo se intercambian mediante Git. Configura tu nombre y correo de Git para **este repositorio** cuando vayas a hacer tu primer commit, si todavía no están configurados:

```powershell
git config user.name "Tu nombre"
git config user.email "Tu correo de GitHub"
```

## Estado del producto

`index.html` y `styles.css` muestran una página inicial. La carpeta `Trama` contiene estructura Laravel y una ruta inicial; su `composer.json` declara PHP `^8.3` y Laravel `^13.17`. En esta revisión no se ha comprobado el funcionamiento de la aplicación, la base de datos ni un despliegue. Otras ramas pueden contener avances distintos; [WIP.md](WIP.md) recoge el alcance comprobado.

## Trabajar sobre el repo con Work/Codex

El proyecto de trabajo del equipo es el repo remoto **`dmlean/prueba-daw2-equipo`**. El flujo acordado con el usuario es que cada miembro autorizado clone el repo y abra su carpeta raíz como proyecto local en Codex. El proyecto convencional de la web de ChatGPT queda fuera de este flujo: no hace falta subirle copias ni mantener su configuración.

GitHub comparte código, contexto e instrucciones. Una copia de trabajo puede tener cambios pendientes o una rama distinta: comprobarlo antes de incorporar trabajo de los compañeros o publicar, sin sobrescribirlo ni suponer que está actualizado. Cada miembro conserva sus cuentas y conversaciones; el contexto necesario para colaborar queda en los archivos del repo.

Las reglas comunes están en `AGENTS.md`. `CHATGPT_PROJECT_INSTRUCTIONS.md` conserva su nombre por compatibilidad y proporciona un texto breve para pedir su lectura en Work/Codex cuando sea necesario; no configura un proyecto web ni mantiene otra copia de las reglas.

Al cerrar un paso con progreso comprobado, el asistente actualiza unas líneas de WIP. No hace falta copiar el chat, repasar todas las fuentes ni rellenar tres documentos de seguimiento. Las decisiones del equipo se acreditan y las entregas se comprueban por separado.

## Comprobar el arranque en cada equipo

Desde el clon abierto en Codex, pedir «Retomemos». El resultado debe identificar este repo, utilizar sus instrucciones y WIP, distinguir el progreso comprobado de lo pendiente y proponer una siguiente acción. Si no puede leerlos, corregir la carpeta seleccionada o el acceso antes de continuar. Comprobarlo en un ordenador no acredita el arranque en los de los demás miembros.

## Archivos de apoyo

- `AGENTS.md`: pautas para Codex y otros agentes compatibles.
- `CHATGPT_PROJECT_INSTRUCTIONS.md`: texto de inicio para trabajar con este repo en Work/Codex.
- `REGISTRO_DE_CONVERSACION.md`: referencia histórica fechada; para reanudar se usa WIP. No es una transcripción literal de chats.
