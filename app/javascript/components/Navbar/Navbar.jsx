import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';

class Navbar extends Component {
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

  closeMenu (event) {
    this.setState({menuOpen: false});
    this.props.changePathname(event);
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
      <div className="Navbar">
        <Sidebar
          menuOpen={this.state.menuOpen}
          handleStateChange={this.handleStateChange}
          closeMenu={this.closeMenu}
        />
        <Header
          toggleMenu={this.toggleMenu}
          changeTitle={this.changeTitle}
          changePathname={this.props.changePathname}
        />
      </div>
    );
  }
}

export default Navbar;
