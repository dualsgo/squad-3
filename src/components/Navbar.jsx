

import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {

  return (

    <nav className="menu">
      <p className="logo"><Link to={`/`}>π Garagem de carros Senac π</Link></p>
      <ul>
        <li>
          <a href="#">βοΈ Cadastros</a>
          <ul>
            <li><Link to={`/andar1`}>π Visualizar: Piso 1</Link></li>
            <li><Link to={`/andar2`}>π Visualizar: Piso 2</Link></li>
            <li><Link to={`/andar3`} >π Visualizar: Piso 3</Link></li>
          </ul>
        </li>
        <li>
          <a href="#">βοΈPainel </a>
          <ul>
            <li><Link to={`/admin`}>π¨βπ» Gerenciar: Piso 1</Link></li>
            <li><Link to={`/admin2`}>π¨βπ» Gerenciar: Piso 2</Link></li>
            <li><Link to={`/admin3`} >π¨βπ» Gerenciar: Piso 3</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};


export default Navbar;