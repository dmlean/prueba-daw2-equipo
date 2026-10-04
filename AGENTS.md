# Instrucciones del proyecto para agentes

## Identidad del proyecto y alcance
En este trabajo, «proyecto», «ChatGPT project» y «proyecto de Work/Codex» identifican el repositorio privado `dmlean/prueba-daw2-equipo`, remoto `https://github.com/dmlean/prueba-daw2-equipo.git`. El usuario ha descartado el proyecto convencional de la web de ChatGPT como destino de esta integración. No navegar a él, subirle documentos ni cambiar su configuración por inferencia; una petición de integrar contexto se resuelve en el repo salvo que el usuario indique expresamente otro destino.

GitHub conserva el estado compartido versionado. La copia de trabajo disponible, local o remota, puede tener otra rama o cambios aún no publicados: son parte del trabajo y no deben descartarse ni darse por sincronizados. No confundir el origen de este chat, una carpeta espejo o archivos adjuntos con la identidad del repo.

El flujo habitual indicado por el usuario es que cada miembro autorizado clone el repo y abra su carpeta raíz como proyecto local en Codex. Verifica el alcance del entorno actual; no des por comprobado el arranque en los equipos de los demás miembros.

Al comenzar, identifica el entorno disponible y comprueba el repo seleccionado, su remoto, rama y cambios pendientes cuando tengas acceso Git. Trabaja desde la raíz de ese repo. Si solo puedes leer GitHub, declara ese alcance y la revisión consultada; no afirmes haber modificado un clon. Si falta acceso o hay un destino diferente, pregunta por ese dato antes de escribir o publicar. No actualices, cambies de rama ni sobrescribas archivos automáticamente para forzar una coincidencia.

## Contexto
Este repositorio es el proyecto intermodular de DAW2. Basa el trabajo en los archivos del repositorio y en los enunciados o materiales que el usuario aporte. Distingue lo confirmado de lo que no se haya podido verificar y no inventes requisitos.

## Retomar y mantener el contexto
Al iniciar o recibir «Retomemos», lee `README.md` y `WIP.md` después de estas instrucciones. Usa `sintesis-proyecto.md` para comprender el encargo y `mapa-evidencias.md` para la fuente pertinente; no releas todo el archivo de evidencias en cada turno. El registro anterior es histórico.

WIP integra trabajo actual, pendientes y traspaso; no crees BACKLOG/HANDOFF separados ni dupliques Airtable. Cuando una acción cambie el progreso comprobado, actualiza solo las líneas afectadas: resultado, enlace, bloqueo y próxima acción, con fecha. No registres cada mensaje ni exijas un parte diario. No confundas trabajo observable, acuerdo colectivo y entrega acreditada.

El equipo comparte estas instrucciones y el contexto mediante el repo; cada miembro mantiene sus conversaciones y cuenta. Conserva el progreso de las demás actividades al actualizar WIP. Si el entorno no carga estas instrucciones, el texto de inicio de `CHATGPT_PROJECT_INSTRUCTIONS.md` permite solicitar su lectura; no mantengas allí una segunda versión de las reglas.

Comprueba una fecha, instrucción o estado cuando determine la acción actual. Si no hay acceso a la fuente o al trabajo del equipo, declara ese límite y pregunta por el dato necesario; no reconstruyas el tablero por inferencia. Una propuesta documental del usuario no acredita aceptación de los demás miembros.

## Criterio rector
Productividad pragmática con privacidad razonable, fiabilidad alta y complejidad controlada. Prioridad: 1) encender y usar; 2) mantenimiento mínimo; 3) productividad práctica; 4) control avanzado. Descarta mejoras que añadan mantenimiento o rompan el flujo. Prioriza fiabilidad, vida real, sostenibilidad, reversibilidad e integración. Las actualizaciones automáticas solo se consideran si respetan esas prioridades; no añadas sincronizadores ni vigilancia para estas notas.

## Acompañamiento didáctico
Cuando el usuario trabaje una tarea evaluable, avanza de una en una: indica la siguiente acción, el conocimiento necesario y una pista breve. Espera a que el usuario muestre su intento antes de dar el siguiente paso. Ayuda a entender y revisar, pero no redactes ni entregues la respuesta evaluable por él. Si se bloquea, da solo la pista necesaria para continuar.

Explica los términos técnicos en español claro y conciso. Prioriza el paso de mayor impacto que sea sencillo y oportuno.

Prioriza las tareas intermodulares mediante riesgo de aplazar, esfuerzo e impacto, cada uno puntuado por separado de 1 a 5. No combines las puntuaciones en una fórmula. Explica qué datos faltan y qué parte es una estimación.

## Cambios técnicos
Antes de editar, revisa el código, la estructura y estas instrucciones. Mantén compatibilidad con Windows y cambios pequeños. No añadas dependencias, carpetas, pruebas ni automatizaciones sin una necesidad concreta o una petición expresa.

## Privacidad y Git
El repositorio de equipo previsto es `dmlean/prueba-daw2-equipo`, privado y limitado a `dmlean`, `2exan` y `miguel-gil-moral`. No cambies la visibilidad ni invites a profesorado. No publiques en `Miguel-Gil-Moral/prueba-daw2`.

No incluyas credenciales, tokens ni datos privados en commits. Comparte con el equipo únicamente los archivos del proyecto; incorpora registros de conversación solo cuando el usuario lo pida expresamente y tras comprobar el destino privado y sus colaboradores.
