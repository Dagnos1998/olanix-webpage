"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

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

export default function ProductDetailClient({ product, related }) {
  const [imgIndex, setImgIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState(-1);

  const mainImg = product.images?.[imgIndex] ?? product.images?.[0];

  return (
    <>
      <div className="grid gap-10 md:grid-cols-2">
        {/* Izquierda: imagen grande + thumbs */}
        <div>
          <div className="h-[420px] rounded-2xl overflow-hidden">
            {/* Placeholder visual si aún no usas next/image */}
            {/* Cuando quieras, lo cambiamos por <Image /> */}
            <img
                src={mainImg}
                alt={product.name}
                className="h-full w-full object-contain"
                />
          </div>

          <div className="mt-4 flex gap-4 justify-center">
            {(product.images ?? []).slice(0, 3).map((img, i) => (
                <button
                key={img + i}
                type="button"
                onClick={() => setImgIndex(i)}
                className={`h-24 w-24 rounded-xl border overflow-hidden ${
                    imgIndex === i ? "border-slate-900" : "border-slate-300"
                }`}
                aria-label={`Imagen ${i + 1}`}
                >
                <img
                    src={img}
                    alt={`${product.name} ${i + 1}`}
                    className="h-full w-full object-contain"
                />
                </button>
            ))}
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
        </div>
      </div>

      {/* Relacionados */}
      <section className="mt-20">
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
              <div className="h-72 overflow-hidden">
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