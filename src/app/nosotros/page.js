import Image from "next/image";
import { BadgeCheck, MapPin, HandshakeIcon } from "lucide-react";
export default function NosotrosPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <section className="w-full bg-[#F3F6FA]">
              <div className="mx-auto max-w-6xl px-6 py-20">
                {/* 2 (parte superior): izquierda título, derecha palabras grandes */}
                <div className="grid gap-10 md:grid-cols-2 md:items-start">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/resources/logo.png"
                      alt="Olanix"
                      width={65}
                      height={65}
                      className="object-contain"
                    />
                    <p className="font-bold tracking-wide text-slate-900">
                      EN CIFRAS
                    </p>
                  </div>
      
                  <div className="leading-none">
                    <p className="text-3xl md:text-6xl font-light text-slate-900">
                      Calidad
                    </p>
                    <p className="mt-4 text-3xl md:text-6xl font-light text-slate-300">
                      Transparencia
                    </p>
                    <p className="mt-4 text-3xl md:text-6xl font-light text-slate-300">
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
    </main>
  );
}

