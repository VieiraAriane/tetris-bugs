import React, { useState, useEffect } from "react";
import { diminuirQuantidade } from "../../../../uteis/diminuirQuantidade";
import { adicionarItemComanda } from "../../../../uteis/adicionarItemComanda";
import { calcularSubtotal } from "../../../../uteis/calcularSubtotal";
import { enviarPedido } from "../../../../API_URL/pedidos";
import BotaoLogin from "../../../../Imagens/botao.png";
import BotaoMais from "../../../../Imagens/botaoMais.png";
import BotaoMenos from "../../../../Imagens/botaoMenos.png";
import BotaoExluir from "../../../../Imagens/botaoExcluir.png";
import "./comanda.css";

const Comanda = ({ comanda, setComanda }) => {
  const [cliente, setCliente] = useState("");
  const [mesa, setMesa] = useState("");
  const [total, setTotal] = useState(0);
  const [erro, setErro] = useState("");

  const enviarComanda = async (e) => {
    e.preventDefault();
    setCliente("");
    setMesa("");
    setComanda([]);
    setErro("");
    if ((!cliente && !mesa) || !cliente || !mesa || comanda.length === 0) {
      setErro("A comanda não pode ser enviada vazia");
      return;
    }
    try {
      await enviarPedido(comanda, cliente, mesa);
    } catch (error) {
      setErro(error.message);
    }
  };

  const aumentar = (item) => {
    adicionarItemComanda(item, comanda, setComanda);
  };

  const diminuir = (item) => {
    diminuirQuantidade(item, comanda, setComanda);
  };

  const excluir = (item) => {
    const novaComanda = comanda.filter(
      (comandaItem) => comandaItem.id !== item.id
    );
    setComanda(novaComanda);
  };

  const subTotal = () => {
    const valorFinal = calcularSubtotal(comanda);
    setTotal(valorFinal);
  };

  useEffect(() => {
    subTotal();
  }, [comanda]);

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
              type="number"
              value={mesa}
              name="mesa-cliente"
              id="mesa-cliente"
            />
          </section>
        </div>
        <section className="lista-comanda">
          <p className="resumo-comanda">Resumo comanda</p>
          <ul className="comanda-lista">
            {comanda.map((item) => (
              <li className="comanda-item" key={item.id}>
                <span className="item-name">
                  {item.name} - R${item.preco}
                </span>

                <div className="sessao-botoes">
                  <button
                    onClick={() => aumentar(item)}
                    className="botao-imagem aumentar"
                  >
                    <img src={BotaoMais} alt="Aumentar" />
                  </button>
                  <p>{item.quantidade}</p>
                  <button
                    onClick={() => diminuir(item)}
                    className="botao-imagem diminuir"
                  >
                    <img src={BotaoMenos} alt="Diminuir" />
                  </button>

                  <button
                    onClick={() => excluir(item)}
                    className="botao-imagem excluir"
                  >
                    <img src={BotaoExluir} alt="Excluir" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <span className={`subtotal ${comanda.length > 0 ? "mostrar" : ""}`}>
            Subtotal: R${total}
          </span>
        </section>
        <button onClick={enviarComanda} className="botao-login">
          <img
            src={BotaoLogin}
            alt="Logo tetris em movimento"
            className="enviar"
          />
        </button>
        {erro && <p className="erro">{erro}</p>}
      </div>
    </>
  );
};

export default Comanda;
