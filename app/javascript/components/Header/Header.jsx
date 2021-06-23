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

  componentDidMount() {
    const menuLinks = document.querySelectorAll('.bm-item');
    menuLinks.forEach((link) => {
      link.classList.remove('border-gray-900', 'bg-gray-900', 'text-white');
      link.classList.add('border-white');
      if (link.getAttribute('href') == window.location.pathname) {
        link.classList.add('border-gray-900', 'bg-gray-900', 'text-white');
      }
    })
  }

  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})
  }

  closeMenu (event) {
    this.setState({menuOpen: false});
    const menuLinks = document.querySelectorAll('.bm-item');
    menuLinks.forEach((link) => {
      link.classList.remove('border-gray-900', 'bg-gray-900', 'text-white');
      link.classList.add('border-white');
    })
    event.target.classList.add('border-gray-900', 'bg-gray-900', 'text-white');
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

  setActiveSidebarLink(event) {
    const menuLinks = document.querySelectorAll('.bm-item');
    menuLinks.forEach((link) => {
      link.classList.remove('border-gray-900', 'bg-gray-900', 'text-white');
      link.classList.add('border-white');
      if (link.getAttribute('href') == event.target.parentElement.getAttribute('href')) {
        link.classList.add('border-gray-900', 'bg-gray-900', 'text-white');
      }
    })
  }

  render() {
    return (
      <>
        <Sidebar
          menuOpen={this.state.menuOpen}
          handleStateChange={this.handleStateChange}
          closeMenu={this.closeMenu}
          pathname={this.changeTitle(window.location.pathname)}
        />
        <div className="Header flex justify-between p-4 text-2xl h-16">
          <div className="Header-menu">
            <i className="fas fa-bars cursor-pointer" onClick={this.toggleMenu}></i>
            <span className="ml-4 font-light text-xl">
              {this.changeTitle(window.location.pathname)}
            </span>
          </div>
          <div className="Header-settings">
            <Link to="/settings" onClick={(event) => this.setActiveSidebarLink(event)}>
              <i className="fas fa-cog"></i>
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Header);
