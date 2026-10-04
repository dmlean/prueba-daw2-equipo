# Contexto del equipo — Projecte Intermodular 1

Base documental comprobada el **04/10/2026**. Adaptación de la reconstrucción para el equipo, sin correos ni estados de entrega personales. Es contexto de trabajo, no una entrega académica ni prueba de que el equipo haya terminado una tarea. Las fuentes y reservas están en [mapa-evidencias.md](mapa-evidencias.md); el punto de reanudación está en [WIP.md](WIP.md).

## Qué estamos construyendo

La asignatura es **0616 - Projecte Intermodular 1, DAW2 26/27**. El encargo **PROJ_01 - Aplicació de gestió de projectes** reúne análisis, diseño, programación, despliegue y trabajo en equipo: una aplicación web para gestionar proyectos, miembros y tareas. [C0, S0, S1]

**Trama** figura en el repo como nombre decidido. La misión orientada a pymes/equipos creativos y DM Sans aparecen en las notas como propuestas pendientes de validación. Ese posicionamiento no permite reducir los requisitos académicos. [R1, R2, R3]

## Cómo encajan las fuentes

| Información | Dónde se comprueba |
|---|---|
| Tareas publicadas, instrucciones de entrega y constancia de entrega | Classroom; un estado individual no acredita el de todo el equipo. |
| Requisitos y métodos de cada módulo | Sites enlazados desde el curso. |
| Sprints e hitos | Hoja de planificación 2026–27. |
| Responsables, tareas, actas y progreso del equipo | Airtable del grupo, previsto por el curso; falta comprobar su estado actual. |
| Código y decisiones registradas | Repo privado; no acredita trabajo que aún no se haya subido. |
| Avisos y enlaces recibidos | Correo de cada miembro; un aviso no acredita finalización. |

El Kanban que debemos programar pertenece al producto. Airtable sirve para organizar su construcción. Son ámbitos diferentes. [P1, G1]

## Requisitos y entregables confirmados

- **Producto DAW:** autenticación, proyectos con colaboradores, tareas con responsables y estados, roles/permisos, identidad corporativa, interfaz adaptable mediante un framework CSS y publicación accesible. Análisis gráfico, calendario, recursos y gestión documental son opcionales en el enunciado general. [S1]
- **Programación 0612/0613:** Laravel y Eloquent, API y JavaScript que actualiza el DOM. El creador administra el proyecto; los miembros gestionan tareas y pueden autoasignarse, mientras el administrador puede asignarlas a cualquier miembro. Estados mínimos «Per fer», «En progrés» y «Feta», tipos personalizables y Kanban con arrastre que actualiza la API. El cambio de estado respeta las responsabilidades y «Feta» bloquea nuevos cambios de estado. Consultar P1 al implementar los permisos. [P1]
- **Entrega final:** aplicación completa, modelo relacional, SQL de construcción con datos `INSERT`, información necesaria para probarla y manual de identidad. [S1]
- **Identidad/interfaz:** manual con Figma; empatía, moodboard, misión–visión–valores, logo, color y tipografía. La tarea de Classroom pide manual **y wireframe o prototipo**, con revisión en mesas de orientación. [I1, C12]
- **Despliegue 0614:** dos versiones en producción y documentación reproducible del proceso y sus cambios, dominio/DNS, transferencia segura, hosting y certificados/CDN. Bases locales independientes por desarrollador; XAMPP aparece como opción. [D1]
- **Proceso:** análisis del enunciado, casos de uso, constitución del equipo, planificación/seguimiento, presentación y reflexión sobre resultados. Las guías genéricas no se convierten automáticamente en nuevas tareas asignadas. [C0, S3, S4, G1]

Las metas son entender las necesidades, coordinar el trabajo, diseñar la identidad y navegación, construir el producto con datos y permisos, publicarlo y aprender del feedback. La presentación relaciona el trabajo con ODS 4 y 8 y estima 84 horas; esa cifra no indica cuánto trabajo queda. [S0]

## Calendario comprobado y reservas

| Hito | Fecha observada | Alcance |
|---|---|---|
| Manual + wireframe/prototipo; cierre del sprint 1 | 04/10/2026 | Coinciden Classroom y la hoja; hora y entrega del equipo sin verificar. |
| Sprints 2 y 3 | 05–18/10 y 19/10–01/11/2026 | Planificación de la hoja del curso. |
| Incremento | 02/11/2026 | No equivale automáticamente a un despliegue. |
| Sprints 4, 5 y 6 | 02–15/11, 16–29/11 y 30/11–13/12/2026 | Planificación de la hoja del curso. |
| Presentaciones y fin de proyecto | 14–18/12; fin 18/12/2026 | Hoja 2026–27. |
| Aplicación completa | 20/12/2026 | Enunciado general; relación con el cierre del 18 pendiente de aclaración. |
| Dos despliegues | Antes de 10/11 y 8/12, sin año | Requisito de dos versiones confirmado; vigencia de esos días en 2026 sin confirmar. |

[C12, H1, S1, D1]. Para organizarse, llegar preparado a las presentaciones del 14–18/12 es prudente; no es una sustitución de la fecha de entrega oficial. Verificar la fuente pertinente cuando una fecha determine la siguiente acción.

## Requisitos frente a propuestas del repo

Laravel/Eloquent y un framework CSS son requisitos. **Laravel 12, Bootstrap y SQLite local** son las opciones propuestas en el repo; falta acreditar el acuerdo común sobre versiones, datos de producción y hosting. La primera funcionalidad sugerida era autenticación por API, pero su oportunidad depende del análisis, diseño y progreso que se compruebe. [P1, S1, R1]

El producto observable en el repo es una página HTML/CSS inicial y notas de identidad. El progreso y las entregas del conjunto del equipo están por comprobar; tampoco consta una rúbrica completa de 0616 ni sus ponderaciones. Los indicadores DIW son una referencia, no prueba de esa rúbrica. [R0, I3, C0]

## Papel de ChatGPT y criterio de trabajo

ChatGPT ayuda a entender, comprobar fuentes, relacionar requisitos, revisar intentos y elegir la siguiente acción. Para tareas evaluables: **una acción, el conocimiento necesario y una pista; después esperar el intento**. El estudiante realiza y entrega su trabajo.

El criterio rector es **Productividad pragmática con privacidad razonable, fiabilidad alta y complejidad controlada**: primero encender y usar, después mantenimiento mínimo, productividad práctica y finalmente control avanzado. Una mejora que añada mantenimiento o interrumpa el flujo se descarta. Las actualizaciones automáticas solo tienen sentido si respetan esas prioridades; no crean una obligación de vigilancia.

Esta integración documental ha sido solicitada por el usuario; no acredita un acuerdo colectivo. Su función es evitar reconstruir el contexto en cada chat: esta síntesis explica el proyecto, el mapa justifica sus afirmaciones y WIP permite retomar. Los chats y las referencias personales permanecen privados.
