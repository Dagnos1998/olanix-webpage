"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  const phone = "51999999999";
  const text = encodeURIComponent("Hola, quisiera informacion.");
  const wa = "https://wa.me/" + phone + "?text=" + text;

  return (
    <header className="w-full px-4 pt-4 pb-4 bg-white">
      <div className="mx-auto max-w-6xl bg-white border border-gray-200 rounded-2xl md:rounded-full px-6 py-3 shadow-soft">

        {/* Fila principal */}
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link href="/">
            <Image src="/resources/logo.png" alt="Logo" width={100} height={35} priority />
          </Link>

          {/* Nav desktop */}
          <nav className="hidden md:flex items-center gap-20 text-sm font-semibold text-gray-600">
            <Link href="/" className="hover:text-gray-900 transition-colors px-4 py-3 -my-3 rounded-full hover:bg-gray-100">
              INICIO
            </Link>
            <Link href="/productos" className="hover:text-gray-900 transition-colors px-4 py-3 -my-3 rounded-full hover:bg-gray-100">
              PRODUCTOS
            </Link>
            <Link href="/nosotros" className="hover:text-gray-900 transition-colors px-4 py-3 -my-3 rounded-full hover:bg-gray-100">
              NOSOTROS
            </Link>
          </nav>

          {/* Derecha: botón + hamburguesa */}
          <div className="flex items-center gap-3">
            <a
              href={wa}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-red-600 px-5 py-2 text-sm font-semibold text-white hover:bg-red-700 transition-colors"
            >
              CONTACTAR
            </a>

            {/* Botón hamburguesa solo en mobile */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-1"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              <span className={`block h-0.5 w-6 bg-gray-800 transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 w-6 bg-gray-800 transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-6 bg-gray-800 transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>

        </div>

        {/* Nav mobile desplegable */}
        {open && (
          <nav className="md:hidden mt-4 flex flex-col gap-1 text-sm font-semibold text-gray-600 border-t border-gray-100 pt-4">
            {[
              { label: "INICIO", href: "/" },
              { label: "PRODUCTOS", href: "/productos" },
              { label: "NOSOTROS", href: "/nosotros" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-full w-full block text-gray-600 transition-colors"
                onMouseEnter={(e) => e.currentTarget.classList.add("bg-gray-100")}
                onMouseLeave={(e) => e.currentTarget.classList.remove("bg-gray-100")}
                onTouchStart={(e) => e.currentTarget.classList.add("bg-gray-100")}
                onTouchEnd={(e) => e.currentTarget.classList.remove("bg-gray-100")}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}

      </div>
    </header>
  );
}