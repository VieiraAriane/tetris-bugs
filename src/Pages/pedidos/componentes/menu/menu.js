import React, { useState, useEffect } from "react";
import { getMenu } from "../../../../uteis/getMenu";
import { adicionarItemComanda } from "../../../../uteis/adicionarItemComanda";
import Comanda from "../comanda/comanda";
import "./menu.css";

function MenuPedido() {
  const [menu, setMenu] = useState([]);
  const [comanda, setComanda] = useState([]);
  const [itensFiltrados, setItensFiltrados] = useState([]);

  useEffect(() => {
    getMenu(setMenu);
  }, []);

  const adicionar = (item) => {
    adicionarItemComanda(item, comanda, setComanda);
  };

  const filtrarItensPorCategoria = (categoria) => {
    setItensFiltrados(menu.filter((item) => item.type === categoria));
  };

  return (
    <>
      <div className="menu-opcoes">
        <button className="cafe" onClick={() => filtrarItensPorCategoria("Desjejum")}>Desjejum</button>
        <button className="principal" onClick={() => filtrarItensPorCategoria("Principal")}>Principal</button>
      </div>
      <div className="pagina-atendimento">
        <div className="menu-selecao">
          <section>
            <ul className="menu-itens-img">
              {itensFiltrados.length !== 0 ?
                (itensFiltrados.map((item) => (
                  <li
                    className="menu-item"
                    onClick={() => adicionar(item)}
                    key={item.id}
                  >
                    <span className="item-name">{item.name}</span>
                    <span className="item-price">R${item.price}</span>
                    <img className="item-image-menu" src={item.image} />
                  </li>
                )))
                : (menu.map((item) => (
                  <li
                    className="menu-item"
                    onClick={() => adicionar(item)}
                    key={item.id}
                  >

                    <span className="item-name">{item.name}</span>
                    <span className="item-price">R${item.price}</span>
                    <img className="item-image-menu" src={item.image} />

                  </li>
                )))
              }
            </ul>
          </section>
        </div>
        <Comanda comanda={comanda} setComanda={setComanda} />
      </div>
    </>
  );
}

export default MenuPedido;
