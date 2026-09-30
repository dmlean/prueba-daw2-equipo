# Proyecto intermodular DAW2

Aplicación web de gestión de proyectos para equipos de estudiantes. Este repositorio privado es el espacio de trabajo del equipo.

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

## Enunciado verificado el 30/09/2026

El [proyecto intermodular](https://sites.google.com/politecnics.barcelona/proj01-gestideprojectes/el-projecte) exige para DAW registro e inicio de sesión, gestión de proyectos y tareas, roles y permisos, identidad corporativa, diseño adaptable mediante un framework CSS y despliegue. Pide entregar el modelo relacional y un script SQL con los `INSERT` necesarios. La fecha indicada para la aplicación completa es el **20/12/2026**. Análisis, calendario, recursos y gestión documental figuran como opcionales.

El [reto de programación 0612 y 0613](https://sites.google.com/politecnics.barcelona/m0607rep01programarleinadegest/repte) concreta Laravel y Eloquent en el servidor, una API y JavaScript para actualizar la interfaz. También describe las reglas de proyectos, miembros, tareas, estados y panel Kanban. El [reto de despliegue 0614](https://sites.google.com/politecnics.barcelona/m08-repte1/repte) pide publicar y documentar la aplicación, y que cada desarrollador tenga una base de datos local independiente; menciona XAMPP como opción local. Las fechas de versiones de esa página no indican año y deben confirmarse en Classroom. Consultad los textos originales al implementar cada parte.

## Dirección técnica inicial

- **Servidor:** Laravel con Eloquent, según el reto del curso. Laravel 12 es la versión propuesta para arrancar en este PC, que tiene PHP 8.2; Laravel 13 requiere PHP 8.3.
- **Cliente:** JavaScript nativo para llamar a la API y modificar el DOM. Bootstrap es la opción sencilla propuesta para cumplir el requisito de framework CSS sin introducir una aplicación JavaScript adicional.
- **Datos locales:** SQLite es la propuesta inicial porque cada desarrollador puede tener su propia base sin instalar un servidor de datos. La base local y las credenciales no se subirán a Git; las migraciones y los datos de ejemplo reproducibles sí. El motor para producción y el script SQL de entrega se confirmarán con el hosting y el equipo.
- **Primera funcionalidad propuesta:** registro e inicio de sesión mediante la API, mostrando en la interfaz qué usuario ha accedido. Identificar al usuario permite implementar después sus proyectos y permisos.

El equipo aún debe confirmar la versión que usarán todos y el destino de despliegue. El repositorio no incluye todavía una aplicación Laravel ni sus dependencias. Cuando se añada, abrir `index.html` dejará de ser el modo de ejecutar la aplicación completa.

## Archivos de apoyo

- `AGENTS.md`: pautas para Codex y otros agentes compatibles.
- `CHATGPT_PROJECT_INSTRUCTIONS.md`: instrucciones preparadas para el proyecto de ChatGPT.
- `REGISTRO_DE_CONVERSACION.md`: resumen de contexto y decisiones; no es una transcripción literal de chats.
