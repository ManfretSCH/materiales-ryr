import Category from "../components/Category.jsx";

export default function Categorias() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] pt-24">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Introducción */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#263238] mb-4">Nuestros Productos</h2>
            <p className="text-lg text-[#37474f] max-w-3xl mx-auto">
              Contamos con una amplia variedad de materiales de construcción y herramientas 
              de las mejores marcas. Explora nuestras categorías y encuentra todo lo que necesitas 
              para tu proyecto.
            </p>
          </div>

          {/* Estadísticas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-[#ffb300] mb-2">500+</div>
              <div className="text-sm text-[#37474f]">Productos disponibles</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#ffb300] mb-2">20+</div>
              <div className="text-sm text-[#37474f]">Años de experiencia</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#ffb300] mb-2">15+</div>
              <div className="text-sm text-[#37474f]">Marcas reconocidas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#ffb300] mb-2">100%</div>
              <div className="text-sm text-[#37474f]">Garantía de calidad</div>
            </div>
          </div>
        </section>

        {/* Categorías principales */}
        <Category />

        {/* Otras categorías */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mt-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-[#263238]">Otras Categorías</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "Plomería", "Electricidad", "Pinturas", "Cemento",
              "Arena y Grava", "Techos", "Pisos", "Seguridad"
            ].map((categoria, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg text-center hover:bg-gray-100 transition-colors">
                <div className="text-2xl text-[#ffb300] mb-2">
                  <i className="bi bi-tools"></i>
                </div>
                <h4 className="font-semibold text-[#263238]">{categoria}</h4>
              </div>
            ))}
          </div>
        </section>

        {/* Llamada a la acción */}
        <section className="bg-gradient-to-r from-[#ffb300] to-[#ff8f00] rounded-2xl shadow-lg p-8 mt-12 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">¿No encuentras lo que buscas?</h3>
          <p className="text-lg mb-6">Contáctanos y te ayudamos a encontrar el producto perfecto para tu proyecto</p>
          <a 
            href="https://wa.me/5950982619263?text=Hola,%20busco%20un%20producto%20específico"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#ffb300] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-block"
          >
            Consultar por WhatsApp
          </a>
        </section>
      </div>
    </div>
  );
}