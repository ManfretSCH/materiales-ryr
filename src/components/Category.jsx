
const categories = [
  {
    title: "HERRAMIENTAS",
    subtitle: "Mas informacion",
    image: "/img/herramienta.jpg", // reemplazar por la imagen real
    colSpan: "col-span-2 row-span-2"
  },
  {
    title: "MADERA",
    subtitle: "Mas informacion",
    image: "/img/madera.jpg", // reemplazar por la imagen real
    colSpan: "col-span-2"
  },
  {
    title: "LADRILLO",
    subtitle: "Mas informacion",
    image: "/img/ladrillo.jpg", // reemplazar por la imagen real
    colSpan: "col-span-2"
  }
];

export default function ShopByCategory() {
  return (
    <section className="max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Categoría principales</h2>
      </div>

      <div className="grid grid-cols-4 grid-rows-2 gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className={`relative rounded-xl overflow-hidden ${cat.colSpan}`}
          >
            <img
              src={cat.image}
              alt={cat.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-4">
              <h3 className="text-white text-lg font-semibold">{cat.title}</h3>
              <p className="text-white text-sm">{cat.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
