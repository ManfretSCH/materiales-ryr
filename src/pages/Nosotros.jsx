export default function Nosotros() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Contenido principal */}
      <main className="flex-grow max-w-5xl mx-auto px-6 py-16">
        {/* Encabezado */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Sobre Nosotros
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Una historia de esfuerzo y dedicación en materiales de construcción.
          </p>
        </section>

        {/* Presentación */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-[#ffb300] text-center">¿Quiénes somos?</h2>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <p className="text-lg leading-relaxed mb-6 text-gray-700">
              Somos <span className="font-semibold text-[#ffb300]">Ever Ramos</span> y{" "}
              <span className="font-semibold text-[#ffb300]">Erika Schroter</span>, una familia que
              decidió construir su propio camino a través del esfuerzo constante y
              la confianza en nuestros valores. Desde hace más de 5 años, nos dedicamos
              a proveer materiales de construcción de calidad a nuestra comunidad.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Para nosotros, cada cliente no es solo una venta, sino parte de una gran familia
              que construye sueños. Creemos en la unión, la disciplina y la fe como pilares que nos
              permiten avanzar juntos hacia el futuro, ayudando a otros a construir sus hogares y proyectos.
            </p>
          </div>
        </section>

        {/* Misión y Visión */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Misión */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-[#ffb300] p-6">
                <h3 className="text-2xl font-bold text-white text-center">Nuestra Misión</h3>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-[#ffb300] p-3 rounded-full">
                    <i className="bi bi-bullseye text-white text-2xl"></i>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-center">
                  Brindar a nuestra comunidad materiales de construcción y
                  artículos de ferretería de calidad, ofreciendo un servicio
                  cercano, confiable y personalizado propio de un negocio familiar,
                  para apoyar tanto a profesionales como a vecinos en la realización
                  de sus proyectos y sueños.
                </p>
              </div>
            </div>

            {/* Visión */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-[#263238] p-6">
                <h3 className="text-2xl font-bold text-white text-center">Nuestra Visión</h3>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-[#263238] p-3 rounded-full">
                    <i className="bi bi-eye text-white text-2xl"></i>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-center">
                  Ser reconocidos como la ferretería y proveedor de materiales de
                  construcción de referencia en la zona, destacándonos por la
                  confianza, la atención familiar y el compromiso con el crecimiento
                  y desarrollo de nuestra comunidad.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-[#263238] text-center">Nuestros Valores</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-4">
                <div className="bg-[#ffb300] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="bi bi-people text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Familia</h3>
              </div>
              <p className="text-gray-600 text-center">
                Todo lo que hacemos nace del amor y compromiso con nuestros seres
                queridos y nuestra comunidad.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-4">
                <div className="bg-[#ffb300] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="bi bi-hammer text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Esfuerzo</h3>
              </div>
              <p className="text-gray-600 text-center">
                Valoramos el trabajo duro y la dedicación diaria como el camino
                hacia los sueños y la excelencia en el servicio.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-4">
                <div className="bg-[#ffb300] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="bi bi-trophy text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Legado</h3>
              </div>
              <p className="text-gray-600 text-center">
                Construimos un legado de confianza, calidad y servicio que
                trasciende generaciones en nuestra comunidad.
              </p>
            </div>
          </div>
        </section>

        {/* Historia y Experiencia */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-[#ffb300] to-[#ff8f00] rounded-2xl shadow-lg p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-6">Más de 5 Años de Experiencia</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold mb-2">5+</div>
                <div className="text-sm opacity-90">Años en el mercado</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">300+</div>
                <div className="text-sm opacity-90">Productos disponibles</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">1000+</div>
                <div className="text-sm opacity-90">Clientes satisfechos</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-sm opacity-90">Compromiso familiar</div>
              </div>
            </div>
          </div>
        </section>

        {/* Mensaje final */}
        <section className="text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Nuestro negocio no es solo un espacio comercial, sino el resultado de
              sueños compartidos, de sacrificios que valen la pena y de la alegría
              de ayudar a otros a construir sus proyectos y hogares.
            </p>
            <p className="text-lg text-[#ffb300] font-semibold italic">
              — Ever Ramos & Erika Schroter
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Fundadores de Deposito de Materiales de construcción RyR
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}