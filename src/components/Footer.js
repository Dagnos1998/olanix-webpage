"use client";
import Image from "next/image";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube, FaTiktok } from "react-icons/fa";

function FaqItem({ q, a, isOpen, onToggle }) {
  return (
    <div className="border-t border-gray-200 py-4">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 text-left"
      >
        <span className="font-semibold text-gray-800">{q}</span>
        <ChevronDown
          size={18}
          className={`text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-40 mt-3" : "max-h-0"
        }`}
      >
        <p className="text-sm text-gray-600">{a}</p>
      </div>
    </div>
  );
}

export default function Footer() {
  const [openIndex, setOpenIndex] = useState(-1);

  const faqs = [
    {
      q: "¿Cómo se instalan las tapas de registro OLANIX?",
      a: "La instalación es rápida y sencilla. Solo debes limpiar y secar la superficie, aplicar silicona en el perímetro, retirar la cinta doble faz y fijar la tapa. Esperar 24 horas antes de su uso.",
    },
    {
      q: "¿En qué superficies se pueden instalar?",
      a: "Pueden instalarse en paredes de concreto, drywall, mayólica, cerámica u otras superficies lisas y firmes en baños, cocinas, lavanderías o áreas técnicas.",
    },
    {
      q: "¿Qué tamaños y formatos están disponibles?",
      a: "OLANIX ofrece tapas cuadradas y rectangulares en diversas medidas, desde 14x14 cm hasta 30x40 cm, con medidas internas optimizadas para accesos técnicos.",
    },
    {
      q: "¿Las tapas se pueden retirar o volver a instalar?",
      a: "Sí. La tapa frontal puede retirarse para realizar mantenimiento. El marco queda fijo una vez instalado correctamente con silicona.",
    },
    {
      q: "¿Dónde puedo comprar productos OLANIX?",
      a: "Puedes adquirirlos en ferreterías y distribuidores autorizados. Para información actualizada, contáctanos mediante nuestras redes sociales oficiales.",
    },
    {
      q: "¿OLANIX ofrece garantía?",
      a: "Sí. Nuestros productos están fabricados con material de alto impacto y protección UV, garantizando durabilidad y resistencia bajo condiciones normales de uso.",
    },
  ];

  return (
    <footer>
      {/* 1) FAQ */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                Preguntas frecuentes
              </h2>
              <p className="mt-3 text-gray-500">
                Encuentra respuestas rápidas sobre nuestros productos y su instalación.
              </p>
            </div>

            <div className="border-b border-gray-200">
              {faqs.map((x, i) => (
                <FaqItem
                  key={x.q}
                  q={x.q}
                  a={x.a}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2) CTA */}
      <section style={{ background: "#eff1f6" }}>
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            La solución que tu proyecto necesita
          </h3>
          <p className="mt-3 text-gray-600">
            Instalación rápida, múltiples tamaños y respaldo OLANIX en todo el país.
          </p>
          <div className="mt-8">
            <Link
              href="/productos"
              className="inline-flex items-center justify-center rounded-full bg-red-600 px-7 py-3 text-sm font-semibold text-white hover:bg-red-700"
            >
              VISUALIZAR TAMAÑOS
            </Link>
          </div>
        </div>
      </section>

      {/* 3) Footer con curva integrada */}
      <section className="text-white" style={{ background: "#1D2E48" }}>

        {/* Curva roja */}
        <div className="w-full overflow-hidden" style={{ height: "120px", background: "#dc2626" }}>
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,120 C480,0 960,0 1440,120 L1440,120 L0,120 Z" fill="#1D2E48" />
          </svg>
        </div>

        {/* Contenido */}
        <div className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-10 md:grid-cols-3 md:justify-items-center">

            {/* Columna 1 */}
            <div>
              <h4 className="font-extrabold tracking-wide uppercase text-sm">
                Innovación que se instala fácil
              </h4>
              <p className="mt-4 text-sm text-slate-300 leading-6 max-w-sm">
                Creamos soluciones prácticas, de alta calidad y fáciles de usar,
                diseñadas para optimizar procesos y elevar los estándares de la
                construcción moderna.
              </p>
              <div className="mt-6 flex gap-3">
                {[
                  { icon: <FaInstagram size={16} />, label: "Instagram" },
                  { icon: <FaFacebookF size={16} />, label: "Facebook" },
                  { icon: <FaLinkedinIn size={16} />, label: "LinkedIn" },
                  { icon: <FaYoutube size={16} />, label: "YouTube" },
                  { icon: <FaTiktok size={16} />, label: "TikTok" },
                ].map((x) => (
                  <a
                    key={x.label}
                    href="#"
                    className="h-9 w-9 rounded-md bg-slate-800 flex items-center justify-center hover:bg-slate-700"
                    aria-label={x.label}
                  >
                    {x.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Columna 2 */}
            <div>
              <h4 className="font-extrabold tracking-wide uppercase text-sm">
                OLANIX
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li><Link className="hover:text-white" href="/nosotros">NOSOTROS</Link></li>
                <li><Link className="hover:text-white" href="/productos">PRODUCTOS</Link></li>
                <li><a className="hover:text-white" href="#contacto">CONTACTO</a></li>
              </ul>
            </div>

            {/* Columna 3 */}
            <div>
              <h4 className="font-extrabold tracking-wide uppercase text-sm">
                DOCUMENTOS
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li><a className="hover:text-white" href="#">FICHAS TÉCNICAS</a></li>
                <li><a className="hover:text-white" href="#">MANUALES DE INSTALACIÓN</a></li>
              </ul>
            </div>

          </div>

          {/* Línea inferior */}
          <div className="mt-14 relative">
            {/* Línea curva flotando arriba */}
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="absolute -top-6 left-0 w-full" style={{ height: "60px" }}>
            <path d="M0,55 Q600,-20 1200,55" stroke="#334155" strokeWidth="1" fill="none" />
          </svg>

            <div className="pt-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <Image src="/resources/LogoPiePagina.png" alt="Olanix" width={80} height={28} />
              <div className="text-xs text-slate-400">
                Todos los derechos reservados Olanix Company ®
              </div>
            </div>
          </div>
        </div>

      </section>
    </footer>
  );
}