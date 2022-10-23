import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CadastroVideo from "./pages/cadastro/Video";
import CadastroCategoria from "./pages/cadastro/Categoria";
import Pagina404 from "./pages/Pagina404"; // Desafio master blaster

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/cadastro/video" element={<CadastroVideo />} />
      <Route path="/cadastro/categoria" element={<CadastroCategoria />} />
      <Route element={<Pagina404 />} />
    </Routes>
  </BrowserRouter>
);
