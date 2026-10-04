# Proyecto intermodular DAW2

Aplicación web de gestión de proyectos para equipos de estudiantes. Este repositorio privado es el espacio de trabajo del equipo.

## Retomar sin reconstruir el chat

Abre el repo y pide a ChatGPT o Codex: **«Retomemos»**. El asistente lee las instrucciones y [WIP.md](WIP.md), comprueba lo que afecte al paso actual y propone una siguiente acción. Para una tarea evaluable, espera vuestro intento antes de continuar.

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

3. Abre esta carpeta en Codex o Visual Studio Code. Para ver la página actual, abre `index.html` en un navegador.

La página actual solo usa HTML y CSS: no necesita instalar paquetes ni arrancar un servidor. Cada clon es una copia local; los cambios del equipo se intercambian mediante Git. Configura tu nombre y correo de Git para **este repositorio** cuando vayas a hacer tu primer commit, si todavía no están configurados:

```powershell
git config user.name "Tu nombre"
git config user.email "Tu correo de GitHub"
```

## Estado del producto

`index.html` y `styles.css` muestran una página inicial. Todavía no hay registro o inicio de sesión, proyectos o tareas funcionales, permisos, base de datos ni despliegue. Al añadir el servidor se actualizarán aquí los comandos reales de instalación y arranque.

## Usar el proyecto de ChatGPT con el repo

El proyecto «0616 - Projecte Intermodular 1» y este repo tienen accesos distintos. Guardar un archivo aquí no lo incorpora automáticamente a las fuentes o instrucciones de ChatGPT.

Para trabajo local, usar la carpeta del repo como carpeta principal del proyecto local de la app facilita leer sus archivos e instrucciones. Cuando se use ChatGPT con GitHub, comprobar que la conexión puede leer el repo privado y la revisión pertinente. Si el chat solo dispone de archivos subidos, estos son copias fechadas: actualizar únicamente el contexto que haya cambiado y declarar qué no se ha podido verificar. No instalar un sistema de sincronización para mantener estas notas. [Documentación oficial de proyectos](https://learn.chatgpt.com/docs/projects).

`CHATGPT_PROJECT_INSTRUCTIONS.md` contiene el texto preparado para las instrucciones de ChatGPT; editarlo aquí no modifica la configuración del proyecto. Antes de incorporar fuentes a un proyecto compartido, comprobar su audiencia. Compartir contexto del equipo no requiere compartir conversaciones o correos personales.

Al cerrar un paso con progreso comprobado, el asistente actualiza unas líneas de WIP. No hace falta copiar el chat, repasar todas las fuentes ni rellenar tres documentos de seguimiento. Las decisiones del equipo se acreditan y las entregas se comprueban por separado.

## Archivos de apoyo

- `AGENTS.md`: pautas para Codex y otros agentes compatibles.
- `CHATGPT_PROJECT_INSTRUCTIONS.md`: instrucciones preparadas para el proyecto de ChatGPT.
- `REGISTRO_DE_CONVERSACION.md`: referencia histórica fechada; para reanudar se usa WIP. No es una transcripción literal de chats.
