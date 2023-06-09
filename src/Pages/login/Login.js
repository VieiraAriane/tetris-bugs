import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from '../../Imagens/tetrisgif.gif'
import BotaoLogin from '../../Imagens/botao.png'
import { apiLogin } from '../../API_URL/autenticacao'
import './login.css'

export const Logar = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erro, setErro] = useState("");
  const [loginSucesso, setLoginSucesso] = useState(false); 
  const redir = useNavigate();

const BotaoLogar = async (e) => {
    e.preventDefault();
    setErro("");
    try {
      const response = await apiLogin(email, password);
      if (response.user.role === 'atendente') {
        redir('/pedidos');
      }
      if (response.user.role === 'chef') {
        redir('/cozinha');
      }
      if (response.user.role === 'adm') {
        redir('/administracao');
      }
      setLoginSucesso(true);
    } catch (error) {
      setErro(error.message);
    }
  };

  return (
    <>   <div className="root">
   
        <section className="figura">
          <p className="logo">Hamburgueria</p>
          <figure className="imagem-container">
            <img src={Logo} alt="Logo tetris em movimento" className="imagem" />
          </figure>
        </section>

        <form className="formulario">
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
          <button onClick={BotaoLogar} className="botao-login">
            <img
              src={BotaoLogin}
              alt="Logo tetris em movimento"
              className="play"
            />
          </button>
          
          <div>
        {erro && <p className="erro">{erro}</p>}
          {loginSucesso && <p className="sucesso">Login bem-sucedido!</p>}</div>
        </form>
       
        <footer className="footer">
          <h3>Desenvolvido por Ariane e Thalita</h3>
        </footer>
      </div>
    </>
  );
};

export default Logar;
