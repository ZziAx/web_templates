import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@shared/dist/styles/text.css"
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/home.jsx";
import { Home2 } from "./pages/home2.jsx";

import { useMediaQuery } from "react-responsive";
import ResponsiveProvider from "@shared/responsiveProvider.jsx";

createRoot(document.getElementById("root")).render(
  <ResponsiveProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/v1/home" element={<Home />} />
        <Route path="/v2/home" element={<Home2 />} />

        {/* <Route path="/search" element={<Search />} /> */}
      </Routes>
    </BrowserRouter>
  </ResponsiveProvider>,
);
