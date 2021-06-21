import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";

class Header extends Component {
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
      <div className="Header flex justify-between p-4 text-2xl h-16">
        <div className="Header-menu">
          <i className="fas fa-bars"></i>
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
    );
  }
}

export default withRouter(Header);
