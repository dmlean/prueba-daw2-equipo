# Guia del fitxer editable a Figma · Trama

**Estat editorial:** Versió editorial tancada. El lliurament inclou el [fitxer real de Trama a Figma](https://www.figma.com/design/YVAE5BQy7iatVfvDZHKOnH), amb el manual complet i el sistema visual editable. Les decisions són decisions editorials adoptades per a aquesta versió; no acrediten un acord col·lectiu ni una entrega acadèmica.

## 1. Estructura del lliurament

El fitxer conté dues pàgines: «01 · Manual», amb 18 frames A4 verticals de 793,70 × 1122,52 px, i «02 · Sistema visual», amb variables, estils de text i components locals reutilitzables. El manual manté l’ordre, l’índex i la numeració de l’1 al 18.

La retícula parteix de 210 × 297 mm, marges de 18 mm, sis columnes i separacions de 4 mm. A l’escala de 96 px per polzada del fitxer, els marges són de 68,03 px i les separacions de 15,12 px. En editar, conserva les alineacions de capçalera i peu i revisa la correspondència entre pàgines i índex. En exportar, comprova la mida física del PDF.

## 2. Fonts i identificadors vectorials

El sistema utilitza DM Sans Regular 400, Medium 500 i Bold 700. Els fitxers locals i la llicència SIL Open Font License 1.1 són en aquesta carpeta. En un altre equip, habilita la font abans d’editar i comprova «Col·laboració, pròxima tasca, qüestió, accés» i «À È É Í Ò Ó Ú Ç · 0123456789».

Els recursos locals `logo-principal.svg`, `logo-monocrom.svg`, `logo-invers.svg` i `simbol-trama.svg` conserven geometria vectorial real. El nom està convertit a contorns derivats de DM Sans Bold i no depèn d’una font activa. Les versions de marca són Principal, Monocroma i Inversa, amb el component compacte «Marca / Símbol». La versió inversa té traços blancs i fons transparent: aplica-la sobre Tinta.

La unitat x és el gruix del traç. La separació símbol–nom és de 3x i la protecció exterior, de 2x. Els mínims adoptats són **120 px per al conjunt**, **24 px per al símbol** i **30 mm per al conjunt imprès**. Aquestes mesures **exclouen la protecció exterior**. Els SVG afegeixen 8 unitats per costat: viewBox de 155,52 × 48 per al conjunt i de 48 × 48 per al símbol. La caixa sense protecció és de 139,52 × 32 i de 32 × 32, respectivament. Conserva el marge en col·locar el recurs; no mesuris el mínim sobre el viewBox complet. La comparació renderitzada està revisada; les proves d’ús en dispositius i impressió física continuen pendents.

## 3. Variables i estils existents

El sistema conté **6 colors primitius, 13 àlies semàntics, 11 dimensions i 11 estils de text**. `sistema-visual.json` documenta noms, valors i correspondències del fitxer. Les col·leccions són «Trama · Primitives», «Trama · Colors semàntics» i «Trama · Espai i radi».

Els àlies relacionen funció i color: Paper per al fons base; Blanc per a les superfícies; Tinta per al text i les vores normals; Verd trama per a acció, enllaç i focus; Ocre per a «En progrés», i Argila per a error. Quan s’utilitza el fons d’error Argila, el text és Blanc. Quan el fons és Blanc, el text i el contorn d’error són Argila. Ocre serveix per a **destacats** i porta text Tinta.

Les dimensions inclouen espais de 4, 8, 12, 16, 24 i 32 px; radi de control de 8 px, de targeta de 12 px i d’estat de 999 px; vores normals d’1 px i de focus de 2 px. Conserva els vincles a variables quan modifiquis components.

| Estil del fitxer | Pes | Mida / interlineat de referència |
|---|---:|---|
| Trama/Editorial/Títol | 700 | 24 / 28 pt |
| Trama/Editorial/Subtítol | 500 | 14 / 19 pt |
| Trama/Editorial/Cos | 400 | 10,5 / 15 pt |
| Trama/Editorial/Nota | 400 | 9 / 12,5 pt |
| Trama/UI/Cos | 400 | 16 / 24 px |
| Trama/UI/Etiqueta | 500 | 14 / 20 px |
| Trama/UI/Nota | 400 | 12 / 16 px |
| Trama/UI/Títol escriptori | 700 | 28 / 34 px |
| Trama/UI/Títol mòbil | 700 | 24 / 30 px |
| Trama/UI/Subtítol | 500 | 20 / 26 px |
| Trama/UI/Títol de targeta | 700 | 16 / 24 px |

En Figma, els quatre estils editorials converteixen els punts a píxels multiplicant per 96/72: cos 14/20 px i títol 32/37,33 px. Les referències del JSON conserven les dues unitats. Botons i etiquetes comparteixen «Trama/UI/Etiqueta»; l’ajuda i la validació dels camps utilitzen «Trama/UI/Nota».

## 4. Components reutilitzables

El lliurament disposa dels conjunts «Trama/Botó», amb Principal i Secundari; «Trama/Camp», amb Normal, Error i Focus; «Trama/Estat», amb Per fer, En progrés i Feta, i la «Trama/Targeta de tasca». Els identificadors de marca utilitzen les versions vectorials corresponents.

Botons i camps tenen una altura mínima de 44 px; els estats, 24 px. El radi dels controls és de 8 px, el de la targeta és de 12 px i el dels estats és de 999 px. La targeta té una separació interna de 12 px. Mantén les estructures amb Auto Layout i permet que els textos augmentin l’altura quan ocupen més línies. L’etiqueta del camp és visible; l’ajuda i l’error es mantenen a prop del control.

El focus utilitza un contorn de 2 px en Verd trama sobre fons clar i Blanc sobre Tinta. Els estats inclouen sempre l’etiqueta escrita: el text visible identifica la informació a més del color, sense exigir icones absents del component. Els missatges de validació descriuen el problema o resultat concret. Les composicions són propostes visuals, no proves de funcionalitat implementada.

Respecta els rols documentats: l’administrador pot assignar a altres membres i un membre pot autoassignar-se. Una tasca Feta no ofereix canvis d’estat. No dedueixis altres restriccions d’edició. El manual i les seves composicions es distingeixen del wireframe o prototip relacionat, que necessita una comprovació separada.

## 5. Edició, comprovacions i reconstrucció

El fitxer Figma es pot revisar i modificar. Per reconstruir-ne una còpia, importa els SVG, habilita DM Sans i reprodueix els noms i valors del JSON; conserva els vincles a variables i els estils compartits. No afegeixis colors, fonts o efectes per resoldre problemes d’espai.

Després d’una modificació, revisa retalls, desbordaments, català, fonts, dades fictícies i numeració. Els contrastos calculats consten al JSON amb ràtios sense arrodonir i presentació amb coma catalana. Blanc sobre Ocre i la separació Paper/Blanc no serveixen per a text o límits essencials. La comprovació dels parells no acredita conformitat AA global de l’aplicació.

El fitxer Figma és complet en contingut i editable. L’auditoria estructural cobreix les 18 pàgines, sense fonts absents ni desbordaments detectats. La inspecció visual amb captures natives de Figma cobreix les pàgines 1–9; la revisió nativa de les pàgines 10–18 ha quedat bloquejada per la quota de crides de l’MCP del pla Starter. No s’ha canviat el pla ni el seient.

La revisió visual del PDF local sí que cobreix les 18 pàgines renderitzades. Les proves en dispositius, la impressió física, la revisió col·lectiva i la validació acadèmica mantenen el seu estat real i no s’infereixen de l’existència del fitxer.

La darrera correcció del PDF i de l’original maquetat diferencia els pesos de la columna «Mostra» a la pàgina 8. Quan el connector torni a permetre l’edició, aplica Medium a «Desa els canvis» i Bold a «Projectes compartits» en aquesta taula de Figma. La quota també ha impedit la captura nativa final dels components de marca afegits.
