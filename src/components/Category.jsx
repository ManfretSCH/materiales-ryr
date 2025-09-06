import { useState } from "react";

// Imágenes relacionadas a cada categoría (rutas relativas a /public)
const categoryImages = {
  HERRAMIENTAS: [
    "/productos/herramienta01.jpeg",
    "/productos/herramienta02.jpeg",
    "/productos/herramienta03.jpeg",
    "/productos/herramienta04.jpeg",
    "/productos/herramienta05.jpeg",
    "/productos/herramienta06.jpeg",
    "/productos/herramienta07.jpeg",
    "/productos/herramienta08.jpeg",
    "/productos/herramienta09.jpeg",
    "/productos/herramienta10.jpeg"
  ],
  MADERA: [
    "/productos/madera01.jpeg",
    "/productos/madera02.jpeg",
    "/productos/madera03.jpeg",
    "/productos/madera04.jpeg",
    "/productos/madera05.jpeg",
    "/productos/madera06.jpeg",
    "/productos/madera07.jpeg",
    "/productos/madera08.jpeg",
    "/productos/madera09.jpeg",
    "/productos/madera10.jpeg"
  ],
  LADRILLO: [
    "/productos/ladrillo01.jpeg",
    "/productos/ladrillo02.jpeg",
    "/productos/ladrillo03.jpeg",
    "/productos/ladrillo04.jpeg",
    "/productos/ladrillo05.jpeg",
    "/productos/ladrillo06.jpeg",
    "/productos/ladrillo07.jpeg",
    "/productos/ladrillo08.jpeg",
    "/productos/ladrillo09.jpeg",
    "/productos/ladrillo10.jpeg"
  ]
};

const categories = [
  {
    title: "HERRAMIENTAS",
    subtitle: "Más información",
    image: "/img/herramienta.jpg",
    colSpan: "col-span-2 row-span-2"
  },
  {
    title: "MADERA",
    subtitle: "Más información",
    image: "/img/madera.jpg",
    colSpan: "col-span-2"
  },
  {
    title: "LADRILLO",
    subtitle: "Más información",
    image: "/img/ladrillo.jpg",
    colSpan: "col-span-2"
  }
];

export default function ShopByCategory() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const openModal = (cat) => {
    setSelectedCategory(cat);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCategory(null);
  };

  return (
    <section className="max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Categorías principales</h2>
      </div>

      <div className="grid grid-cols-4 grid-rows-2 gap-6">
        {categories.map((cat, index) => (
          <button
            key={index}
            className={`relative rounded-xl overflow-hidden ${cat.colSpan} focus:outline-none`}
            onClick={() => openModal(cat)}
            style={{ cursor: "pointer" }}
            aria-label={`Ver productos de ${cat.title}`}
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
          </button>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && selectedCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6 relative animate-fade-in">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-2xl text-[#ffb300] hover:text-[#263238] font-bold"
              aria-label="Cerrar"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-[#263238] text-center">
              {selectedCategory.title}
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {(categoryImages[selectedCategory.title] || []).map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${selectedCategory.title} ${idx + 1}`}
                  className="w-40 h-40 object-cover rounded-lg border"
                />
              ))}
            </div>
            <div className="mt-4 text-center text-[#37474f]">
              <p>
                Aquí puedes ver algunos de nuestros productos de la categoría <b>{selectedCategory.title}</b>.
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Animación simple para el modal */}
      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.3s;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95);}
          to { opacity: 1; transform: scale(1);}
        }
      `}</style>
    </section>
  );
}