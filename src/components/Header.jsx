import { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

export default function Header({ onSectionClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", link: "/" },
    { name: "Categoría", link: "#Categoría" },
    { name: "Contacto", link: "#contacto" },
    { name: "Nosotros", link: "/nosotros" },
  ];

  const handleNavClick = (name, link) => {
    if (onSectionClick && typeof onSectionClick[name] === "function" && location.pathname === "/") {
      onSectionClick[name]();
      setMenuOpen(false);
    } else if ((name === "Contacto" || name === "Categoría") && location.pathname !== "/") {
      navigate("/", { state: { scrollTo: name } });
      setMenuOpen(false);
    } else if (link === "/" || link === "/nosotros") {
      navigate(link);
      setMenuOpen(false);
    }
  };

  return (
    <>
      {/* Barra fija */}
      <div className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${scrolled ? "shadow-md" : ""}`}
        style={{
          background: scrolled ? "#f5f5f5" : "rgba(38,50,56,0.8)",
          borderBottom: scrolled ? "2px solid #ffb300" : "none",
        }}
      >
        <div className="flex justify-between items-center px-4 sm:px-8 py-4">
          {/* Logo */}
          <img
            src={scrolled ? "/img/logo_transparente.png" : "/img/logo_naranja.png"}
            alt="Logo de JyR"
            className="w-28 sm:w-40 h-auto object-contain"
          />

          {/* Navegación escritorio */}
          <nav className="hidden md:block">
            <ul className="flex gap-6">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => handleNavClick(item.name, item.link)}
                    className={`text-base font-semibold ${scrolled ? "text-[#263238]" : "text-[#f5f5f5]"} hover:text-[#ffb300]`}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Botón hamburguesa móvil */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none"
            aria-label="Abrir menú"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`block w-7 h-1 rounded bg-[#ffb300] mb-1 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block w-7 h-1 rounded bg-[#ffb300] mb-1 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-7 h-1 rounded bg-[#ffb300] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>

        {/* Menú móvil */}
        <nav className={`md:hidden fixed top-0 right-0 h-full w-2/3 max-w-xs bg-[#f5f5f5] shadow-lg z-50 transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <button
            className="absolute top-4 right-4 text-2xl text-[#ffb300]"
            onClick={() => setMenuOpen(false)}
          >
            &times;
          </button>
          <ul className="flex flex-col gap-6 mt-20 px-8">
            {navLinks.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => handleNavClick(item.name, item.link)}
                  className="text-lg font-semibold text-[#263238] hover:text-[#ffb300] transition-colors duration-300"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Fondo negro semitransparente al abrir menú */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </div>
      {/* Imagen del header solo en el 60% superior */} 
      <div className="relative w-full h-[60vh] pt-24" 
      style={{ 
        backgroundColor: "#263238", 
        backgroundImage: "url(/img/header_main.jpg)", 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        filter: "grayscale(0.2) brightness(0.8)" }} ></div>
    </>
  );
}
