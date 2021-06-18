import React, { Component } from 'react';

class Settings extends Component {
  constructor(props){
    super(props);
    this.state = {
      focusSessionLength: 25,
      shortBreakLength: 5,
      longBreakLength: 15,
      longBeakAfter: 4
    }
    this.handleSelectFocusSession = this.handleSelectFocusSession.bind(this);
    this.handleSelectShortBreak = this.handleSelectShortBreak.bind(this);
    this.handleSelectLongBreak = this.handleSelectLongBreak.bind(this);
    this.handleSelectBreakAfter = this.handleSelectBreakAfter.bind(this);
  }

  handleSelectFocusSession(event) {
    this.setState({focusSessionLength: event.target.value});
  }
  handleSelectShortBreak(event) {
    this.setState({shortBreakLength: event.target.value});
  }
  handleSelectLongBreak(event) {
    this.setState({longBreakLength: event.target.value});
  }
  handleSelectBreakAfter(event) {
    this.setState({longBreakAfter: event.target.value});
  }

  render() {
    return (
      <div className="Settings">
        <form>
          <div>
            <label>
              Focus Session Length:
              <select value={this.state.focusSessionLength} onChange={this.handleSelectFocusSession}>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              Short Break Length:
              <select value={this.state.shortBreakLength} onChange={this.handleSelectShortBreak}>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              Long Break Length:
              <select value={this.state.longBreakLength} onChange={this.handleSelectLongBreak}>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              Long Break After:
              <select value={this.state.longBeakAfter} onChange={this.handleSelectBreakAfter}>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </label>
          </div>
          <div>
            <input type="submit" value="Save" />
          </div>
        </form>
      </div>
    );
  }
}

export default Settings;
