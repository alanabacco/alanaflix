import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CadastroVideo from "./pages/cadastro/Video";
import CadastroCategoria from "./pages/cadastro/Categoria";
import Pagina404 from "./pages/Pagina404"; // Desafio master blaster

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/cadastro/video" element={<CadastroVideo />} />
        <Route path="/cadastro/categoria" element={<CadastroCategoria />} />
        <Route path="*" element={<Pagina404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
