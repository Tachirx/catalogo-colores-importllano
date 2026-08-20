import { catalogData, PaintLine } from './data';

import logotipoImportllano from '@/logo.jpg';
import logotipoCromas from '@/logo_cromas.png';
import logotipoPintuplast from '@/logo_pintuplast.jpg';
import logotipoProplastic from '@/logo_proplastic.jpg';
import imagenCebra from '@/CEBRA.jpg';
import imagenMaxima from '@/maxima.jpg';
import imagenGalaCaucho from '@/Gala_Caucho.png';
import imagenGalaSeda from '@/Gala_Seda.png';

interface ElementoPortada {
  marca: string;
  imagen: string;
  descripcion: string;
}

function obtener_imagen_seccion(marca: string, linea: string): string | null {
  const marca_normalizada = marca.toUpperCase();
  const linea_normalizada = linea.toUpperCase();

  if (marca_normalizada === 'CEBRA') return imagenCebra;
  if (marca_normalizada === 'PINTUPLAST') return logotipoPintuplast;
  if (marca_normalizada === 'PRO-PLASTIC') return logotipoProplastic;
  if (marca_normalizada === 'GALA' && linea_normalizada.includes('SEDA')) return imagenGalaSeda;
  if (marca_normalizada === 'GALA' && linea_normalizada.includes('CAUCHO')) return imagenGalaCaucho;
  if (marca_normalizada === 'MAXIMA') return imagenMaxima;
  if (marca_normalizada === 'CROMAS' || marca_normalizada === 'TOTAL') return logotipoCromas;
  return null;
}

