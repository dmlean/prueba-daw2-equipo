# Trama · lliurament editorial

**Versió editorial tancada · 04 d’octubre de 2026**

El manual té 18 pàgines en català. Les decisions d’identitat s’han adoptat per encàrrec per a aquesta versió. Això no acredita un acord col·lectiu, una entrega acadèmica ni la implementació de les pantalles representades.

## Fitxers del paquet

- `manual-identitat-trama.pdf`: manual A4 revisat, amb textos, normes i exemples visuals.
- `original-editorial.md`: original textual editable, organitzat per pàgines.
- `original-editorial.json`: el mateix contingut estructurat.
- `original-maquetat.html`: original paginat amb textos SVG editables i recursos tipogràfics locals. Es pot obrir en un navegador; cal conservar la carpeta `recursos` al mateix nivell.
- `recursos/`: quatre SVG vectorials del logo, tres pesos de DM Sans, llicència oficial, especificacions i guia de Figma.
- `revisio-pdf.json` i `revisio-figma.json`: comprovacions tècniques efectuades.

El [fitxer real editable a Figma](https://www.figma.com/design/YVAE5BQy7iatVfvDZHKOnH) conté «01 · Manual» amb 18 frames i «02 · Sistema visual» amb variables, estils i components locals. Les composicions de producte són exemples estàtics; el wireframe o prototip relacionat necessita una comprovació separada.

## Comprovacions efectuades

El PDF s’ha renderitzat i inspeccionat en les 18 pàgines: marges, taules, numeració, encaix, català i exemples de permisos. El format és de 210 × 297 mm. Conté DM Sans Regular, Medium i Bold incrustats. S’han comprovat els caràcters catalans i les xifres. Les mostres de pesos de la pàgina 8 s’han corregit i tornat a inspeccionar després de la revisió.

Els vuit parells de contrast s’han calculat amb la luminància relativa sRGB de WCAG 2.2. Les classificacions utilitzen valors sense arrodonir. Les proves de reducció renderitzades sustenten els mínims editorials del logo de 120 px per al conjunt i 24 px per al símbol, sense protecció exterior. La impressió física i la lectura en dispositius no s’han provat.

A Figma, l’auditoria estructural cobreix les 18 pàgines: no s’hi han detectat fonts absents, substitucions ni nodes fora dels límits dels frames. Els textos i les formes són editables; el manual no s’ha importat com a imatges rasteritzades. La inspecció visual nativa cobreix les pàgines 1–9. La quota del connector MCP del pla Starter ha impedit continuar la revisió nativa de les pàgines 10–18 i dels darrers components de marca. A la taula de la pàgina 8 de Figma queda pendent aplicar Medium a «Desa els canvis» i Bold a «Projectes compartits»; el PDF i l’original maquetat ja inclouen aquesta correcció. El seient continua sent View: no s’ha modificat ni el seient ni el pla.

## Fonts i límits

S’ha consultat el clon local de `dmlean/prueba-daw2-equipo`, branca `main`, revisió inicial `17bf9ff`, sense canvis previs: instruccions, README, WIP, síntesi, mapa d’evidències i notes de missió i tipografia. No s’ha comprovat que aquesta revisió coincideixi amb l’última remota. S’han respectat les fonts sincronitzades de només lectura.

Les fonts externes verificades són [WCAG 2.2 de W3C](https://www.w3.org/TR/WCAG22/), [DM Sans al repositori oficial Google Fonts](https://github.com/google/fonts/tree/main/ofl/dmsans), [ODS 4](https://sdgs.un.org/goals/goal4), [ODS 8](https://sdgs.un.org/goals/goal8) i la [documentació oficial de Figma sobre escriptura al llenç](https://developers.figma.com/docs/figma-mcp-server/write-to-canvas/). El moodboard i els recursos del manual són composicions pròpies; no s’hi han utilitzat fotografies externes ni identitats de tercers.

La recerca d’usuaris, la prova d’ús, la revisió col·lectiva, la conformitat global d’accessibilitat i l’evidència d’entrega acadèmica conserven l’estat indicat a la pàgina 18. No s’infereixen del tancament editorial.
