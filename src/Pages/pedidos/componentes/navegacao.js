import { Link } from "react-router-dom";
 
function NavMenu() {
  return (
  <header className="header">
     <img src="" alt=""/>
     <Link to='/' >sair</Link>
  
      <Link to='/novo' >novo pedido</Link>
       
      <Link to='/andamento' >relogio ou ampulheta</Link>
       
      <Link to='/concluido' >concluídos</Link>
       
      <Link to='/*' >icone</Link>
       
    
    
    </header>
  )};

  export default NavMenu;