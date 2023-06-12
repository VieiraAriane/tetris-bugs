import { BrowserRouter, Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import Logar from "./Pages/login/Login";
=======
import Logar from "./Pages/Login/Login";
>>>>>>> 4fb37555fed961577a3c20b2f838b4f6ffdd0157
import Atendimento from "./Pages/pedidos/pedidos";
import Cozinha from './Pages/pedidos/componentes/cozinha/cozinha'
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Logar />} />
        <Route path="/pedidos" element={<Atendimento />} />
        <Route path="/cozinha" element={<Cozinha/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

//<Cabecalho/> linha 8 caso tomemos a decisão de imprimir em todas as telas
//  <Rodape/> linha 13 mesmo caso
