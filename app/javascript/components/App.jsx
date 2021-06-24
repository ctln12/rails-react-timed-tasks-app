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

  saveSettings(settings) {
    this.setState((state) => ({
      focusSessionLength: settings.focusSessionLength,
      shortBreakLength: settings.shortBreakLength,
      longBreakLength: settings.longBreakLength,
      longBreakAfter: settings.longBreakAfter
    }))
    localStorage.setItem('focusSessionLength', this.state.focusSessionLength);
    localStorage.setItem('shortBreakLength', this.state.shortBreakLength);
    localStorage.setItem('longBreakLength', this.state.longBreakLength);
    localStorage.setItem('longBreakAfter', this.state.longBreakAfter);
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
          saveSettings={this.saveSettings}
        />
      </div>
    );
  }
}

export default App;
