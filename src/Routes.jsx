import { Routes, Route } from "react-router-dom";
import {Home, Tech, Projetos} from "./pages";
import {LayoutPadrao} from "./layout";

function AppRoutes() {
  return (
    <Routes>
      {/* LayoutPadrao é o “wrapper” das páginas */}
      <Route element={<LayoutPadrao />}>
        <Route path="/" element={<Home />} />
        <Route path="/Tecnologias" element={<Tech />} />
        <Route path="/Projetos" element={<Projetos />} />
        {/* Adicione outras rotas dentro do layout */}
        {/* <Route path="/sobre" element={<Sobre />} /> */}
      </Route>
    </Routes>
  );
}

export default AppRoutes;
