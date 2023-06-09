import React from 'react';
import { Link } from "react-router-dom";
import { FaArrowCircleUp, FaHamburger } from "react-icons/fa";
import "./navegacao.css";
export function NavMenu() {
  return (
    <>
      <header className="header">
        <Link to="/" className="link">
          {" "}
          <FaArrowCircleUp className="sair"/>
        </Link>
        <div className="nav">
          <Link to="/pedidos" className="link">
            Menu
          </Link>
          <Link to="/cozinha" className="link">
            Pedidos
          </Link>
        </div>
        <FaHamburger className="hambuguer"/>
      </header>
      
    </>
  );
}

export default NavMenu;
