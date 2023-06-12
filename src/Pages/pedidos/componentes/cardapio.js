//**import { React, useState, useEffect } from 'react';
//import { useNavigate } from "react-router-dom";
//import { apiProducts } from "../../../API_URL/login"

//*const Breakfast = () => {
   /** const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            const response = await apiProducts(token);
            const productsList = await response.json();
            setProducts(productsList)
        }
        fetchData();
    }, [])
    
    const navigation = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        navigation('/cozinha');
    }

    return (
      <>
      
            <button bntBreakfast='secundary' btnRestOfTheDay='terciary' onClickDay={handleClick} />
              
            
              {products.map((product) => {
                return <p name={product.name} price={`R$${product.price}`} />
              })}             
               
          
                  <button>Enviar</button>
             
        </>
    )
}

export default Breakfast;// */