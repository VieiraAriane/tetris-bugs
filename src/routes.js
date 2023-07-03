
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Logar from "./Pages/login/Login";
import Atendimento from "./Pages/pedidos/Atendimento";
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
