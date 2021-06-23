import React, { Component } from 'react';
import Routes from '../routes/routes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { pathname: window.location.pathname };
    this.changePathname = this.changePathname.bind(this);
  }

  componentDidMount() {
    this.setActiveSidebarLink(window.location.pathname);
  }

  changePathname(event) {
    const newPathname = event.target.parentElement.getAttribute('href') || event.target.getAttribute('href');
    this.setState({pathname: newPathname});
    this.setActiveSidebarLink(newPathname);
  }

  setActiveSidebarLink(pathname) {
    const menuLinks = document.querySelectorAll('.bm-item');
    menuLinks.forEach((link) => {
      link.classList.remove('border-gray-900', 'bg-gray-900', 'text-white');
      link.classList.add('border-white');
      if (link.getAttribute('href') == pathname) {
        link.classList.add('border-gray-900', 'bg-gray-900', 'text-white');
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Routes changePathname={this.changePathname} />
      </div>
    );
  }
}

export default App;
