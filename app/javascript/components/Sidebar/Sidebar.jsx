import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';

class Sidebar extends Component {
  render () {
    const { menuOpen, handleStateChange, closeMenu } = this.props;
    let screenWidth;
    if (window.innerWidth < 420) {
      screenWidth = '85%';
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
        <a onClick={() => closeMenu()} id="timer" className="menu-item" href="/">Timer</a>
        <a onClick={() => closeMenu()} id="settings" className="menu-item" href="/settings">Settings</a>
      </Menu>
    );
  }
}

export default Sidebar;
