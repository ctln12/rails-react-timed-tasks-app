import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import Sidebar from '../Sidebar/Sidebar';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false };
    this.handleStateChange = this.handleStateChange.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})
  }

  closeMenu () {
    this.setState({menuOpen: false})
  }

  toggleMenu () {
    this.setState(state => ({menuOpen: !state.menuOpen}))
  }

  changeTitle = (pathname) => {
    if (pathname === '/') {
      return 'Timer';
    } else {
      let title = pathname.replace('/', '');
      return title.charAt(0).toUpperCase() + title.slice(1);
    }
  }

  render() {
    return (
      <>
        <Sidebar
          menuOpen={this.state.menuOpen}
          handleStateChange={this.handleStateChange}
          closeMenu={this.closeMenu}
        />
        <div className="Header flex justify-between p-4 text-2xl h-16">
          <div className="Header-menu">
            <i className="fas fa-bars" onClick={this.toggleMenu}></i>
            <span className="ml-4 font-light text-xl">
              {this.changeTitle(window.location.pathname)}
            </span>
          </div>
          <div className="Header-settings">
            <Link to="/settings">
              <i className="fas fa-cog"></i>
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Header);
