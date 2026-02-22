/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#57bc63",     // rojo provisional
          dark: "#229a42",    // azul oscuro
          light: "#19c82a",   // fondo suave
        },
      },
      borderRadius: {
        card: "20px",
      },
      boxShadow: {
        soft: "0 15px 40px rgba(2, 6, 23, 0.08)",
      },
    },
  },
  plugins: [],
};