import React, { useState, useEffect } from "react";
import {obterPedidos} from '../../../../API_URL/pedidos';
import { NavMenu} from '../../../../Pages/pedidos/componentes/navegaçao/navegacao'
import "./cozinha.css";
function Cozinha() {
  const [pedidosRecebidos, setPedidosRecebidos] = useState([]);

  useEffect(() => {
    async function fetchPedidos() {
      try {
        const pedidos = await obterPedidos();
        console.log('Fetch pagina cozinha', pedidos); // Verifique o que está sendo retornado aqui
        setPedidosRecebidos(pedidos);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPedidos();
  }, []);

  return (
    <>
 <NavMenu/>
    <div className="pedido-container">    
     {pedidosRecebidos.map((pedido) => (
     <div className="pedido-item" key={pedido.id}>
      <p className="resumo-pedido">Resumo pedido</p>
      <p className="titulo">Atendente: {pedido.user}</p>
      <p className="titulo">Nº pedido: {pedido.id}</p>
      <p className="titulo">Cliente: {pedido.client}</p>
      <p className="titulo">Mesa: {pedido.mesa}</p>
      <p className="status">{pedido.status}</p>
     
           <ul>
            <p className="pedido">Pedido:</p>
        {pedido.products.map((item) => (
          <li key={item.product.id}>
            <p className="titulo">- {item.qty}x {item.product.name}</p>
          </li>
            ))}
          </ul>
            </div>
      ))}
    </div>
    </>
  );
  
}
  

export default Cozinha;
