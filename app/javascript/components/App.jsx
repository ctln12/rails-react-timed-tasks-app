import React, { Component } from 'react';
import Routes from '../routes/routes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathname: window.location.pathname,
      focusSessionLength: '',
      shortBreakLength: '',
      longBreakLength: '',
      longBreakAfter: ''
    };
    this.changePathname = this.changePathname.bind(this);
    this.changeSettings = this.changeSettings.bind(this);
    this.saveSettings = this.saveSettings.bind(this);
  }

  componentDidMount() {
    this.setActiveSidebarLink(window.location.pathname);
    const focusSessionLength = localStorage.getItem('focusSessionLength') || '25';
    const shortBreakLength = localStorage.getItem('shortBreakLength') || '5';
    const longBreakLength = localStorage.getItem('longBreakLength') || '15';
    const longBreakAfter = localStorage.getItem('longBreakAfter') || '4';
    this.setState({ focusSessionLength, shortBreakLength, longBreakLength, longBreakAfter });
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

  changeSettings(event) {
    this.setState({[event.target.id]: event.target.value});
  }

  saveSettings() {
    const { focusSessionLength, shortBreakLength, longBreakLength, longBreakAfter } = this.state;
    localStorage.setItem('focusSessionLength', focusSessionLength);
    localStorage.setItem('shortBreakLength', shortBreakLength);
    localStorage.setItem('longBreakLength', longBreakLength);
    localStorage.setItem('longBreakAfter', longBreakAfter);
  }

  render() {
    return (
      <div className="App">
        <Routes
          focusSessionLength={this.state.focusSessionLength}
          shortBreakLength={this.state.shortBreakLength}
          longBreakLength={this.state.longBreakLength}
          longBreakAfter={this.state.longBreakAfter}
          changePathname={this.changePathname}
          changeSettings={this.changeSettings}
          saveSettings={this.saveSettings}
        />
      </div>
    );
  }
}

export default App;
