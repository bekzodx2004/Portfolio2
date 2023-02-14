import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to='/' className="link">BEKZOD.UZ</Link>
      <ul>
        <li>
          <Link to="/" className="link">Bosh sahifa</Link>
        </li>
        <li>
          <Link to="/projects" className="link">Loyihalar</Link>
        </li>
        {/* <li>
          <Link to="/about" className="link">Men haqimda</Link>
        </li> */}
        {/* <li>
          <Link to="/contacts" className="link">Bog'lanish</Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Header;
