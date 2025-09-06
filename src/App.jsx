import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Nosotros from "./pages/Nosotros.jsx";
import Home from "./pages/Home.jsx";

export default function App() {
  const [scrollTarget, setScrollTarget] = useState(null);

  return (
    <Router basename="/materiales-ryr/">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home scrollTarget={scrollTarget} />
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
        {/* Ruta comodín para cualquier otra ruta */}
        <Route
          path="*"
          element={
            <>
              <Home scrollTarget={scrollTarget} />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}