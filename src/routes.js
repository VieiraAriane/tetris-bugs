import { BrowserRouter, Route, Routes } from "react-router-dom";
import Logar from "./Pages/Login/Login";
import Atendimento from "./Pages/pedidos/pedidos";

//import Menu from "./Pages/pedidos";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Logar />}/>
        <Route path="/pedidos" element={<Atendimento />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;

//<Cabecalho/> linha 8 caso tomemos a decisão de imprimir em todas as telas
//  <Rodape/> linha 13 mesmo caso