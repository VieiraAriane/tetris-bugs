import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../Imagens/tetrisgif.gif";
import BotaoLogin from "../Imagens/botao.png";
import { Login, setTokenRole} from "../API_URL/autenticacao";
import { Erros } from "../Uteis /Erros";

const Logar = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();


  const BotaoLogar = (e) => {
    e.preventDefault();
    Login(email, password)
    .then((response)=> {
      console.log(response)
      if (!response.code) return;
      setTokenRole(response.token, response.role);
      if (response.role === 'atendente') {
        navigate('/pedidos')
      }
    })
    .catch((error) => {
      const errorMessage = Erros(error);
      setErro(errorMessage)
    });
  }
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
