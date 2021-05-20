import React, { Fragment, useState } from 'react'
import { CountdownCircleTimer } from "react-countdown-circle-timer"

const children = ({ remainingTime }) => {
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

const renderTime = ({ remainingTime }) => {
  return (
    <div className="font-timer text-5xl text-gray-800">{children({ remainingTime })}</div>
  );
};

function App() {
  const [status, setStatus] = useState(false);
  const [key, setKey] = useState(0);
  return (
    <div className="p-4 min-h-screen flex flex-col justify-between">
      <h1 className="font-bold mb-10 text-3xl text-center">Let's get to work!</h1>
      <div className="flex justify-center">
        <CountdownCircleTimer
          key={key}
          isPlaying={status}
          duration={25*60}
          colors="#A5A5A5"
          size={240}
          strokeWidth={12}
          onComplete={() => {
            setStatus((prevStatus) => !prevStatus);
            return [true, 1000];
          }}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
      <div className="mt-10 text-lg text-center flex gap-x-2">
        <button className="bg-gray-800 text-white py-3 px-6 rounded w-full" onClick={() => setStatus((prevStatus) => !prevStatus)}>
          Start
        </button>
        <button className="bg-gray-800 text-white py-3 px-6 rounded w-full" onClick={() => setStatus((prevStatus) => !prevStatus)}>
          Pause
        </button>
        <button className="bg-gray-800 text-white py-3 px-6 rounded w-full" onClick={() => setKey((prevKey) => prevKey + 1)}>Stop</button>
      </div>
    </div>
  );
}

export default App