function PaginaPortada() {
  const tarjetas_portada: ElementoPortada[] = [
    { marca: 'CEBRA', imagen: imagenCebra, descripcion: 'Pinturas de Calidad' },
    { marca: 'PINTUPLAST', imagen: logotipoPintuplast, descripcion: 'Acabados Sedosos' },
    { marca: 'PRO-PLASTIC', imagen: logotipoProplastic, descripcion: 'Línea Arquitectónica' },
    { marca: 'CROMAS', imagen: logotipoCromas, descripcion: 'Gala, Máxima & Total' },
  ];

  return (
    <div className="print-page w-[210mm] h-[297mm] max-h-[297mm] flex flex-col items-center justify-between bg-[#0d0d0d] text-white p-6 md:p-10 text-center border-b-4 border-white/10 zebra-pattern relative z-0 box-border overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/85 to-black/95 z-[-1]" />
      
      <div className="w-full flex flex-col items-center gap-4 z-10 pt-2">
        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-white/20 bg-white flex items-center justify-center p-5 shadow-[0_10px_35px_rgba(0,0,0,0.8)] overflow-hidden">
          <img src={logotipoImportllano} alt="Importllano Logo" className="w-full h-full object-contain" />
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black tracking-tighter text-white uppercase italic leading-tight">
            Catálogo<br /><span className="text-white/45">de Colores</span>
          </h1>
          <div className="inline-block px-4 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm">
            <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-white/80 font-bold font-body">
              Colección Oficial 2026
            </p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-3xl z-10 my-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-full">
          {tarjetas_portada.map(({ marca, imagen, descripcion }) => (
            <div
              key={marca}
              className="flex flex-col items-center justify-between p-3 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-md shadow-xl"
            >
              <div className="w-full h-24 md:h-28 bg-white rounded-xl p-2.5 shadow-inner flex items-center justify-center overflow-hidden">
                <img
                  src={imagen}
                  alt={`Logotipo oficial de ${marca}`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="mt-2 flex flex-col items-center">
                <span className="text-[11px] md:text-xs font-black uppercase tracking-wider text-white">
                  {marca}
                </span>
                <span className="text-[8.5px] text-white/50 font-medium tracking-tight mt-0.5">
                  {descripcion}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full border-t border-white/10 pt-3 flex flex-col md:flex-row items-center justify-between text-white/40 text-[9px] uppercase tracking-widest z-10">
        <span>Importllano C.A.</span>
        <span>Guía de Especificación y Carta de Colores</span>
      </div>
    </div>
  );
}

function PaginaCatalogo({ datos, indice, total_paginas }: { datos: PaintLine; indice: number; total_paginas: number }) {
  const imagen_marca = obtener_imagen_seccion(datos.brand, datos.line);
  const total_colores = datos.colors.length;

  const es_catalogo_denso = total_colores >= 25;
  const es_catalogo_medio = total_colores > 16 && total_colores < 25;

  const clase_cuadricula = es_catalogo_denso
    ? 'grid-cols-4 sm:grid-cols-5 gap-1.5 md:gap-2'
    : es_catalogo_medio
    ? 'grid-cols-3 sm:grid-cols-4 gap-2.5 md:gap-3'
    : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-3.5';

  const altura_muestra = es_catalogo_denso
    ? 'h-10 sm:h-11 mb-1'
    : es_catalogo_medio
    ? 'h-14 sm:h-16 mb-1.5'
    : 'h-16 sm:h-20 mb-2';

  const padding_tarjeta = es_catalogo_denso ? 'p-1.5' : 'p-2 md:p-2.5';

  return (
    <div className="print-page w-[210mm] h-[297mm] max-h-[297mm] bg-[#0d0d0d] text-white p-6 md:p-8 flex flex-col justify-between font-body box-border overflow-hidden">
      <div className="flex-1 flex flex-col justify-start overflow-hidden">
        {/* Cabecera: Marca, Línea y Logotipo de pintura */}
        <header className={`border-b border-white/15 ${es_catalogo_denso ? 'pb-2 mb-3' : 'pb-3 mb-4'} flex justify-between items-center gap-3 flex-shrink-0`}>
          <div className="flex-1">
            <span className="inline-block text-[9.5px] md:text-[10px] font-black text-white/70 uppercase tracking-[0.2em] mb-0.5">
              {datos.brand}
            </span>
            <h1 className={`${es_catalogo_denso ? 'text-xl md:text-3xl' : 'text-2xl md:text-4xl'} font-black text-white font-display italic tracking-tight leading-none uppercase`}>
              {datos.line}
            </h1>
            {datos.description && (
              <p className={`${es_catalogo_denso ? 'text-[10px] line-clamp-2 mt-1' : 'text-[11px] md:text-xs mt-1.5'} text-white/70 leading-snug font-normal max-w-2xl`}>
                {datos.description}
              </p>
            )}
          </div>

          <div className="flex-shrink-0">
            {imagen_marca ? (
              <div className={`${es_catalogo_denso ? 'w-24 h-16 md:w-32 md:h-20 p-1.5' : 'w-28 h-20 md:w-36 md:h-24 p-2'} bg-white rounded-xl shadow-2xl border border-white/20 flex items-center justify-center overflow-hidden`}>
                <img
                  src={imagen_marca}
                  alt={`Logotipo de ${datos.brand} ${datos.line}`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ) : (
              <span className="text-white/20 font-display italic text-4xl">
                {String(indice).padStart(2, '0')}
              </span>
            )}
          </div>
        </header>

        {/* Cuadrícula adaptativa de muestras de color */}
        <main className={`grid ${clase_cuadricula} my-auto items-stretch content-start overflow-hidden`}>
          {datos.colors.map((color, i) => (
            <div
              key={i}
              className={`flex flex-col ${padding_tarjeta} rounded-lg bg-white/[0.04] border border-white/10 shadow-sm`}
            >
              <div
                className={`w-full ${altura_muestra} rounded-md border border-white/10 shadow-inner flex-shrink-0`}
                style={{ backgroundColor: color.hex }}
              />
              <div className="mt-auto px-0.5">
                <h3 className={`font-extrabold text-white ${es_catalogo_denso ? 'text-[8.5px]' : 'text-[9.5px]'} uppercase leading-tight tracking-tight truncate`}>
                  {color.name}
                </h3>
                {color.tone && (
                  <p className="text-[7.5px] text-white/60 font-light mt-0.5 truncate">{color.tone}</p>
                )}
                {color.code && (
                  <p className="text-[8px] text-white/45 font-mono mt-0.5 tracking-wider">{color.code}</p>
                )}
              </div>
            </div>
          ))}
        </main>
      </div>

      {/* Pie de página con logotipo de Importllano a la izquierda para respaldo institucional e impresión */}
      <footer className="mt-3 pt-3 border-t border-white/15 flex items-center justify-between text-white/60 text-xs flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center shadow-xl border border-white/30 flex-shrink-0 overflow-hidden">
            <img src={logotipoImportllano} alt="Importllano" className="w-[80%] h-[80%] object-contain" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-xs md:text-sm font-black uppercase tracking-wider text-white">
              Importllano
            </span>
            <span className="text-[8.5px] md:text-[9.5px] uppercase tracking-widest text-white/60 font-bold">
              Distribución Exclusiva
            </span>
          </div>
        </div>

        <div className="hidden sm:flex flex-col items-center">
          <span className="text-[9.5px] font-bold uppercase tracking-[0.25em] text-white/70">
            Catálogo Oficial de Colores
          </span>
          <span className="text-[8px] uppercase tracking-widest text-white/40 font-mono mt-0.5">
            Colección 2026
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono tracking-widest uppercase text-white/80 bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
            Pág. {String(indice).padStart(2, '0')} / {String(total_paginas).padStart(2, '0')}
          </span>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  const total_secciones = catalogData.length;

  return (
    <div className="bg-[#0a0a0a] min-h-screen font-sans selection:bg-white selection:text-black">
      <div className="contenedor-paginas w-full flex flex-col md:gap-12 md:py-12 items-center">
        {/* Portada */}
        <div className="envoltorio-pagina w-full max-w-[210mm] md:shadow-[0_0_50px_rgba(0,0,0,0.5)] md:rounded-sm overflow-hidden bg-[#0d0d0d] border border-white/5">
          <PaginaPortada />
        </div>

        {/* Páginas de catálogo por cada marca y línea */}
        {catalogData.map((linea_pintura, indice) => (
          <div
            key={`${linea_pintura.brand}-${linea_pintura.line}`}
            className="envoltorio-pagina w-full max-w-[210mm] md:shadow-[0_0_50px_rgba(0,0,0,0.5)] md:rounded-sm overflow-hidden bg-[#0d0d0d] mt-8 md:mt-0 border border-white/5"
          >
            <PaginaCatalogo
              datos={linea_pintura}
              indice={indice + 1}
              total_paginas={total_secciones}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
