//import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { obterProdutos } from "../../../API_URL/produtos";

function MenuPedido(){
  const [menu, setMenu] = useState([]);
  
  function getMenu() { 
    const data = obterProdutos().then(res => setMenu(res)).catch(error => console.log(error));
    return data
  }
  
  useEffect(() => { 
    getMenu()
  }, [])
  console.log(menu)

  return (
    <>
      <ul>
        {menu.map((item) => (
          <li key={item.id}>
            {item.name} R${item.price}
          </li>
        ))}
      </ul>
    </>
  );
};
    
    
    

export default MenuPedido;
