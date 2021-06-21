import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Settings extends Component {
  constructor(props){
    super(props);
    this.state = {
      focusSessionLength: 25,
      shortBreakLength: 5,
      longBreakLength: 15,
      longBreakAfter: 4
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.id]: event.target.value});
  }

  handleSubmit(event) {
    alert('Saving new settings...');
    // JSON.parse(localStorage.getItem('allProjects')) || []
    event.preventDefault();
  }

  createSelectItems(max, unit) {
    let items = [];
    for (let i = 1; i <= max; i++) {
        items.push(<option key={i} value={i}>{i} {unit}</option>);
    }
    return items;
  }

  render() {
    return (
      <div className="Settings">
        <form onSubmit={this.handleSubmit}>
          <label className="block mb-8">
            Focus Session Length
            <select
              className="block w-full mt-1 rounded border-gray-300 shadow-sm max-h-10"
              id="focusSessionLength"
              value={this.state.focusSessionLength}
              onChange={this.handleChange}>
              {this.createSelectItems(240, 'minutes')}
            </select>
          </label>
          <label className="block mb-8">
            Short Break Length
            <select
              className="block w-full mt-1 rounded border-gray-300 shadow-sm"
              id="shortBreakLength"
              value={this.state.shortBreakLength}
              onChange={this.handleChange}>
              {this.createSelectItems(240, 'minutes')}
            </select>
          </label>
          <label className="block mb-8">
            Long Break Length
            <select
              className="block w-full mt-1 rounded border-gray-300 shadow-sm"
              id="longBreakLength"
              value={this.state.longBreakLength}
              onChange={this.handleChange}>
              {this.createSelectItems(240, 'minutes')}
            </select>
          </label>
          <label className="block mb-8">
            Long Break After
            <select
              className="block w-full mt-1 rounded border-gray-300 shadow-sm"
              id="longBreakAfter"
              value={this.state.longBreakAfter}
              onChange={this.handleChange}>
              {this.createSelectItems(60, 'focus sessions')}
            </select>
          </label>
          <input type="submit" value="Save" className="bg-gray-900 text-white py-3 rounded-sm w-full" />
        </form>
        <Link to="/" className="block text-center mt-2 border border-gray-900 text-gray-900 py-3 rounded-sm w-full">
          Back to timer
        </Link>
      </div>
    );
  }
}

export default Settings;
