export default function Banner() {
  const text = "CALIDAD Y GARANTÍA EN UN SOLO LUGAR";
  const repeated = Array(10).fill(text);

  return (
    <div className="w-full bg-red-600 text-white text-[10px] py-2 overflow-hidden whitespace-nowrap">
      <div className="flex animate-marquee">
        {repeated.map((t, i) => (
          <span key={i} className="mx-16 font-normal tracking-widest">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}