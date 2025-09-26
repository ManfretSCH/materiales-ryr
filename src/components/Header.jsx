import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Categorías", path: "/categorias" },
    { name: "Contacto", path: "/contacto" },
    { name: "Nosotros", path: "/nosotros" },
  ];

  const handleNavClick = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

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
          <button onClick={() => navigate("/")} className="focus:outline-none">
            <img
              src="/materiales-ryr/img/logo_transparente.png"
              alt="Logo RyR"
              className="w-28 sm:w-40 h-auto object-contain"
            />
          </button>

          {/* Navegación escritorio */}
          <nav className="hidden md:block">
            <ul className="flex gap-6">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => handleNavClick(item.path)}
                    className={`text-base font-semibold transition-colors duration-300 px-3 py-2 rounded-lg ${
                      isActive(item.path)
                        ? "bg-[#ffb300] text-white"
                        : scrolled 
                        ? "text-[#263238] hover:text-[#ffb300]" 
                        : "text-[#f5f5f5] hover:text-[#ffb300]"
                    }`}
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
          <ul className="flex flex-col gap-4 mt-20 px-8">
            {navLinks.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => handleNavClick(item.path)}
                  className={`w-full text-left text-lg font-semibold py-3 px-4 rounded-lg transition-colors duration-300 ${
                    isActive(item.path)
                      ? "bg-[#ffb300] text-white"
                      : "text-[#263238] hover:text-[#ffb300] hover:bg-gray-100"
                  }`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Overlay del menú móvil */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </div>

      {/* Solo mostrar imagen de header si NO estamos en el home */}
      {location.pathname !== "/" && (
        <div className="relative w-full h-[40vh] pt-24 bg-gradient-to-r from-[#263238] to-[#37474f] flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              {navLinks.find(link => link.path === location.pathname)?.name || "Página"}
            </h1>
            <p className="text-lg opacity-90">Materiales de Construcción RyR</p>
          </div>
        </div>
      )}
    </>
  );
}