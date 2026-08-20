export interface PaintColor {
  name: string;
  hex: string;
  code?: string;
  tone?: string;
}

export interface PaintLine {
  brand: string;
  line: string;
  description?: string;
  colors: PaintColor[];
}

export const catalogData: PaintLine[] = [
  {
    brand: "CEBRA",
    line: "CAUCHO",
    description: "Pintura mate interior de excelente textura y acabados.",
    colors: [
      { name: "BLANCO NIEVE", code: "9710-40", hex: "#FFFFFF", tone: "Blanco puro" },
      { name: "BLANCO OSTRA", code: "9711-50", hex: "#F6ECCF", tone: "Crema marfil claro" },
      { name: "GRIS", code: "9712-60", hex: "#747474", tone: "Gris medio neutro" },
      { name: "AZUL TURQUESA", code: "9724-50", hex: "#00BFDE", tone: "Turquesa / Cian vivo" },
      { name: "AZUL PROFUNDO", code: "9725-50", hex: "#095797", tone: "Azul real intenso" },
      { name: "VERDE", code: "9730-40", hex: "#097B6B", tone: "Verde bosque azulado" },
      { name: "VERDE PISTACHO", code: "9731-60", hex: "#00B56C", tone: "Verde esmeralda vivo" },
      { name: "VERDE LIMÓN", code: "9742-40", hex: "#FAF294", tone: "Amarillo verdoso pastel" },
      { name: "AMARILLO CREMA", code: "9743-80", hex: "#FFF4CE", tone: "Crema suave cálido" },
      { name: "AMARILLO", code: "9744-60", hex: "#F8B400", tone: "Amarillo cromo / oro" },
      { name: "GUAYABA ROSA", code: "9752-90", hex: "#F68B9E", tone: "Rosa coral intermedio" },
      { name: "ROSADO SALMÓN", code: "9753-20", hex: "#FCAFA3", tone: "Salmón claro / durazno" },
      { name: "FUCSIA", code: "9754-50", hex: "#BA005B", tone: "Magenta oscuro" },
      { name: "CEREZA", code: "9754-30", hex: "#EE3451", tone: "Rojo carmín brillante" },
      { name: "VINOTINTO", code: "9754-40", hex: "#5E0911", tone: "Borgoña / Rojo vino oscuro" },
      { name: "MORADO", code: "9762-70", hex: "#8E87C2", tone: "Lavanda / Lila azulado" },
      { name: "NEGRO", code: "9770-40", hex: "#121212", tone: "Negro profundo mate" },
      { name: "MARRÓN EGIPTO", code: "9791-40", hex: "#564B29", tone: "Pardo oliva / Caqui oscuro" },
      { name: "MANDARINA", code: "9791-80", hex: "#FA5F00", tone: "Naranja saturado" },
      { name: "TERRACOTA", code: "9792-50", hex: "#C64828", tone: "Óxido rojizo" }
    ]
  },
  {
    brand: "PINTUPLAST",
    line: "SEDA",
    description: "Excelente acabado y textura sedosa. Aplicable sobre superficies en ambientes internos.",
    colors: [
      { name: "BLANCO COCO", hex: "#ffffff" },
      { name: "BLANCO GUANABANA", hex: "#e6e6de" },
      { name: "BLANCO TORONJA", hex: "#d6d1c7" },
      { name: "BLANCO BANANA", hex: "#fffce8" },
      { name: "MELON", hex: "#fff0c4" },
      { name: "PIÑA", hex: "#fade99" },
      { name: "NISPERO", hex: "#e6cfb0" },
      { name: "DURAZNO", hex: "#ffc9b8" },
      { name: "PERA", hex: "#d9f0c2" },
      { name: "MANZANA", hex: "#78e84f" },
      { name: "ARANDANO", hex: "#abd6ed" },
      { name: "CEREZA AZUL", hex: "#2e7dba" },
      { name: "UVA", hex: "#405994" },
      { name: "CIRUELA", hex: "#c4548c" },
      { name: "NARANJA", hex: "#f56121" },
      { name: "FRAMBUESA", hex: "#db4a78" },
      { name: "AGUACATE CLARO", hex: "#cde9e4" },
      { name: "LECHOZA VERDE", hex: "#94d6da" },
      { name: "BANANA", hex: "#dad16a" },
      { name: "MORA", hex: "#afa2cf" },
      { name: "GRANADA", hex: "#801929" },
      { name: "HIGO", hex: "#737e82" },
      { name: "GUAYABA", hex: "#a26c7c" },
      { name: "FRESA", hex: "#d14d5e" },
      { name: "KIWI", hex: "#4ebe9b" },
      { name: "AGUACATE", hex: "#57b947" },
      { name: "LIMON", hex: "#f6ed46" }
    ]
  },
  {
    brand: "PRO-PLASTIC",
    line: "CAUCHO MATE",
    description: "Pintura emulsionada mate de primera calidad. Para interiores y exteriores.",
    colors: [
      { name: "BLANCO", hex: "#ffffff" },
      { name: "BLANCO DURAZNO CP-2", hex: "#fcfaf0" },
      { name: "BLANCO OSTRA", hex: "#f5f2ed" },
      { name: "BLANCO LUNA", hex: "#f7f7f2" },
      { name: "GRIS CLARO", hex: "#d6d4d1" },
      { name: "GRIS CONCRETO", hex: "#918c82" },
      { name: "DORADO CLARO", hex: "#fff5e3" },
      { name: "MARFIL", hex: "#faf0d9" },
      { name: "MARFIL RAFFIA", hex: "#faf0d9" },
      { name: "DURAZNO", hex: "#f3d3c4" },
      { name: "SALMON", hex: "#f7dec9" },
      { name: "AMARILLO CROMO", hex: "#f5994a" },
      { name: "DORADO INTENSO", hex: "#e3823b" },
      { name: "NARANJA ATARDECER", hex: "#f57842" },
      { name: "CORAL", hex: "#db4557" },
      { name: "ROJO BANDERA", hex: "#cc121c" },
      { name: "FUCSIA", hex: "#bf1a3d" },
      { name: "VINOTINTO", hex: "#822126" },
      { name: "AMARILLO LIMON", hex: "#fff705" },
      { name: "VERDE MANZANA", hex: "#61c230" },
      { name: "VERDE ESMERALDA", hex: "#08b594" },
      { name: "VERDE", hex: "#005930" },
      { name: "AZUL TURQUESA", hex: "#006687" },
      { name: "AZUL INTENSO", hex: "#408cd4" },
      { name: "AZUL BANDERA", hex: "#125999" },
      { name: "AZUL CUARZO", hex: "#1a3d69" },
      { name: "ATLANTICO", hex: "#293673" },
      { name: "VIOLETA", hex: "#382e66" },
      { name: "PURPURA", hex: "#4a2947" },
      { name: "TERRACOTA", hex: "#753026" },
      { name: "CAFE OSCURO", hex: "#3d2921" },
      { name: "NEGRO", hex: "#000000" },
      { name: "GREIGE ORIGINAL", hex: "#a09b8d" },
      { name: "GREIGE NEUTRAL", hex: "#86806e" },
      { name: "GREIGE SUPERIOR", hex: "#847b6a" }
    ]
  },
  {
    brand: "PRO-PLASTIC",
    line: "SATINADO",
    description: "Pintura emulsionada semi brillo de primera calidad. Lavable, fácil remoción de manchas.",
    colors: [
      { name: "BLANCO SP-1", hex: "#ffffff" },
      { name: "BLANCO DURAZNO SP-2", hex: "#fcfaf0" },
      { name: "BLANCO OSTRA SP-3", hex: "#f5f2ed" },
      { name: "BLANCO LUNA SP-4", hex: "#f7f7f2" },
      { name: "BLANCO LINO SP-5", hex: "#ccccc7" },
      { name: "MARFIL SUAVE SP-6", hex: "#faf0e0" },
      { name: "MARFIL SP-7", hex: "#ede3cc" },
      { name: "MARFIL RAFIA SP-8", hex: "#edd9bf" },
      { name: "MELOCOTON SP-9", hex: "#fcede3" },
      { name: "BLANCO ROSA", hex: "#faebed" },
      { name: "VERDE CLARO", hex: "#a3ebd4" },
      { name: "VERDE PISTACHO", hex: "#cfcc8f" },
      { name: "ORQUÍDEA", hex: "#b3a8d9" },
      { name: "AZUL CLARO", hex: "#b8def2" },
      { name: "AZUL INTENSO", hex: "#00408f" },
      { name: "NARANJA ORIENTAL", hex: "#ed7d29" },
      { name: "FUCSIA SP-17", hex: "#c14970" },
      { name: "VIOLETA", hex: "#6b2659" },
      { name: "VINOTINTO SP-19", hex: "#700003" },
      { name: "CAFÉ SP-19", hex: "#322b29" }
    ]
  },
  {
    brand: "PRO-PLASTIC",
    line: "ESMALTE",
    description: "Elaborado con resinas alquídicas. Protección para estructuras de hierro y acero. Excelente brillo.",
    colors: [
      { name: "BLANCO BRILLANTES EP-1", hex: "#fffffc" },
      { name: "BLANCO MATE EP-2", hex: "#fffffc" },
      { name: "BLANCO SATINADO EP-3", hex: "#fffffc" },
      { name: "BLANCO OSTRA EP-4", hex: "#f2ede3" },
      { name: "MARFIL CLARO EP-5", hex: "#faf0d6" },
      { name: "MARFIL ORIENTAL EP-6", hex: "#debf8f" },
      { name: "AMARILLO BANDERA EP-7", hex: "#f2ad21" },
      { name: "AMARILLO CATERPILLAR", hex: "#c78012" },
      { name: "CANELA ORIENTAL", hex: "#ccb5a6" },
      { name: "CASTAÑO", hex: "#40261a" },
      { name: "CAOBA", hex: "#4f211a" },
      { name: "NARANJA CLARO", hex: "#ed4a1f" },
      { name: "NARANJA", hex: "#ff3600" },
      { name: "ROJO", hex: "#bf0303" },
      { name: "AZUL CELESTE", hex: "#63b8bf" },
      { name: "AZUL CARIBE", hex: "#4fa1a8" },
      { name: "AZUL ALEGRIA", hex: "#0f8799" },
      { name: "AZUL OCEANO", hex: "#0a7a9e" },
      { name: "AZUL COLONIAL", hex: "#123b69" },
      { name: "TURQUESA", hex: "#6bab94" },
      { name: "VERDE MANZANA EP-21", hex: "#30a12b" },
      { name: "VERDE TILO", hex: "#4a7530" },
      { name: "VERDE EP-23", hex: "#0a5c36" },
      { name: "VIOLETA", hex: "#a89ead" },
      { name: "GRIS SUAVE", hex: "#a1a19c" },
      { name: "GRIS OSCURO", hex: "#5c615c" },
      { name: "NEGRO BRILLANTE EP-27", hex: "#000000" },
      { name: "NEGRO MATE", hex: "#000000" },
      { name: "NEGRO SATINADO", hex: "#000000" }
    ]
  },
  {
    brand: "TOTAL",
    line: "CAUCHO MATE",
    colors: [
      { name: "MORADO UVA", hex: "#9584ec" },
      { name: "GRIS CATATUMBO", hex: "#919fac" },
      { name: "AMARILLO SOL", hex: "#f6d35f" },
      { name: "NARANJA FUEGO", hex: "#fea563" },
      { name: "VERDE LUMINOSO", hex: "#97f07a" },
      { name: "AZUL CARIBE", hex: "#4ebafb" },
      { name: "FUCSIA INTENSO", hex: "#ff89c9" },
      { name: "BLANCO", hex: "#ffffff" },
      { name: "CREMA PASTEL", hex: "#f6eee1" },
      { name: "VERDE SUAVE", hex: "#d1f1da" },
      { name: "AZUL CIELO", hex: "#d0eff1" },
      { name: "GRIS NIEBLA", hex: "#d6d9e2" }
    ]
  },
  {
    brand: "GALA",
    line: "CAUCHO MATE",
    colors: [
      { name: "BLANCO", hex: "#ffffff" },
      { name: "PORCELANA", hex: "#fffffb" },
      { name: "MARFIL SUAVE", hex: "#f5e8c5" },
      { name: "GRIS PERLA", hex: "#c4bfbb" },
      { name: "ARENA DORADA", hex: "#d2976d" },
      { name: "LADRILLO", hex: "#aa6659" },
      { name: "GRIS PARDO", hex: "#7a6c69" },
      { name: "GRIS CONCRETO", hex: "#706d66" },
      { name: "VERDE PRADO", hex: "#1c6753" },
      { name: "AZUL INTENSO", hex: "#235588" },
      { name: "ROSA VINTAGE", hex: "#9b787f" },
      { name: "GRIS ACERO", hex: "#5e717f" }
    ]
  },
  {
    brand: "GALA",
    line: "SEDA",
    colors: [
      { name: "BLANCO", hex: "#ffffff" },
      { name: "MARFIL", hex: "#fbf4d8" },
      { name: "VERDE MATCHA", hex: "#d7dbc0" },
      { name: "OSTRA CLARO", hex: "#e0e1d9" },
      { name: "BEIGE ALONDRA", hex: "#afa29a" },
      { name: "ROSA DELICADO", hex: "#c9acae" },
      { name: "LILA GREY", hex: "#aba0a4" },
      { name: "GRIS SUTIL", hex: "#b0afab" },
      { name: "AZUL SUEÑO", hex: "#91b8d9" }
    ]
  },
  {
    brand: "MAXIMA",
    line: "CAUCHO",
    colors: [
      { name: "BLANCO", hex: "#ffffff" },
      { name: "OSTRA CLARO", hex: "#ddd7c7" },
      { name: "CHAMPAÑA", hex: "#fdedd6" },
      { name: "MARFIL", hex: "#feeaaf" },
      { name: "CAFE CLARO", hex: "#8c706d" },
      { name: "AMARILLO TURPIAL", hex: "#f5be4d" },
      { name: "NARANJA ATARDECER", hex: "#e97d3f" },
      { name: "FUCSIA PRIMAVERA", hex: "#d8486c" },
      { name: "MAGENTA", hex: "#8e5b84" },
      { name: "AZUL PROFUNDO", hex: "#1b629a" },
      { name: "AZUL MOCHIMA", hex: "#458cac" },
      { name: "TURQUESA", hex: "#77c8c2" },
      { name: "VERDE PARAISO", hex: "#75c773" },
      { name: "VERDE BAMBU", hex: "#75a571" },
      { name: "VERDE", hex: "#4d6f56" },
      { name: "GRIS CENIZA", hex: "#576267" }
    ]
  }
];
