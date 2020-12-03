import React from "react";
import { Link } from "react-router-dom";
import './HeaderBar.css';
interface HeaderProps {
  menus?: { id: number; value: string }[];
}

const HeaderBar: React.FC<HeaderProps> = () => {
  return (
    <header>
      <nav className="header-nav">
        <div className="header-logo" data-test="header-logo" style={{background: `url("/assets/logo-movie-mania.png") no-repeat`,backgroundSize:`109px`}}></div>
        <div className="header-menu-div">
          <ul className="header-menus" data-test="header-menus">
            <li className="header-li" data-test="header-li">
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default HeaderBar;
