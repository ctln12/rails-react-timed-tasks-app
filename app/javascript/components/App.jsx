import React, { Component, Fragment, useState } from 'react'
import { CountdownCircleTimer } from "react-countdown-circle-timer"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      duration: 10,
      status: false,
      key: 0
    }
    this.startButton = React.createRef();
    this.pauseButton = React.createRef();
    this.stopButton = React.createRef();
    this.startTimer = this.startTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }

  children = ({ remainingTime }) => {
    let minutes = Math.floor(remainingTime / 60);
    let seconds = remainingTime % 60;
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
  };

  renderTime = ({ remainingTime }) => {
    return (
      <div className="font-timer text-5xl text-gray-800">{this.children({ remainingTime })}</div>
    );
  };

  startTimer() {
    this.setState({
      status: true
    });
    this.startButton.current.classList.add('hidden');
    this.pauseButton.current.classList.remove('hidden');
    console.log("Timer started...");
  }

  pauseTimer() {
    this.setState({
      status: false
    });
    this.pauseButton.current.classList.add('hidden');
    this.startButton.current.classList.remove('hidden');
    console.log("Timer paused.");
  }

  stopTimer() {
    this.setState({
      status: false,
      key: this.state.key + 1,
    });
    this.pauseButton.current.classList.add('hidden');
    this.startButton.current.classList.remove('hidden');
    console.log("Timer stopped!");
  }

  render() {
  const { duration, status, key } = this.state;
    return (
      <div className="p-4 min-h-screen flex flex-col justify-between">
        <h1 className="font-bold mb-10 text-3xl text-gray-800 text-center">Let's get to work!</h1>
        <div className="flex justify-center">
          <CountdownCircleTimer
            key={key}
            isPlaying={status}
            duration={duration}
            colors="#A5A5A5"
            size={240}
            strokeWidth={12}
            onComplete={this.stopTimer}
          >
            {this.renderTime}
          </CountdownCircleTimer>
        </div>
        <div className="mt-10 text-lg text-center flex gap-x-2">
          <button
            className="bg-gray-800 text-white py-3 px-6 rounded w-full"
            ref={this.startButton}
            onClick={this.startTimer}>Start</button>
          <button
            className="bg-gray-800 text-white py-3 px-6 rounded w-full hidden"
            ref={this.pauseButton}
            onClick={this.pauseTimer}>Pause</button>
          <button
            className="bg-gray-800 text-white py-3 px-6 rounded w-full"
            ref={this.stopButton}
            onClick={this.stopTimer}>Stop</button>
        </div>
      </div>
    );
  }
}

export default App
