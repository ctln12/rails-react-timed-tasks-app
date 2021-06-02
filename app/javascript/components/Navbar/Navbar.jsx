import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const settingsIcon = <FontAwesomeIcon icon={faCog} />
  const menuIcon = <FontAwesomeIcon icon={faBars} />
  return (
    <div className="Navbar flex justify-between p-4 text-2xl h-16">
      <div className="Navbar-menu">
        <span>{menuIcon}</span>
        <span className="ml-4 font-light text-xl">Timer</span>
      </div>
      <div className="Navbar-settings">{settingsIcon}</div>
    </div>
  );
}

export default Navbar;
