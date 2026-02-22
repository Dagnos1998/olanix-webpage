"use client";

import { useRef } from "react";
import Link from "next/link";

export default function ProductsCarousel({ items = [] }) {
  const ref = useRef(null);

  const scrollByCards = (dir) => {
    if (!ref.current) return;
    const amount = 360; // ajusta si quieres más/menos
    ref.current.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Botones */}
      <button
        type="button"
        onClick={() => scrollByCards(-1)}
        className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full border bg-white shadow"
        aria-label="Anterior"
      >
        ‹
      </button>

      <button
        type="button"
        onClick={() => scrollByCards(1)}
        className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full border bg-white shadow"
        aria-label="Siguiente"
      >
        ›
      </button>

      {/* Carrusel */}
      <div
        ref={ref}
        className="flex gap-6 overflow-x-auto scroll-smooth pb-2"
        style={{ scrollbarWidth: "none" }}
      >
        {/* ocultar scrollbar en webkit */}
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {items.map((p) => (
          <Link
            key={p.id}
            href={`/productos/${p.slug}`}
            className="min-w-[280px] md:min-w-[320px] overflow-hidden rounded-2xl border border-slate-300 bg-white hover:shadow-sm"
          >
            <div className="h-72 bg-white overflow-hidden flex items-center justify-center">
              <img
                src={p.images?.[0] ?? "/resources/p1-main.png"}
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
    </div>
  );
}