# Proyecto intermodular DAW2

Punto de partida para construir la aplicación de gestión de proyectos de equipo.

## Estado actual

Ahora mismo es una página estática con HTML y CSS. Sirve para abrir el proyecto y empezar a trabajar, pero todavía no incluye autenticación, gestión real de proyectos o tareas, permisos, almacenamiento ni despliegue.

## Empezar desde una copia nueva

1. Acepta la invitación de GitHub. El repositorio es privado y solo se puede clonar con una cuenta autorizada.
2. Comprueba que tienes Git y Visual Studio Code o Codex instalados. Antes del primer commit, configura tu identidad de Git si aún no lo has hecho:

   ```powershell
   git config --global user.name "Tu nombre"
   git config --global user.email "Tu correo de GitHub"
   ```

3. Clona el repositorio y entra en su carpeta:

   ```powershell
   git clone https://github.com/dmlean/prueba-daw2-equipo.git
   cd prueba-daw2-equipo
   ```

4. Abre esa carpeta en Visual Studio Code o Codex.
5. Abre `index.html` en el navegador. No hace falta instalar paquetes ni iniciar un servidor para ver esta página.

## Archivos principales

- `index.html`: página inicial.
- `styles.css`: estilos de la página.
- `AGENTS.md`: instrucciones para Codex y otros agentes compatibles.
- `CHATGPT_PROJECT_INSTRUCTIONS.md`: instrucciones preparadas para el proyecto de ChatGPT.
- `REGISTRO_DE_CONVERSACION.md`: resumen del contexto y los acuerdos del proyecto; no es una transcripción literal.

## Alcance confirmado

El enunciado del proyecto pide autenticación, gestión de proyectos y tareas, roles y permisos, identidad visual, diseño adaptable y despliegue. Calendario, análisis, recursos y documentos aparecen como opciones. La tecnología de servidor, base de datos y organización interna aún debe decidirse por el equipo.

## Siguiente trabajo técnico

Antes de añadir dependencias, definid en equipo la tecnología y el modelo de datos. Después podéis implementar una primera funcionalidad pequeña y ejecutable y actualizar estas instrucciones con los comandos reales para instalar, desarrollar y desplegar.
