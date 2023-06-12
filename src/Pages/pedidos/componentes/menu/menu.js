import React, { useState, useEffect } from "react";
import { getMenu } from "../../../../uteis/getMenu";
import { adicionarItemComanda } from "../../../../uteis/adicionarItemComanda";
import Comanda from "../comanda/comanda";
import "./menu.css";

function MenuPedido() {
  const [menu, setMenu] = useState([]);
  const [comanda, setComanda] = useState([]);
 

  useEffect(() => {
    getMenu(setMenu);
  }, []);

  const adicionar = (item) => {
    adicionarItemComanda(item, comanda, setComanda);
  };

  return (
    <>
      <div className="pagina-atendimento">
        <div className="menu-selecao">
          <section>
            <ul>
            {menu.map((item) => {
                  return item.type === 'Desjejum' &&   
                  <li
                  
                  className="menu-item"
                  onClick={() => adicionar(item)}
                  key={item.id}
                >
                  <span className="item-name">{item.name}</span>
                  <span className="item-price">R${item.price}</span>
                </li>
            })}
            {menu.map((item) => {
                  return item.type === 'Principal' &&   
                  <li
                  className="menu-item"
                  onClick={() => adicionar(item)}
                  key={item.id}
                >
                  <span className="item-name">{item.name}</span>
                  <span className="item-price">R${item.price}</span>
                </li>
            })}
            </ul>
          </section>
        </div>
          <Comanda comanda={comanda} setComanda={setComanda} />
           </div>
    </>
  );
}

export default MenuPedido;

