import { Link } from "react-router-dom";
import { FaArrowCircleUp, FaHamburger } from "react-icons/fa";
import "./navegacao.css";
function NavMenu() {
  return (
    <>
      <header className="header">
        <Link to="/" className="link">
          {" "}
          <FaArrowCircleUp
            size={40}
            style={{ color: "#28a2a4", transform: "rotate(270deg)" }}
          />
        </Link>
        <div className="nav">
          <Link to="/" className="link">
            Menu
          </Link>
          <Link to="/" className="link">
            Pedidos
          </Link>
        </div>
        <FaHamburger size={40} style={{ color: "#28a2a4" }} />
      </header>
     
    </>
  );
}

export default NavMenu;