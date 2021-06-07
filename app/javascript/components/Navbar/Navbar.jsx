import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'Timer'
    }
  }

  changeTitle = (pathname) => {
    if (pathname === '/') {
      return 'Timer';
    } else {
      let title = pathname.replace('/', '');
      return title.charAt(0).toUpperCase() + title.slice(1);
    }
  }

  componentDidMount() {
    this.setState({ title: this.changeTitle(window.location.pathname) });
  }

  render() {
    return (
      <div className="Navbar flex justify-between p-4 text-2xl h-16">
        <div className="Navbar-menu">
          <i className="fas fa-bars"></i>
          <span className="ml-4 font-light text-xl">{this.state.title}</span>
        </div>
        <div className="Navbar-settings">
          <Link to="/settings">
            <i className="fas fa-cog"></i>
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(Navbar);
