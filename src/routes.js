import { BrowserRouter, Route, Routes,Switch } from "react-router-dom";
import Logar from "./Pages/Login";
import Atendimento from "./Pages/Pedidos";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Switch>
        <Route path="/" element={<Logar />} />
        <Route path="/pedidos" element={<Atendimento />} />
       </Switch>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
