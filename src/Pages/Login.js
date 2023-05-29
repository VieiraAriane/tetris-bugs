import React, { useState } from "react";
import Logo from "../Imagens/tetrisgif.gif";
import BotaoLogin from "../Imagens/botao.png";
import { Erros } from "../componentes/Erros/Erros";

const Logar = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erro, setErro] = useState("");

  async function apiLogin(email, password) {
    const response = await fetch(
      "https://burger-queen-api-mock-mu.vercel.app/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );
    return response;
  }
  const BotaoLogar = async (e) => {
    e.preventDefault();
    setErro("");
    try {
      const response = await apiLogin(email, password);
      console.log(response)
      if (response.status === 200) {
        console.log("Logim realizado");
      } else if (response.status === 400) {
        const erro = await response.json();
        const error = Erros(erro);
        setErro(error);
      }
    } catch (error) {
      setErro(Erros(error));
    }
  };

  return (
    <>
      <h1 className="logo">Hamburgueria</h1>
      <img src={Logo} alt="Logo tetris em movimento" className="imagem" />
      <form className="formulario" onSubmit={BotaoLogar}>
        <input
          className="input"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu e-mail"
          type="email"
          value={email}
          name="email"
          id="email"
        />
        <input
          className="input"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Digite sua senha"
          value={password}
          name="password"
        />
        {erro && <p className="erro">{erro}</p>}
        <button className="botao-login">
          <img
            src={BotaoLogin}
            alt="Logo tetris em movimento"
            className="play"
          />
        </button>
      </form>
    </>
  );
};
export default Logar;
