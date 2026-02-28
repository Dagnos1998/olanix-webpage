import Link from "next/link";
import { products } from "../../mocks/products";

const PAGE_SIZE = 9;

export default async function ProductosPage({ searchParams }) {
  const sp = await searchParams;
  const page = Number(sp?.page ?? 1);

  const totalPages = Math.ceil(products.length / PAGE_SIZE);
  const safePage = Math.min(Math.max(page, 1), totalPages);

  const start = (safePage - 1) * PAGE_SIZE;
  const current = products.slice(start, start + PAGE_SIZE);

  return (
    <main className="w-full bg-white min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-12">

        <h1 className="text-4xl font-extrabold text-slate-900">Nuestros productos</h1>
        <p className="mt-3 text-slate-600">
          Modelos diseñados para una instalación rápida, limpia y sin perforaciones.
        </p>

        {/* Grid 3x3 */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {current.map((p) => (
            <Link
              key={p.id}
              href={`/productos/${p.slug}`}
              className="min-w-[85vw] md:min-w-[320px] overflow-hidden rounded-2xl hover:shadow-sm"
            >
              <div className="h-72 overflow-hidden">
                <img
                  src={p.images?.[0]}
                  alt={p.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="bg-red-600 flex items-center px-4 py-3 min-h-[64px]">
                <span className="text-white font-semibold text-sm">{p.name}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Paginado */}
        <div className="mt-14 flex justify-center gap-3">
          {Array.from({ length: totalPages }).map((_, idx) => {
            const n = idx + 1;
            const active = n === safePage;

            return (
              <Link
                key={n}
                href={`/productos?page=${n}`}
                className={`h-9 w-9 rounded-full flex items-center justify-center text-sm font-semibold border
                  ${
                    active
                      ? "bg-slate-900 text-white border-slate-900"
                      : "bg-white text-slate-900 border-slate-300 hover:bg-slate-50"
                  }`}
              >
                {n}
              </Link>
            );
          })}
        </div>

      </div>
    </main>
  );
}