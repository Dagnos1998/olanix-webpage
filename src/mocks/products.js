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
    slug: "tapa-registro-14x14",
    name: "TAPA DE REGISTRO CUADRADA (14X14CM EXT/10X10CM INT)",
    summary: "TAPA DE REGISTRO CUADRADA (14X14CM EXT/10X10CM INT)",
    description:
      "TAPA DE REGISTRO CUADRADA (14X14CM EXT/10X10CM INT)",
    faqs: [
      { q: "¿Cómo se instala?", a: "..." },
      { q: "¿En qué superficies funciona?", a: "..." },
      { q: "¿Qué garantía tiene?", a: "..." },
    ],
    images: [
      "/resources/01-14x14_10x10/1-CERRADO .png",
      "/resources/01-14x14_10x10/2-ABIERTO.png",
      "/resources/01-14x14_10x10/3-TRAS.png",
      "/resources/01-14x14_10x10/4-PARED.png"
    ],
    tags: ["interior", "adhesivo"],
    orderUrl: waLink("TAPA DE REGISTRO CUADRADA (14X14CM EXT/10X10CM INT)"),
  },

  {
    id: "2",
    slug: "tapa-registro-20x20",
    name: "TAPA DE REGISTRO CUADRADA (20X20CM EXT/15X15CM INT)",
    summary: "TAPA DE REGISTRO CUADRADA (20X20CM EXT/15X15CM INT)",
    description:
      "Modelo reforzado ideal para zonas de alto tránsito y uso continuo.",
    faqs: [
      { q: "¿Soporta peso?", a: "..." },
      { q: "¿Es resistente al agua?", a: "..." },
      { q: "¿Tiene mantenimiento?", a: "..." },
    ],
    images: [
      "/resources/02-20X20_15X15/1-CERRADO.png",
      "/resources/02-20X20_15X15/2-ABIERTO.png",
      "/resources/02-20X20_15X15/3-TRAS.png",
      "/resources/02-20X20_15X15/4-EN-PARED-BAÑO.png",
    ],
    tags: ["exterior", "premium"],
    orderUrl: waLink("TAPA DE REGISTRO CUADRADA (20X20CM EXT/15X15CM INT)"),
  },

  {
    id: "3",
    slug: "tapa-registro-20x25",
    name: "TAPA DE REGISTRO RECTANGULAR (20X25CM EXT/15X20CM INT)",
    summary: "TAPA DE REGISTRO RECTANGULAR (20X25CM EXT/15X20CM INT)",
    description:
      "TAPA DE REGISTRO RECTANGULAR (20X25CM EXT/15X20CM INT)",
    faqs: [
      { q: "¿Uso industrial?", a: "..." },
      { q: "¿Resistencia química?", a: "..." },
      { q: "¿Certificaciones?", a: "..." },
    ],
    images: [
      "/resources/03-20X25_15X20/01-FRENTE.png",
      "/resources/03-20X25_15X20/02-ABIERTO.png",
      "/resources/03-20X25_15X20/03-TRAS.png",
      "/resources/03-20X25_15X20/04-EN-PARED.png"
    ],
    tags: ["industrial"],
    orderUrl: waLink("TAPA DE REGISTRO RECTANGULAR (20X25CM EXT/15X20CM INT)"),
  },

  {
    id: "4",
    slug: "tapa-registro-20x31",
    name: "TAPA DE REGISTRO RECTANGULAR (20X31CM EXT/15X26CM INT)",
    summary: "TAPA DE REGISTRO RECTANGULAR (20X31CM EXT/15X26CM INT)",
    description:
      "TAPA DE REGISTRO RECTANGULAR (20X31CM EXT/15X26CM INT)",
    faqs: [
      { q: "¿Instalación rápida?", a: "..." },
      { q: "¿Acabados disponibles?", a: "..." },
      { q: "¿Durabilidad?", a: "..." },
    ],
    images: ["/resources/04-20X31_15X26/01-FRENTE.png",
      "/resources/04-20X31_15X26/02-SEPARADO.png",
      "/resources/04-20X31_15X26/03-TRAS.png",
      "/resources/04-20X31_15X26/04-PARED.png"
    ],
    tags: ["interior"],
    orderUrl: waLink("TAPA DE REGISTRO RECTANGULAR (20X31CM EXT/15X26CM INT)"),
  },

  {
    id: "5",
    slug: "tapa-registro-25x25",
    name: "TAPA DE REGISTRO CUADRADA (25X25CM EXT/20X20CM INT)",
    summary: "TAPA DE REGISTRO CUADRADA (25X25CM EXT/20X20CM INT)",
    description:
      "TAPA DE REGISTRO CUADRADA (25X25CM EXT/20X20CM INT)",
    faqs: [
      { q: "¿Incluye accesorios?", a: "..." },
      { q: "¿Es desmontable?", a: "..." },
      { q: "¿Uso recomendado?", a: "..." },
    ],
    images: ["/resources/05-25X25_20X20/01-DE-FRENTE.png",
      "/resources/05-25X25_20X20/02-SEPARADOS.png",
      "/resources/05-25X25_20X20/03-TRAS.png",
      "/resources/05-25X25_20X20/04-PARED.png"
    ],
    tags: ["premium"],
    orderUrl: waLink("TAPA DE REGISTRO CUADRADA (25X25CM EXT/20X20CM INT)"),
  },

  // ----------- AGREGO 10 MÁS PARA LLEGAR A 15 ------------

  {
    id: "6",
    slug: "tapa-registro-25x30",
    name: "TAPA DE REGISTRO RECTANGULAR (25X30CM EXT/20X25CM INT)",
    summary: "TAPA DE REGISTRO RECTANGULAR (25X30CM EXT/20X25CM INT)",
    description: "TAPA DE REGISTRO RECTANGULAR (25X30CM EXT/20X25CM INT)",
    faqs: [
      { q: "Pregunta 1", a: "Respuesta 1" },
      { q: "Pregunta 2", a: "Respuesta 2" },
      { q: "Pregunta 3", a: "Respuesta 3" },
    ],
    images: ["/resources/06-25X30_20X25/01-FRENTE.png",
      "/resources/06-25X30_20X25/02-ABIERTO.png",
      "/resources/06-25X30_20X25/03-TRAS.png",
      "/resources/06-25X30_20X25/04-PARED.png"
    ],
    tags: ["adhesivo"],
    orderUrl: waLink("TAPA DE REGISTRO RECTANGULAR (25X30CM EXT/20X25CM INT)"),
  },

  {
    id: "7",
    slug: "tapa-registro-25x45",
    name: "TAPA DE REGISTRO RECTANGULAR (25X45CM EXT/20X40CM INT)",
    summary: "TAPA DE REGISTRO RECTANGULAR (25X45CM EXT/20X40CM INT)",
    description: "TAPA DE REGISTRO RECTANGULAR (25X45CM EXT/20X40CM INT)",
    faqs: [
      { q: "Pregunta 1", a: "Respuesta 1" },
      { q: "Pregunta 2", a: "Respuesta 2" },
      { q: "Pregunta 3", a: "Respuesta 3" },
    ],
    images: ["/resources/07-25x45_20x40/01-fron.png",
      "/resources/07-25x45_20x40/02-separado.png",
      "/resources/07-25x45_20x40/03-tras.png",
      "/resources/07-25x45_20x40/04-en-casa.png"
    ],
    tags: ["interior"],
    orderUrl: waLink("TAPA DE REGISTRO RECTANGULAR (25X45CM EXT/20X40CM INT)"),
  },

  {
    id: "8",
    slug: "tapa-registro-30x40",
    name: "TAPA DE REGISTRO RECTANGULAR (30X40CM EXT/24X34CM INT)",
    summary: "TAPA DE REGISTRO RECTANGULAR (30X40CM EXT/24X34CM INT)",
    description: "TAPA DE REGISTRO RECTANGULAR (30X40CM EXT/24X34CM INT)",
    faqs: [
      { q: "Pregunta 1", a: "Respuesta 1" },
      { q: "Pregunta 2", a: "Respuesta 2" },
      { q: "Pregunta 3", a: "Respuesta 3" },
    ],
    images: ["/resources/08-30x40_24x34/01-front.png",
      "/resources/08-30x40_24x34/02-tras.png",
      "/resources/08-30x40_24x34/03-casa.png"
    ],
    tags: ["industrial"],
    orderUrl: waLink("TAPA DE REGISTRO RECTANGULAR (30X40CM EXT/24X34CM INT)"),
  },

  {
    id: "9",
    slug: "tapa-registro-31x31",
    name: "TAPA DE REGISTRO CUADRADA (31X31CM EXT/25X25CM INT)",
    summary: "TAPA DE REGISTRO CUADRADA (31X31CM EXT/25X25CM INT)",
    description: "TAPA DE REGISTRO CUADRADA (31X31CM EXT/25X25CM INT)",
    faqs: [
      { q: "Pregunta 1", a: "Respuesta 1" },
      { q: "Pregunta 2", a: "Respuesta 2" },
      { q: "Pregunta 3", a: "Respuesta 3" },
    ],
    images: ["/resources/09-31X31_25X25/01-DE-FRENTE.png",
      "/resources/09-31X31_25X25/02-SEPARADOS.png",
      "/resources/09-31X31_25X25/03-TRAS.png",
      "/resources/09-31X31_25X25/04-pared.png"      
    ],
    tags: ["premium"],
    orderUrl: waLink("TAPA DE REGISTRO CUADRADA (31X31CM EXT/25X25CM INT)"),
  }
/*,
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
  },*/
];