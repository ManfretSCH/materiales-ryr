import { useState } from "react";

// Imágenes relacionadas a cada categoría (rutas relativas a /public)
const categoryImages = {
  HERRAMIENTAS: [
    "/materiales-ryr/img/productos/herramienta01.jpeg",
    "/materiales-ryr/img/productos/herramienta02.jpeg",
    "/materiales-ryr/img/productos/herramienta03.jpeg",
    "/materiales-ryr/img/productos/herramienta04.jpeg",
    "/materiales-ryr/img/productos/herramienta05.jpeg",
    "/materiales-ryr/img/productos/herramienta06.jpeg",
    "/materiales-ryr/img/productos/herramienta07.jpeg",
    "/materiales-ryr/img/productos/herramienta08.jpeg",
    "/materiales-ryr/img/productos/herramienta09.jpeg",
    "/materiales-ryr/img/productos/herramienta10.jpeg"
  ],
  MADERA: [
    "/materiales-ryr/img/productos/madera01.jpeg",
    "/materiales-ryr/img/productos/madera02.jpeg",
    "/materiales-ryr/img/productos/madera03.jpeg",
    "/materiales-ryr/img/productos/madera04.jpeg",
    "/materiales-ryr/img/productos/madera05.jpeg",
    "/materiales-ryr/img/productos/madera06.jpeg",
    "/materiales-ryr/img/productos/madera07.jpeg",
    "/materiales-ryr/img/productos/madera08.jpeg",
    "/materiales-ryr/img/productos/madera09.jpeg",
    "/materiales-ryr/img/productos/madera10.jpeg"
  ],
  LADRILLO: [
    "/materiales-ryr/img/productos/ladrillo01.jpeg",
    "/materiales-ryr/img/productos/ladrillo02.jpeg",
    "/materiales-ryr/img/productos/ladrillo03.jpeg",
    "/materiales-ryr/img/productos/ladrillo04.jpeg",
    "/materiales-ryr/img/productos/ladrillo05.jpeg",
    "/materiales-ryr/img/productos/ladrillo06.jpeg",
    "/materiales-ryr/img/productos/ladrillo07.jpeg",
    "/materiales-ryr/img/productos/ladrillo08.jpeg",
    "/materiales-ryr/img/productos/ladrillo09.jpeg",
    "/materiales-ryr/img/productos/ladrillo10.jpeg"
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
    // Evita scroll en el fondo cuando el modal está abierto
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCategory(null);
    document.body.style.overflow = "";
  };

  return (
    <section className="max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Categorías principales</h2>
      </div>

      <div className="grid grid-cols-4 grid-rows-2 gap-6 max-md:grid-cols-2 max-md:grid-rows-3">
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
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 p-4 sm:p-6 relative animate-fade-in max-h-[90vh] overflow-y-auto">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-3xl sm:text-2xl text-[#ffb300] hover:text-[#263238] font-bold z-10"
              aria-label="Cerrar"
              style={{ lineHeight: "1" }}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-[#263238] text-center">
              {selectedCategory.title}
            </h2>
            <div className="flex flex-wrap gap-4 justify-center max-sm:flex-col max-sm:items-center">
              {(categoryImages[selectedCategory.title] || []).map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${selectedCategory.title} ${idx + 1}`}
                  className="w-40 h-40 object-cover rounded-lg border max-sm:w-64 max-sm:h-40"
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
        @media (max-width: 640px) {
          .max-sm\\:flex-col { flex-direction: column !important; }
          .max-sm\\:items-center { align-items: center !important; }
          .max-sm\\:w-64 { width: 16rem !important; }
          .max-sm\\:h-40 { height: 10rem !important; }
        }
      `}</style>
    </section>
  );
}