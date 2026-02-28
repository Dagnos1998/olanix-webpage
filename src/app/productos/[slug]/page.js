import Link from "next/link";
import { products } from "../../../mocks/products";
import ProductDetailClient from "../../../components/ProductDetailCliente";

export default async function ProductDetailPage({ params }) {
  const p = await params;
  const slug = p?.slug;

  const product = products.find(
    (x) => x.slug === slug || x.id === slug
  );

  if (!product) {
    return (
      <main className="w-full bg-white min-h-screen">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h1 className="text-2xl font-bold">Producto no encontrado</h1>
          <p className="mt-2 text-slate-600">Slug recibido: {String(slug)}</p>
          <Link href="/productos" className="mt-4 inline-block underline">
            Volver a productos
          </Link>
        </div>
      </main>
    );
  }

  const related = products
    .filter(
      (x) =>
        x.slug !== product.slug &&
        (x.tags ?? []).some((t) => (product.tags ?? []).includes(t))
    )
    .slice(0, 3);

  return (
    <main className="w-full bg-white min-h-screen">
      <div className="mx-auto max-w-6xl px-0 md:px-6 py-12">
        <ProductDetailClient product={product} related={related} />
      </div>
    </main>
  );
}