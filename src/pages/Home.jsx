import { useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      
      {/* Imagen de fondo del hero */}
      <div className="relative w-full h-screen bg-gradient-to-b from-black/40 to-black/60"
        style={{
          backgroundImage: "url(/img/header_main.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Materiales RyR
            </h1>
            <p className="text-xl md:text-2xl mb-8 drop-shadow max-w-3xl">
              Todo para tu construcción y proyectos. Más de 20 años construyendo confianza.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate("/categorias")}
                className="bg-[#ffb300] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#ff8f00] transition-colors"
              >
                Ver Productos
              </button>
              <button 
                onClick={() => navigate("/contacto")}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#263238] transition-colors"
              >
                Contáctanos
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="bg-[#f5f5f5] py-16">
        {/* Por qué elegirnos */}
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#263238]">¿Por qué elegir Materiales RyR?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-[#ffb300] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="bi bi-people text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#263238]">Atención Familiar</h3>
              <p className="text-[#37474f]">Más de 5 años sirviendo a la comunidad con el trato personalizado que solo un negocio familiar puede ofrecer.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-[#ffb300] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="bi bi-award text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#263238]">Calidad Garantizada</h3>
              <p className="text-[#37474f]">Trabajamos solo con las mejores marcas y ofrecemos garantía en todos nuestros productos.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-[#ffb300] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="bi bi-lightning text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#263238]">Servicio Rápido</h3>
              <p className="text-[#37474f]">Entrega inmediata en stock, servicio a domicilio y asesoría técnica especializada.</p>
            </div>
          </div>
        </section>

        {/* Productos destacados */}
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-6 text-[#263238]">Productos Destacados</h2>
            <p className="text-lg text-[#37474f] mb-8 max-w-3xl mx-auto">
              Contamos con herramientas, materiales de construcción, madera y mucho más. 
              Explora nuestro catálogo completo.
            </p>
            <button 
              onClick={() => navigate("/categorias")}
              className="bg-[#ffb300] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#ff8f00] transition-colors"
            >
              Ver Catálogo Completo
            </button>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-r from-[#ffb300] to-[#ff8f00] rounded-2xl shadow-lg p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">¿Tienes un proyecto en mente?</h2>
            <p className="text-xl mb-6">Consulta con nuestros expertos y encuentra todo lo que necesitas</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/5950982619263?text=Hola,%20necesito%20asesoría%20para%20mi%20proyecto"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#ffb300] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Consultar por WhatsApp
              </a>
              <button 
                onClick={() => navigate("/contacto")}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-[#ffb300] transition-colors"
              >
                Ver ubicación
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}