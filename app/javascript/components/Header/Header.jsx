import React from 'react';
import { Link } from "react-router-dom";

function Header(props) {
  const { toggleMenu, changeTitle, changePathname } = props;
  return (
    <div className="Header flex justify-between p-4 text-2xl h-16">
      <div className="Header-menu cursor-pointer" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
        <span className="ml-4 font-light text-xl">
          {changeTitle(window.location.pathname)}
        </span>
      </div>
      <div className="Header-settings">
        <Link to="/settings" onClick={(event) => changePathname(event)}>
          <i className="fas fa-cog"></i>
        </Link>
      </div>
    </div>
  );
}

export default Header;
