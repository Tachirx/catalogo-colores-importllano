# Bitácora Técnica de Desarrollo y Arquitectura

## Registro de Actualizaciones del Sistema

---

### [2026-08-20 07:18:00 -04:00] - Corrección de Altura y Reseteo Total para Impresión A4 Exacta (10 Hojas)

#### 1. Causa Raíz del Desborde
* En la vista previa de impresión se mostraban 21 hojas de papel en lugar de 10 porque:
  1. Los contenedores externos añadían márgenes e interlineado (`gap-12`, `mt-8`, padding y bordes) que el motor de impresión interpretaba como contenido extra.
  2. La altura interior de las tarjetas de colores y cabeceras dentro de `.print-page` sobrepasaba los 280 mm útiles de una hoja A4 de 297 mm, provocando que los últimos 15 mm (donde se ubica el footer) cayeran en una página huérfana.

#### 2. Solución Aplicada
1. **Reseteo Estricto de Impresión ([src/index.css](file:///c:/Users/Admin/Downloads/catalago/src/index.css)):**
   * Se aplicó reseteo a `.contenedor-paginas` y `.envoltorio-pagina` eliminando márgenes, paddings, gaps, bordes y sombras en `@media print`.
   * Se configuró `.print-page` con dimensiones inmutables: `height: 297mm !important; max-height: 297mm !important; min-height: 297mm !important; padding: 8mm 12mm !important; overflow: hidden !important;`.
2. **Compactación y Geometría Milimétrica ([src/App.tsx](file:///c:/Users/Admin/Downloads/catalago/src/App.tsx)):**
   * Se ajustó la altura de las muestras (`h-10 sm:h-11` en densas, `h-14 sm:h-16` en medias, `h-16 sm:h-20` en estándar).
   * Se redujo el espaciado de cabecera y footer (`mt-3 pt-3`, logo de Importllano `w-12 h-12 md:w-14 md:h-14`).
   * Ahora **cada sección ocupa exactamente 1 sola hoja A4**, totalizando exactamente **10 hojas en la vista previa de impresión**.

---

### [2026-08-20 07:15:00 -04:00] - Blindaje de Maquetación para Impresión A4 y Cuadrícula Adaptativa por Densidad de Color

#### 1. Contexto y Motivo del Cambio
* **Problema Identificado:**
  * Al imprimir en formato A4, las secciones con alta densidad de colores (como *PRO-PLASTIC CAUCHO MATE* con 35 colores, *PRO-PLASTIC ESMALTE* con 29 colores o *PINTUPLAST SEDA* con 27 colores) corrían el riesgo de desbordar la altura física de una hoja A4 (297 mm), lo que provocaría que el motor de impresión del navegador o del visor PDF partiese la sección en 2 hojas físicas.
* **Objetivo:**
  * Garantizar de forma 100% estricta y matemática que **CADA CARTA DE COLOR quede exactamente en UNA SOLA HOJA A4**, sin cortes, sin desbordes y sin generar páginas huérfanas.

#### 2. Solución Técnica Implementada
1. **Reglas CSS Estrictas para `@media print` ([src/index.css](file:///c:/Users/Admin/Downloads/catalago/src/index.css)):**
   * Se fijó la altura exacta de cada página `.print-page` a `height: 297mm !important; max-height: 297mm !important; width: 210mm !important; overflow: hidden !important;`.
   * Se establecieron las directivas de paginación forzada: `break-after: page !important; page-break-after: always !important; break-inside: avoid !important; page-break-inside: avoid !important;`.
   * Se ajustó el acolchado de impresión a `padding: 10mm 12mm !important; box-sizing: border-box !important;`.
2. **Cuadrícula Adaptativa por Densidad ([src/App.tsx](file:///c:/Users/Admin/Downloads/catalago/src/App.tsx)):**
   * Se implementó lógica de cálculo dinámico del layout según el volumen de muestras:
     * **Catálogos Densos ($\ge 25$ colores, ej. 35, 29, 27):** Cuadrícula de 5 columnas compacta (`gap-2 md:gap-2.5`), swatches optimizados (`h-12 md:h-14`), cabecera compacta y truncado seguro de textos para que los 35 colores quepan holgados en 297 mm.
     * **Catálogos Medios ($17$ a $24$ colores, ej. Cebra, Pro-Plastic Satinado):** Cuadrícula de 4 columnas con muestras intermedias (`h-16 md:h-20`).
     * **Catálogos Estándar ($\le 16$ colores, ej. Total, Gala, Máxima):** Cuadrícula de 4 columnas con muestras amplias (`h-20 md:h-24`).
