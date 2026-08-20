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
    { marca: 'CROMAS', imagen: logotipoCromas, descripcion: 'Gala & Máxima' },
  ];

  return (
    <div className="print-page flex flex-col items-center justify-between bg-[#0d0d0d] text-white min-h-screen p-8 md:p-12 text-center border-b-4 border-white/10 zebra-pattern relative z-0 box-border">
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/85 to-black/95 z-[-1]" />
      
      <div className="w-full flex flex-col items-center gap-6 z-10 pt-4">
        <div className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-white/20 bg-white flex items-center justify-center p-6 shadow-[0_10px_35px_rgba(0,0,0,0.8)] overflow-hidden">
          <img src={logotipoImportllano} alt="Importllano Logo" className="w-full h-full object-contain" />
        </div>

        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black tracking-tighter text-white uppercase italic leading-tight">
            Catálogo<br /><span className="text-white/45">de Colores</span>
          </h1>
          <div className="inline-block px-5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm">
            <p className="text-[11px] md:text-xs tracking-[0.35em] uppercase text-white/80 font-bold font-body">
              Colección Oficial 2026
            </p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-4xl z-10 my-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full">
          {tarjetas_portada.map(({ marca, imagen, descripcion }) => (
            <div
              key={marca}
              className="flex flex-col items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-md shadow-xl transition-transform"
            >
              <div className="w-full h-32 md:h-36 bg-white rounded-xl p-3 shadow-inner flex items-center justify-center overflow-hidden">
                <img
                  src={imagen}
                  alt={`Logotipo oficial de ${marca}`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="mt-3 flex flex-col items-center">
                <span className="text-xs font-black uppercase tracking-wider text-white">
                  {marca}
                </span>
                <span className="text-[9px] text-white/50 font-medium tracking-tight mt-0.5">
                  {descripcion}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full border-t border-white/10 pt-4 flex flex-col md:flex-row items-center justify-between text-white/40 text-[10px] uppercase tracking-widest z-10">
        <span>Importllano C.A.</span>
        <span>Guía de Especificación y Carta de Colores</span>
        <span>Impresión Alta Fidelidad</span>
      </div>
    </div>
  );
}

function PaginaCatalogo({ datos, indice, total_paginas }: { datos: PaintLine; indice: number; total_paginas: number }) {
  const imagen_marca = obtener_imagen_seccion(datos.brand, datos.line);

  return (
    <div className="print-page min-h-screen bg-[#0d0d0d] text-white p-8 md:p-12 lg:p-14 flex flex-col justify-between font-body box-border">
      <div>
        {/* Cabecera: Marca, Línea y Logotipo de pintura con dimensiones homogéneas */}
        <header className="border-b border-white/15 pb-6 mb-8 flex justify-between items-center gap-4">
          <div className="flex-1">
            <span className="inline-block text-[11px] font-black text-white/70 uppercase tracking-[0.25em] mb-1.5">
              {datos.brand}
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-white font-display italic tracking-tight leading-none uppercase">
              {datos.line}
            </h1>
            {datos.description && (
              <p className="text-xs md:text-sm text-white/75 leading-relaxed font-normal mt-3 max-w-2xl">
                {datos.description}
              </p>
            )}
          </div>

          <div className="flex-shrink-0">
            {imagen_marca ? (
              <div className="w-32 h-24 md:w-44 md:h-28 bg-white rounded-xl p-2.5 shadow-2xl border border-white/20 flex items-center justify-center overflow-hidden">
                <img
                  src={imagen_marca}
                  alt={`Logotipo de ${datos.brand} ${datos.line}`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ) : (
              <span className="text-white/20 font-display italic text-5xl">
                {String(indice).padStart(2, '0')}
              </span>
            )}
          </div>
        </header>

        {/* Cuadrícula de muestras de color */}
        <main className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5 md:gap-4">
          {datos.colors.map((color, i) => (
            <div
              key={i}
              className="flex flex-col p-3 rounded-lg bg-white/[0.04] border border-white/10 shadow-sm"
            >
              <div
                className="w-full h-20 md:h-24 mb-2.5 rounded-md border border-white/10 shadow-inner"
                style={{ backgroundColor: color.hex }}
              />
              <div className="mt-auto px-0.5">
                <h3 className="font-extrabold text-white text-[10.5px] uppercase leading-tight tracking-tight">
                  {color.name}
                </h3>
                {color.tone && (
                  <p className="text-[8.5px] text-white/60 font-light mt-0.5">{color.tone}</p>
                )}
                {color.code && (
                  <p className="text-[9px] text-white/45 font-mono mt-1 tracking-wider">{color.code}</p>
                )}
              </div>
            </div>
          ))}
        </main>
      </div>

      {/* Pie de página con logotipo de Importllano a la izquierda para respaldo institucional e impresión */}
      <footer className="mt-10 pt-5 border-t border-white/15 flex items-center justify-between text-white/60 text-xs">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white p-2 flex items-center justify-center shadow-2xl border-2 border-white/30 flex-shrink-0">
            <img src={logotipoImportllano} alt="Importllano" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-sm md:text-base font-black uppercase tracking-wider text-white">
              Importllano
            </span>
            <span className="text-[10px] md:text-xs uppercase tracking-widest text-white/60 font-bold">
              Distribución Exclusiva
            </span>
          </div>
        </div>

        <div className="hidden sm:flex flex-col items-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/70">
            Catálogo Oficial de Colores
          </span>
          <span className="text-[8px] uppercase tracking-widest text-white/40 font-mono mt-0.5">
            Colección 2026
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] md:text-xs font-mono tracking-widest uppercase text-white/80 bg-white/5 px-3 py-1 rounded-md border border-white/10">
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
      <div className="w-full flex flex-col md:gap-12 md:py-12 items-center">
        {/* Portada */}
        <div className="w-full max-w-[210mm] md:shadow-[0_0_50px_rgba(0,0,0,0.5)] md:rounded-sm overflow-hidden bg-[#0d0d0d] border border-white/5">
          <PaginaPortada />
        </div>

        {/* Páginas de catálogo por cada marca y línea */}
        {catalogData.map((linea_pintura, indice) => (
          <div
            key={`${linea_pintura.brand}-${linea_pintura.line}`}
            className="w-full max-w-[210mm] md:shadow-[0_0_50px_rgba(0,0,0,0.5)] md:rounded-sm overflow-hidden bg-[#0d0d0d] mt-8 md:mt-0 border border-white/5"
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
