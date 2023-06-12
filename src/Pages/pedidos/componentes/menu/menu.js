import React, { useState, useEffect } from "react";
import { getMenu } from "../../../../uteis/getMenu";
import { adicionarItemComanda } from "../../../../uteis/adicionarItemComanda";
import Comanda from "../comanda/comanda";
import "./menu.css";

function MenuPedido() {
  const [menu, setMenu] = useState([]);
  const [comanda, setComanda] = useState([]);
  const [categoria, setCategoria] = useState("");
  const [itensFiltrados, setItensFiltrados] = useState([]);

  useEffect(() => {
    getMenu(setMenu);
  }, []);

  const adicionar = (item) => {
    adicionarItemComanda(item, comanda, setComanda);
  };

  useEffect(() => {
    const filtrarItensPorCategoria = () => {
      if (categoria === "Desjejum" || categoria === "Principal") {
        return menu.filter((item) => item.type === categoria);
      } else {
        return menu;
      }
    };

    setItensFiltrados(filtrarItensPorCategoria());
  }, [categoria, menu]);

  console.log(categoria);

  return (
    <>
      <section className="opcoes-menu">
        <div className="menu-opcoes">
          <button onClick={() => setCategoria("Desjejum")}>Desjejum</button>
          <button onClick={() => setCategoria("Principal")}>Principal</button>
        </div>
      </section>
      <div className="pagina-atendimento">
        <div className="menu-selecao">
          <section>
            <ul>
              {itensFiltrados.map((item) => (
                <li
                  className="menu-item"
                  onClick={() => adicionar(item)}
                  key={item.id}
                >
                  <span className="item-name">{item.name}</span>
                  <span className="item-price">R${item.price}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <Comanda comanda={comanda} setComanda={setComanda} />
      </div>
    </>
  );
}

export default MenuPedido;
