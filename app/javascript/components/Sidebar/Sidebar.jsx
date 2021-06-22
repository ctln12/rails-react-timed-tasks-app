import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';

class Sidebar extends Component {
  render () {
    const { menuOpen, handleStateChange, closeMenu } = this.props;
    let screenWidth;
    if (window.innerWidth < 420) {
      screenWidth = '100vw';
    } else {
      screenWidth = '300px';
    }
    return (
      <Menu
        customBurgerIcon={ false }
        isOpen={ menuOpen }
        onStateChange={(menuOpen) => handleStateChange(menuOpen)}
        width={ screenWidth }
        disableAutoFocus
      >
        <Link to="/" onClick={(event) => closeMenu(event)} id="timer" className="menu-item py-3 px-5 w-full border rounded-sm border-gray-900 bg-gray-900 text-white">Timer</Link>
        <Link to="/settings" onClick={(event) => closeMenu(event)} id="settings" className="menu-item py-3 px-5 w-full border rounded-sm border-white">Settings</Link>
      </Menu>
    );
  }
}

export default Sidebar;
