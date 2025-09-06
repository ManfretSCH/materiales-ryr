import { useState } from "react";

// Agrega aquí las imágenes relacionadas a cada categoría
const categoryImages = {
  HERRAMIENTAS: [
    "/materiales-ryr/productos/herramienta01.jpg",
    "/materiales-ryr/productos/herramienta02.jpg",
    "/materiales-ryr/productos/herramienta03.jpg",
    "/materiales-ryr/productos/herramienta04.jpg",
    "/materiales-ryr/productos/herramienta05.jpg",
    "/materiales-ryr/productos/herramienta06.jpg",
    "/materiales-ryr/productos/herramienta07.jpg",
    "/materiales-ryr/productos/herramienta08.jpg",
    "/materiales-ryr/productos/herramienta09.jpg",
    "/materiales-ryr/productos/herramienta10.jpg"

  ],
  MADERA: [
    "/materiales-ryr/productos/madera01.jpeg",
    "/materiales-ryr/productos/madera02.jpeg",
    "/materiales-ryr/productos/madera03.jpeg",
    "/materiales-ryr/productos/madera04.jpeg",
    "/materiales-ryr/productos/madera05.jpeg",
    "/materiales-ryr/productos/madera06.jpeg",
    "/materiales-ryr/productos/madera07.jpeg",
    "/materiales-ryr/productos/madera08.jpeg",
    "/materiales-ryr/productos/madera09.jpeg",
    "/materiales-ryr/productos/madera10.jpeg"

  ],
  LADRILLO: [
    "/materiales-ryr/productos/ladrillo01.jpeg",
    "/materiales-ryr/productos/ladrillo02.jpeg",
    "/materiales-ryr/productos/ladrillo03.jpeg",
    "/materiales-ryr/productos/ladrillo04.jpeg",
    "/materiales-ryr/productos/ladrillo05.jpeg",
    "/materiales-ryr/productos/ladrillo06.jpeg",
    "/materiales-ryr/productos/ladrillo07.jpeg",
    "/materiales-ryr/productos/ladrillo08.jpeg",
    "/materiales-ryr/productos/ladrillo09.jpeg",
    "/materiales-ryr/productos/ladrillo10.jpeg"
  ]
};

const categories = [
  {
    title: "HERRAMIENTAS",
    subtitle: "Más información",
    image: "/materiales-ryr/img/herramienta.jpg",
    colSpan: "col-span-2 row-span-2"
  },
  {
    title: "MADERA",
    subtitle: "Más información",
    image: "/materiales-ryr/img/madera.jpg",
    colSpan: "col-span-2"
  },
  {
    title: "LADRILLO",
    subtitle: "Más información",
    image: "/materiales-ryr/img/ladrillo.jpg",
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