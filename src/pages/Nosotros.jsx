import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

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
            Una historia de esfuerzo, dedicación y amor por la familia.
          </p>
        </section>

        {/* Presentación */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">¿Quiénes somos?</h2>
          <p className="text-lg leading-relaxed mb-6 text-gray-700">
            Somos <span className="font-semibold">Ever Ramos</span> y{" "}
            <span className="font-semibold">Erika Ramos</span>, una familia que
            decidió construir su propio camino a través del esfuerzo constante y
            la confianza en nuestros valores. Para nosotros, cada paso en este
            proyecto representa no solo la construcción de una casa, sino la
            formación de un legado que trascienda generaciones.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Creemos en la unión, la disciplina y la fe como pilares que nos
            permiten avanzar juntos hacia el futuro. Nuestra historia es simple,
            pero poderosa: trabajar en equipo para alcanzar sueños que parecían
            imposibles.
          </p>
        </section>

        {/* Valores */}
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Familia
            </h3>
            <p className="text-gray-600">
              Todo lo que hacemos nace del amor y compromiso con nuestros seres
              queridos.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Esfuerzo
            </h3>
            <p className="text-gray-600">
              Valoramos el trabajo duro y la dedicación diaria como el camino
              hacia los sueños.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Legado
            </h3>
            <p className="text-gray-600">
              Nuestro hogar es símbolo de esperanza, perseverancia y futuro para
              quienes vienen detrás.
            </p>
          </div>
        </section>

        {/* Mensaje final */}
        <section className="text-center">
          <p className="text-xl text-gray-700 leading-relaxed">
            Nuestra casa no es solo un espacio físico, sino el resultado de
            sueños compartidos, de sacrificios que valen la pena y de la alegría
            de construir juntos.
          </p>
          <p className="mt-6 text-lg text-gray-500 italic">
            — Ever Ramos & Erika Ramos
          </p>
        </section>
      </main>

    </div>
  );
}
