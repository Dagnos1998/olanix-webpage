const phone = "51999999999";

function waLink(productName) {
  const text = encodeURIComponent(
    `Hola, quiero hacer un pedido del producto: ${productName}`
  );
  return `https://wa.me/${phone}?text=${text}`;
}

export const products = [
  {
    id: "1",
    slug: "tapa-registro-40x40",
    name: "Tapa Registro 40x40",
    summary: "Instalación rápida sin perforaciones.",
    description:
      "Diseñada para instalaciones limpias y eficientes gracias a su sistema adhesivo avanzado.",
    faqs: [
      { q: "¿Cómo se instala?", a: "Se instala mediante sistema adhesivo sin perforaciones." },
      { q: "¿En qué superficies funciona?", a: "Funciona en concreto, cerámica y superficies planas." },
      { q: "¿Qué garantía tiene?", a: "Garantía de 1 año por defectos de fabricación." },
    ],
    images: [
      "/resources/01-14x14_10x10/1-CERRADO .png",
      "/resources/01-14x14_10x10/2-ABIERTO.png",
      "/resources/01-14x14_10x10/3-TRAS.png",
      "/resources/01-14x14_10x10/4-PARED.png"
    ],
    tags: ["interior", "adhesivo"],
    orderUrl: waLink("Tapa Registro 40x40"),
  },

  {
    id: "2",
    slug: "tapa-registro-50x50",
    name: "Tapa Registro 50x50",
    summary: "Mayor resistencia y cobertura.",
    description:
      "Modelo reforzado ideal para zonas de alto tránsito y uso continuo.",
    faqs: [
      { q: "¿Soporta peso?", a: "Sí, soporta tránsito peatonal constante." },
      { q: "¿Es resistente al agua?", a: "Sí, es resistente a humedad." },
      { q: "¿Tiene mantenimiento?", a: "No requiere mantenimiento especial." },
    ],
    images: [
      "/resources/02-20X20_15X15/p2-main.png",
      "/resources/02-20X20_15X15/p2-1.png",
      "/resources/02-20X20_15X15/p2-2.png",
    ],
    tags: ["exterior", "premium"],
    orderUrl: waLink("Tapa Registro 50x50"),
  },

  {
    id: "3",
    slug: "tapa-registro-industrial",
    name: "Tapa Registro Industrial",
    summary: "Solución para uso industrial.",
    description:
      "Diseñada para aplicaciones industriales con máxima durabilidad.",
    faqs: [
      { q: "¿Uso industrial?", a: "Sí, es ideal para almacenes y fábricas." },
      { q: "¿Resistencia química?", a: "Resistente a agentes comunes." },
      { q: "¿Certificaciones?", a: "Cumple normativas técnicas básicas." },
    ],
    images: [
      "/resources/03-20X25_15X20/p3-main.png",
      "/resources/03-20X25_15X20/p3-1.png",
      "/resources/03-20X25_15X20/p3-2.png",
    ],
    tags: ["industrial"],
    orderUrl: waLink("Tapa Registro Industrial"),
  },

  {
    id: "4",
    slug: "tapa-registro-compacta",
    name: "Tapa Registro Compacta",
    summary: "Diseño discreto y elegante.",
    description:
      "Modelo compacto ideal para espacios reducidos y acabados finos.",
    faqs: [
      { q: "¿Instalación rápida?", a: "Sí, en menos de 20 minutos." },
      { q: "¿Acabados disponibles?", a: "Disponible en varios colores." },
      { q: "¿Durabilidad?", a: "Alta durabilidad estructural." },
    ],
    images: ["/resources/04-20X31_15X26/p4-main.png"],
    tags: ["interior"],
    orderUrl: waLink("Tapa Registro Compacta"),
  },

  {
    id: "5",
    slug: "tapa-registro-premium",
    name: "Tapa Registro Premium",
    summary: "Máxima calidad y acabado.",
    description:
      "Modelo premium con materiales de alto estándar y diseño moderno.",
    faqs: [
      { q: "¿Incluye accesorios?", a: "Sí, incluye kit básico." },
      { q: "¿Es desmontable?", a: "Sí, fácilmente desmontable." },
      { q: "¿Uso recomendado?", a: "Uso residencial y comercial." },
    ],
    images: ["/resources/05-25X25_20X20/p5-main.png"],
    tags: ["premium"],
    orderUrl: waLink("Tapa Registro Premium"),
  },

  // ----------- AGREGO 10 MÁS PARA LLEGAR A 15 ------------

  {
    id: "6",
    slug: "modelo-6",
    name: "Modelo 6",
    summary: "Resumen del producto 6.",
    description: "Descripción del producto 6.",
    faqs: [
      { q: "Pregunta 1", a: "Respuesta 1" },
      { q: "Pregunta 2", a: "Respuesta 2" },
      { q: "Pregunta 3", a: "Respuesta 3" },
    ],
    images: ["/resources/06-25X30_20X25/p6-main.png"],
    tags: ["adhesivo"],
    orderUrl: waLink("Modelo 6"),
  },

  {
    id: "7",
    slug: "modelo-7",
    name: "Modelo 7",
    summary: "Resumen del producto 7.",
    description: "Descripción del producto 7.",
    faqs: [
      { q: "Pregunta 1", a: "Respuesta 1" },
      { q: "Pregunta 2", a: "Respuesta 2" },
      { q: "Pregunta 3", a: "Respuesta 3" },
    ],
    images: ["/resources/07-25x45_20x40/p7-main.png"],
    tags: ["interior"],
    orderUrl: waLink("Modelo 7"),
  },

  {
    id: "8",
    slug: "modelo-8",
    name: "Modelo 8",
    summary: "Resumen del producto 8.",
    description: "Descripción del producto 8.",
    faqs: [
      { q: "Pregunta 1", a: "Respuesta 1" },
      { q: "Pregunta 2", a: "Respuesta 2" },
      { q: "Pregunta 3", a: "Respuesta 3" },
    ],
    images: ["/resources/08-30x40_24x34/p8-main.png"],
    tags: ["industrial"],
    orderUrl: waLink("Modelo 8"),
  },

  {
    id: "9",
    slug: "modelo-9",
    name: "Modelo 9",
    summary: "Resumen del producto 9.",
    description: "Descripción del producto 9.",
    faqs: [
      { q: "Pregunta 1", a: "Respuesta 1" },
      { q: "Pregunta 2", a: "Respuesta 2" },
      { q: "Pregunta 3", a: "Respuesta 3" },
    ],
    images: ["/resources/09-31X31_25X25/p9-main.png"],
    tags: ["premium"],
    orderUrl: waLink("Modelo 9"),
  },

  {
    id: "10",
    slug: "modelo-10",
    name: "Modelo 10",
    summary: "Resumen del producto 10.",
    description: "Descripción del producto 10.",
    faqs: [
      { q: "Pregunta 1", a: "Respuesta 1" },
      { q: "Pregunta 2", a: "Respuesta 2" },
      { q: "Pregunta 3", a: "Respuesta 3" },
    ],
    images: ["/resources/p10-main.png"],
    tags: ["adhesivo"],
    orderUrl: waLink("Modelo 10"),
  },

  {
    id: "11",
    slug: "modelo-11",
    name: "Modelo 11",
    summary: "Resumen del producto 11.",
    description: "Descripción del producto 11.",
    faqs: [
      { q: "Pregunta 1", a: "Respuesta 1" },
      { q: "Pregunta 2", a: "Respuesta 2" },
      { q: "Pregunta 3", a: "Respuesta 3" },
    ],
    images: ["/resources/p11-main.png"],
    tags: ["interior"],
    orderUrl: waLink("Modelo 11"),
  },

  {
    id: "12",
    slug: "modelo-12",
    name: "Modelo 12",
    summary: "Resumen del producto 12.",
    description: "Descripción del producto 12.",
    faqs: [
      { q: "Pregunta 1", a: "Respuesta 1" },
      { q: "Pregunta 2", a: "Respuesta 2" },
      { q: "Pregunta 3", a: "Respuesta 3" },
    ],
    images: ["/resources/p12-main.png"],
    tags: ["premium"],
    orderUrl: waLink("Modelo 12"),
  },

  {
    id: "13",
    slug: "modelo-13",
    name: "Modelo 13",
    summary: "Resumen del producto 13.",
    description: "Descripción del producto 13.",
    faqs: [
      { q: "Pregunta 1", a: "Respuesta 1" },
      { q: "Pregunta 2", a: "Respuesta 2" },
      { q: "Pregunta 3", a: "Respuesta 3" },
    ],
    images: ["/resources/p13-main.png"],
    tags: ["industrial"],
    orderUrl: waLink("Modelo 13"),
  },

  {
    id: "14",
    slug: "modelo-14",
    name: "Modelo 14",
    summary: "Resumen del producto 14.",
    description: "Descripción del producto 14.",
    faqs: [
      { q: "Pregunta 1", a: "Respuesta 1" },
      { q: "Pregunta 2", a: "Respuesta 2" },
      { q: "Pregunta 3", a: "Respuesta 3" },
    ],
    images: ["/resources/p14-main.png"],
    tags: ["adhesivo"],
    orderUrl: waLink("Modelo 14"),
  },

  {
    id: "15",
    slug: "modelo-15",
    name: "Modelo 15",
    summary: "Resumen del producto 15.",
    description: "Descripción del producto 15.",
    faqs: [
      { q: "Pregunta 1", a: "Respuesta 1" },
      { q: "Pregunta 2", a: "Respuesta 2" },
      { q: "Pregunta 3", a: "Respuesta 3" },
    ],
    images: ["/resources/p15-main.png"],
    tags: ["exterior"],
    orderUrl: waLink("Modelo 15"),
  },
];