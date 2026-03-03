"use client";

import { useMemo, useState, useRef } from "react";
import Link from "next/link";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

function AccordionItem({ q, a, isOpen, onToggle }) {
  return (
    <div className="border-t border-slate-200 py-4">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 text-left"
      >
        <span className="font-semibold text-slate-800">{q}</span>
        <ChevronDown
          size={18}
          className={`text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-40 mt-3" : "max-h-0"
        }`}
      >
        <p className="text-sm text-slate-600">{a}</p>
      </div>
    </div>
  );
}

function MobileImageCarousel({ images, name }) {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null); // 👈 agregar esto
  const total = images?.length ?? 0;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  // 👇 agregar estas dos funciones
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev(); // umbral de 40px
    touchStartX.current = null;
  };

  if (!total) return null;

  return (
    
    <div className="relative w-full" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <div className="w-full aspect-square rounded-2xl overflow-hidden bg-slate-100">
        <img src={images[current]} alt={`${name} ${current + 1}`} className="w-full h-full object-cover transition-opacity duration-300" />
      </div>
      {total > 1 && (
        <>
          <button type="button" onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-1.5 shadow">
            <ChevronLeft size={18} className="text-slate-700" />
          </button>
          <button type="button" onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-1.5 shadow">
            <ChevronRight size={18} className="text-slate-700" />
          </button>
          <div className="mt-3 flex justify-center gap-1.5">
            {images.map((_, i) => (
              <button key={i} type="button" onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-5 bg-slate-900" : "w-2 bg-slate-300"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function ProductDetailClient({ product, related }) {
  const [imgIndex, setImgIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState(-1);

  const mainImg = product.images?.[imgIndex] ?? product.images?.[0];

  return (
    <>
      <div className="w-full grid gap-10 md:grid-cols-2 min-w-0 px-4 md:px-0">
        {/* Izquierda: imagen grande + thumbs */}
        <div className="w-full">
          {/* Carrusel solo en móvil */}
          <div className="md:hidden">
            <MobileImageCarousel images={product.images} name={product.name} />
          </div>

          {/* Imagen grande + thumbs solo en desktop */}
          <div className="hidden md:block">
            <div className="w-full min-w-0 aspect-square md:aspect-square rounded-2xl overflow-hidden bg-slate-100">
              <img src={mainImg} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="mt-4 flex gap-3 overflow-x-auto pb-2" style={{ scrollbarWidth: "none" }}>
              {(product.images ?? []).map((img, i) => (
                <button key={img + i} type="button" onClick={() => setImgIndex(i)}
                  className={`aspect-square w-24 rounded-xl border overflow-hidden bg-white flex-shrink-0 ${imgIndex === i ? "border-slate-900" : "border-slate-300"}`}>
                  <img src={img} alt={`${product.name} ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Derecha: info + botón pedido + FAQ */}
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">{product.name}</h1>
          <p className="mt-2 text-sm text-slate-500">{product.summary}</p>

          <p className="mt-4 text-slate-700">{product.description}</p>

          <div className="mt-6">
            <a
              href={product.orderUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white hover:bg-red-700"
            >
              HACER UN PEDIDO
            </a>
          </div>

          <div className="mt-8 border-b border-slate-200">
            {(product.faqs ?? []).map((x, i) => (
              <AccordionItem
                key={x.q}
                q={x.q}
                a={x.a}
                isOpen={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
              />
            ))}
          </div>
          <div className="mt-6">
            <a
              href={product.techSheetUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 transition"
            >
              Descarga la ficha técnica
            </a>
          </div>
        </div>
      </div>

      {/* Relacionados */}
      <section className="mt-20 px-4 md:px-0">
        <h2 className="text-3xl font-extrabold text-slate-900">
          Productos relacionados
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {related.map((p) => (
            <Link
              key={p.id}
              href={`/productos/${p.slug}`}
              className="block overflow-hidden rounded-2xl hover:shadow-sm"
            >
              <div className="aspect-square overflow-hidden">
                <img
                    src={p.images?.[0]}
                    alt={p.name}
                    className="h-full w-full object-cover"
                />
                </div>

                <div className="h-16 bg-red-600 flex items-center px-4">
                <span className="text-white font-semibold text-sm">{p.name}</span>
                </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}