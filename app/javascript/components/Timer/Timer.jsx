import React from 'react'

function Timer() {
  return(
    <div className='Timer bg-gray-100 my-0 mx-auto w-11/12 min-h-screen py-7 text-center'>
      <h1 className='text-3xl font-bold'>Let's get to work!</h1>
      <div className='text-5xl'>
        <span>25</span> :
        <span>00</span>
      </div>
      <div className='text-lg'>
          <span>Stop</span> |
          <span> Start</span> |
          <span> Pause</span>
      </div>
    </div>
  )
}

export default Timer
