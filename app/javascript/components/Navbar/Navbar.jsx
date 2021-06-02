import React from 'react';

const Navbar = () => {
  return (
    <div className="Navbar flex justify-between p-4 text-2xl h-16">
      <div className="Navbar-menu">
        <i className="fas fa-bars"></i>
        <span className="ml-4 font-light text-xl">Timer</span>
      </div>
      <div className="Navbar-settings">
        <i className="fas fa-cog"></i>
      </div>
    </div>
  );
}

export default Navbar;
