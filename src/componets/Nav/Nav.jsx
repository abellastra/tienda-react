 import './nav.css'
import { Link } from "react-router-dom";
import { useCardContext } from "../../context/cartContext/useCardContx";

export const Nav=()=>{

  const {getTotalItems}=  useCardContext()

    return (
      <nav className="nav">
        {" "}
        {}
        <ul className="ul">
          <li className="li">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="li">
            <Link to={"/category/dulce"}>Dulce</Link>
          </li>
          <li className="li">
            <Link to={"/category/salado"}>Salado</Link>
          </li>
          <li className='li'>
            <Link >carrito</Link>
          </li>
          {getTotalItems > 0 && <span className="">{getTotalItems()}</span>}
        </ul>
      </nav>
    );
}