import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Nosotros from "./pages/Nosotros.jsx";
import Home from "./pages/Home.jsx";

export default function App() {
  // Estado para indicar si hay que hacer scroll desde otra página
  const [scrollTarget, setScrollTarget] = useState(null);

  return (
    <Router>
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
      </Routes>
    </Router>
  );
}
