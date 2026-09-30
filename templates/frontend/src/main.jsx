import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@shared/dist/styles/text.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Dgkala } from "./pages/dgkala.jsx";
import { Tecnolife } from "./pages/tecno_life.jsx";
import { useMediaQuery } from "react-responsive";
import ResponsiveProvider from "@shared/responsiveProvider.jsx";

createRoot(document.getElementById("root")).render(
  <ResponsiveProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/dgkala" element={<Dgkala />} />
        <Route path="/tecnolife" element={<Tecnolife />} />
      </Routes>
    </BrowserRouter>
  </ResponsiveProvider>,
);
