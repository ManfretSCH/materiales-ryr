import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Nosotros from "./pages/Nosotros.jsx";
import Categorias from "./pages/Categorias.jsx";
import Contacto from "./pages/Contacto.jsx";

export default function App() {
  return (
    <Router basename="/materiales-ryr/">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/nosotros"
          element={
            <>
              <Header />
              <Nosotros />
              <Footer />
            </>
          }
        />
        <Route
          path="/categorias"
          element={
            <>
              <Header />
              <Categorias />
              <Footer />
            </>
          }
        />
        <Route
          path="/contacto"
          element={
            <>
              <Header />
              <Contacto />
              <Footer />
            </>
          }
        />
        {/* Ruta comodín */}
        <Route
          path="*"
          element={
            <>
              <Home />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}