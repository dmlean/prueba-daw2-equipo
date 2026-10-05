# Trama · prototip navegable

**Prototip de disseny · dades fictícies · 05 d’octubre de 2026**

Aquesta peça aplica la identitat del manual de Trama a recorreguts de gestió de projectes, col·laboradors i tasques. El manual conserva les seves 18 pàgines i l’estat «Versió editorial tancada». El prototip és una peça relacionada amb interacció pròpia; no es limita a les composicions estàtiques de les pàgines 15 i 16.

## Obrir i editar

Descomprimeix el paquet i obre `index.html` amb un navegador actual. Conserva `app.js`, `styles.css` i `recursos/` al mateix nivell. Tot el necessari és local: la primera càrrega també funciona sense connexió. L’original es pot editar amb un editor de text i tornar a obrir al navegador.

Els formularis simulen l’entrada i el treball del projecte. Les dades dels projectes i les tasques es conserven en memòria mentre la pàgina és oberta. Recarregar-la o prémer «Reinicia la mostra» recupera les dades inicials. Els valors de correu i contrasenya no s’envien ni es guarden. Per revisar l’accés, utilitza «Omple amb dades d’exemple».

## Les vuit vistes

| Vista | Punt d’entrada | Què permet revisar |
| --- | --- | --- |
| Inici de sessió | `#acces` | Etiquetes, validació i entrada al recorregut. |
| Registre | `#registre` | Nom visible, correu, contrasenya i confirmació simulada. |
| Projectes | `#projectes` | Nom del projecte, col·laboradors, tasques obertes i rol. |
| Creació de projecte | `#projecte-nou` | Nom obligatori i rol d’administrador per al creador. |
| Kanban | `#kanban/p1` | Per fer, En progrés i Feta; responsables, tipus i canvi d’estat. |
| Col·laboradors | `#collaboradors/p1` | Membres, creador i rols dins del projecte. |
| Detall de tasca | `#tasca/t2` | Context, responsable, tipus, estat i accés a l’edició. |
| Formulari de tasca | `#tasca-nova/p1` o `#tasca-edita/t2` | Creació i edició amb la mateixa estructura; assignació i validació. |

Les adreces internes serveixen per revisar una vista directament. El recorregut principal segueix els enllaços de la interfície. La consulta de col·laboradors i el catàleg de tipus representen dades d’exemple; la gestió completa de membres i tipus no forma part d’aquests recorreguts.

## Recorreguts de revisió

1. **Accés i edició.** Mantén «Membre B · Membre». Omple l’accés amb dades d’exemple, inicia la sessió i obre «Portal del taller». Revisa «Dissenyar l’accés», entra a «Edita la tasca», modifica el títol i desa. El detall mostra el canvi i la confirmació.
2. **Autoassignació.** Al tauler, «Revisar els textos» comença sense responsable. Prem «Assigna’m la tasca». Apareix Membre B i es mostra el selector d’estat.
3. **Assignació administrativa.** Canvia el perfil de prova a «Membre A · Administrador». Edita una tasca de «Portal del taller» i selecciona un altre membre al camp «Responsable». Desa i comprova el detall. El perfil de membre mostra autoassignació i el missatge que reserva l’assignació a altres membres a l’administrador.
4. **Estats i responsabilitat.** Amb Membre B, actualitza una tasca que tinguis assignada mitjançant el selector. En escriptori també pots arrossegar-ne la targeta a una altra columna. Aquest recorregut demostra el canvi d’estat de la persona responsable; no defineix excepcions administratives que les fonts locals no concretin.
5. **Estat final.** Passa una tasca a «Feta» i comprova que desapareix el control de canvi d’estat i l’arrossegament. «Definir la paleta» ja comença en aquest estat. Pots editar-ne el títol sense reobrir-la: el bloqueig afecta el canvi d’estat.
6. **Projecte nou.** Crea «Arxiu del taller». El perfil actiu n’és l’administrador i el primer col·laborador. El tauler comença buit; crea-hi una tasca i comprova’n el detall.
7. **Validació i error.** Envia un formulari sense el camp obligatori per veure l’explicació i el focus del camp. Activa «Simula un error de desament» a la barra externa i desa un projecte o una tasca: el formulari conserva els valors i permet tornar-ho a provar. La simulació s’esgota després d’un intent.
8. **Reinici.** Prem «Reinicia la mostra». Tornen els dos projectes i les tres tasques inicials, amb el perfil Membre B i la pantalla d’accés.

## Dades inicials

| Projecte | Tasca | Tipus | Responsable | Estat |
| --- | --- | --- | --- | --- |
| Portal del taller | Revisar els textos | Documentació | Sense responsable | Per fer |
| Portal del taller | Dissenyar l’accés | Disseny | Membre B | En progrés |
| Portal del taller | Definir la paleta | Disseny | Membre A | Feta |
| Guia del barri | Tauler inicial buit | — | — | — |

Membre A és el creador i administrador de «Portal del taller». Membre B és el creador i administrador de «Guia del barri». Els rols es mostren per projecte. El selector extern descriu els dos perfils de prova a «Portal del taller» i no és un control de permisos de l’aplicació.

## Sistema visual i adaptació

La interfície utilitza DM Sans 400, 500 i 700, amb lectura de 16/24 px; títols de 28/34 px en escriptori i 24/30 px en mòbil. Els controls principals tenen una altura mínima de 44 px. Els radis són de 8 px en controls, 12 px en targetes i 999 px en etiquetes d’estat.

Els sis colors coincideixen amb el manual: Tinta `#17343B`, Paper `#F4F5EF`, Blanc `#FFFFFF`, Verd trama `#176B5B`, Ocre `#E4B44C` i Argila `#A33832`. Les combinacions principals són Blanc/Verd trama, Tinta/Paper, Tinta/Blanc, Tinta/Ocre i Argila/Blanc. Estat, error i confirmació incorporen text.

A partir de 1024 px hi ha navegació lateral i tres columnes de Kanban. Per sota, la navegació s’adapta i el tauler utilitza un selector amb els noms dels tres estats. Es conserva la mida de lectura i l’ordre dels camps. El selector ofereix una alternativa al gest d’arrossegament i permet revisar el tauler amb teclat.

Els SVG del logo i les fonts són còpies dels recursos reals del manual. La llicència SIL Open Font License 1.1 de DM Sans s’inclou a `recursos/OFL-DM-Sans.txt`. No es carreguen fonts, imatges ni llibreries externes.

## Fonts i comprovacions

El context s’ha contrastat amb `sintesis-proyecto.md`, `mapa-evidencias.md`, README i WIP del clon local de `dmlean/prueba-daw2-equipo`, revisió `cb085c0`, i amb les pàgines 15–16 del manual. Els enllaços originals dels reptes de programació i identitat no han pogut consultar-se en aquesta consulta; el prototip manté les regles documentades localment i al context aportat.

Les comprovacions tècniques efectuades es documenten a `revisio.json`, amb la versió i els recorreguts revisats. Són proves del prototip amb dades fictícies, sense autenticació ni permisos d’un servidor.
