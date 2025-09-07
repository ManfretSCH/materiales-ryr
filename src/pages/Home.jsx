import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header.jsx";
import Category from "../components/Category.jsx";
import Contacto from "./Contacto.jsx";

export default function Home({ scrollTarget }) {
  const contactoRef = useRef(null);
  const categoriesRef = useRef(null);
  const location = useLocation();

  const scrollToContacto = () => {
    if (contactoRef.current)
      contactoRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToCategories = () => {
    if (categoriesRef.current)
      categoriesRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // Ejecuta scroll si scrollTarget viene de Header
  useEffect(() => {
    if (scrollTarget === "Contacto") scrollToContacto();
    if (scrollTarget === "Categoría") scrollToCategories();
  }, [scrollTarget]);

  // También revisa si viene de state de navigate
  useEffect(() => {
    if (location.state?.scrollTo) {
      if (location.state.scrollTo === "Contacto") scrollToContacto();
      if (location.state.scrollTo === "Categoría") scrollToCategories();
    }
  }, [location.state]);

  return (
    <>
      <Header
        onSectionClick={{
          Contacto: scrollToContacto,
          Categoría: scrollToCategories,
        }}
      />

      <div className="w-full min-h-screen bg-[#f5f5f5] flex flex-col items-center py-16">
        {/* Misión y Visión */}
        <section className="w-[90%] max-w-5xl bg-white rounded-2xl shadow-lg p-8 mx-auto flex flex-col gap-12 mb-12">
          {/* Misión */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src="/materiales-ryr/img/mision.png"
              alt="Misión Ferretería"
              className="w-full md:w-1/3 rounded-xl shadow-md object-cover"
              style={{ backgroundColor: "#8d6e63" }}
            />
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-bold text-[#ffb300] mb-4 text-left">
                Nuestra Misión
              </h2>
              <p className="text-lg text-[#37474f] text-left">
                Brindar a nuestra comunidad materiales de construcción y
                artículos de ferretería de calidad, ofreciendo un servicio
                cercano, confiable y personalizado propio de un negocio familiar,
                para apoyar tanto a profesionales como a vecinos en la realización
                de sus proyectos.
              </p>
            </div>
          </div>

          {/* Visión */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <img
              src="/materiales-ryr/img/vision.jpg"
              alt="Visión Ferretería"
              className="w-full md:w-1/3 rounded-xl shadow-md object-cover"
              style={{ backgroundColor: "#8d6e63" }}
            />
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-bold text-[#ffb300] mb-4 text-left md:text-right">
                Nuestra Visión
              </h2>
              <p className="text-lg text-[#37474f] text-left md:text-right">
                Ser reconocidos como la ferretería y proveedor de materiales de
                construcción de referencia en la zona, destacándonos por la
                confianza, la atención familiar y el compromiso con el crecimiento
                de nuestra comunidad.
              </p>
            </div>
          </div>
        </section>

        <section ref={categoriesRef}>
          <Category />
        </section>
      </div>

      <section ref={contactoRef}>
        <Contacto />
      </section>
    </>
  );
}
