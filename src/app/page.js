import Link from "next/link";
import ProductsCarousel from "../components/ProductCarousel";
import { products } from "../mocks/products";
import { BadgeCheck, MapPin, HandshakeIcon } from "lucide-react";

export default function HomePage() {
  return (
    
    <main>
      {/* 1) HERO (alineado a la derecha) */}
      <section className="w-full text-white relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1D2E48, #2E486F)" }}>
      {/* Línea curva decorativa */}
<svg className="pointer-events-none absolute inset-0 w-full h-full" viewBox="0 0 1440 400" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#1d2e48" />
      <stop offset="100%" stopColor="#7aa3d4" />
    </linearGradient>
  </defs>
  <path d="M-100, 250 Q500, -90 1500, 90" stroke="url(#lineGradient)" strokeWidth="1" fill="none" />
</svg>
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-24">
          <div className="flex justify-start md:justify-end">
            <div className="max-w-xl text-left">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight font-[var(--font-exo)]">
                Acceso limpio, rápido <br /> y sin perforaciones.
              </h1>

              <p className="mt-5 text-slate-200">
                Diseñadas para una instalación rápida gracias <br />a su sistema adhesivo, sin perforaciones.
              </p>

              <div className="mt-10">
                <Link
                  href="/productos"
                  className="inline-flex items-center justify-center rounded-full bg-red-600 px-7 py-3 text-sm font-semibold text-white hover:bg-red-700"
                >
                  VER TAMAÑOS DISPONIBLES
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) OLANIX EN CIFRAS */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          {/* 2 (parte superior): izquierda título, derecha palabras grandes */}
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <p className="font-bold tracking-wide text-slate-900">
                OLANIX EN CIFRAS
              </p>
            </div>

            <div className="leading-none">
              <p className="text-5xl md:text-6xl font-light text-slate-900">
                Calidad
              </p>
              <p className="mt-4 text-5xl md:text-6xl font-light text-slate-300">
                Transparencia
              </p>
              <p className="mt-4 text-5xl md:text-6xl font-light text-slate-300">
                Seguridad
              </p>
            </div>
          </div>

          {/* 2.1 (parte inferior): stats horizontales con divisores */}
          <div className="mt-16 grid gap-8 md:grid-cols-4">
            {[
              { top: "09", title: "AÑOS", desc: "De experiencia\nen el mercado" },
              { top: "+100", title: "PUNTOS", desc: "De distribución a\nnivel nacional" },
              { top: "+23", title: "REGIONES", desc: "Con presencia activa\nen el país." },
              {
                top: "",
                title: "COBERTURA\nNACIONAL",
                desc: "Disponibilidad constante\ny confiable.",
              },
            ].map((x, i) => (
              <div
                key={i}
                className={`min-h-[110px] ${
                  i !== 0 ? "md:border-l md:border-slate-300 md:pl-8" : ""
                }`}
              >
                {x.top ? (
                  <div className="text-3xl font-extrabold text-slate-900">
                    {x.top}
                  </div>
                ) : null}

                <div className="mt-2 whitespace-pre-line text-xl font-extrabold text-slate-900">
                  {x.title}
                </div>

                <p className="mt-3 whitespace-pre-line text-sm text-slate-500">
                  {x.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3) SOLUCIONES / VALORES */}
      <section className="w-full bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Soluciones prácticas diseñadas para <br />
            una instalación simple y eficiente
          </h2>

          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {[
              {
                icon: <BadgeCheck size={28} strokeWidth={1.5} className="text-slate-700" />,
                title: "CALIDAD",
                desc: "Diseñamos y distribuimos soluciones funcionales y duraderas, cuidando cada detalle para garantizar un producto confiable desde la instalación hasta el uso diario.",
              },
              {
                icon: <MapPin size={28} strokeWidth={1.5} className="text-slate-700" />,
                title: "DISPONIBILIDAD",
                desc: "Contamos con más de 100 puntos de distribución y presencia en más de 23 regiones del país, asegurando acceso rápido y constante a nuestros productos.",
              },
              {
                icon: <HandshakeIcon size={28} strokeWidth={1.5} className="text-slate-700" />,
                title: "CONFIANZA",
                desc: "Nueve años en el mercado respaldan nuestro compromiso con clientes, distribuidores y profesionales a nivel nacional.",
              },
            ].map((x) => (
              <div key={x.title}>
                <div className="h-16 w-16 rounded-xl bg-blue-100 flex items-center justify-center">
                  {x.icon}
                </div>
                <h3 className="mt-6 text-xl font-extrabold tracking-wide text-slate-900">
                  {x.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {x.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


    
      {/* 4) PRODUCTOS (carrusel) */}
      <section className="w-full bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 pb-24">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Encuentra el tamaño <br />y formato ideal.
          </h2>

          <p className="mt-4 text-slate-600">
            Modelos diseñados para una instalación rápida, limpia y sin perforaciones.
          </p>

          <div className="mt-12">
            <ProductsCarousel items={products} />
          </div>
        </div>
      </section>
    </main>

    
  );
}