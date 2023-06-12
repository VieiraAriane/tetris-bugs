import React, {useState} from "react";
import { diminuirQuantidade } from "../../../../uteis/diminuirQuantidade";
import './comanda.css';
import { adicionarItemComanda } from "../../../../uteis/adicionarItemComanda";

const Comanda = ({ comanda, setComanda }) => {
  const [cliente, setCliente] = useState("");
  const [mesa, setMesa] = useState("");
  const [total, setTotal] = useState(0);
 
  const aumentar = (item) => { adicionarItemComanda(item, comanda, setComanda); 
  };

  const diminuir = (item) => { diminuirQuantidade(item, comanda, setComanda);
  };
  const excluir = (item) => {
    const novaComanda = comanda.filter((comandaItem) => comandaItem.id !== item.id);
    setComanda(novaComanda);
  };


  return (
    <>
    <div className="detalhamento-comanda">
    <div className="info-mesa">
          <section className="input-cliente">
            <input
              className="nome-cliente"
              onChange={(e) => setCliente(e.target.value)}
              placeholder="Cliente"
              type="text"
              value={cliente}
              name="nome-cliente"
              id="nome-cliente"
              />
            <input
              className="mesa-cliente"
              onChange={(e) => setMesa(e.target.value)}
              placeholder="Mesa"
              type="text"
              value={mesa}
              name="mesa-cliente"
              id="mesa-cliente"
            />
             
        
      
          </section>
          
    </div>
    
      <section className="lista-comanda">
        <ul className="comanda-lista">
          {comanda.map((item) => (
            <li className="comanda-item" key={item.id}>
              <span className="item-name">
                {item.name} ({item.quantidade})
              </span>
              <span className="item-preco"> R${item.preco}</span>
              <span className='preco-unitario'>
              </span>
              <button onClick={() => aumentar(item)}>+</button>
              <button onClick={() => diminuir(item)}>-</button>
              <button onClick= {() => excluir(item)}>x</button>
            </li>
          ))}
          
        </ul>
      
      </section>
      <button>
      <span className="total">TOTAL: R${total}</span>
      </button>
    </div>
    </>
  );
};

export default Comanda;
