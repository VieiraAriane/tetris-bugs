import React, { useState } from "react";
import Logo from "../Imagens/tetrisgif.gif";
import BotaoLogin from "../Imagens/botao.png";
import { Erros } from "../Uteis /Erros";
import { apiLogin } from "../API_URL/login";
import { useNavigate } from "react-router-dom";

const Logar = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erro, setErro] = useState("");
  const redir = useNavigate();

  const BotaoLogar = async (e) => {
    e.preventDefault();
    setErro("");
    try {
      const response = await apiLogin(email, password);
    localStorage.setItem('token', response.accessToken)
      console.log(response)
      if (response.user.role === 'atendente') {
        console.log("Login realizado");
        redir("/pedidos")
      } else if (response.status === 400) {
        const erro = await response.json();
        const error = Erros(erro);
        setErro(error);
      }
    } catch (error) {
      setErro(Erros(error));
      //console.log('error:', error)
    //console.log('erro:', error.message)
    
    }
  };



  return (
    <>
      <div className="root">
        <section className="animacao">
          <h1 className="logo">Hamburgueria</h1>
          <figure className="imagem-container">
            <img src={Logo} alt="Logo tetris em movimento" className="imagem" />
          </figure>
        </section>

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
          <button className="botao-login">
            <img
              src={BotaoLogin}
              alt="Logo tetris em movimento"
              className="play"
            />
          </button>
          {erro && <p className="erro">{erro}</p>}
        </form>
        <footer className="footer">
          <h3> Desenvolvido por Ariane e Thalita </h3>
        </footer>
      </div>
    </>
  );
};
export default Logar;