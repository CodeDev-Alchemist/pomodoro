import React from 'react'

function TimerState({isBreak}) {
  
  return (

    <div>
      <div className="text-center ">
        {isBreak ? 'Break time!' : 'Focus Time'}
      </div>
    </div>
  )
}

export default TimerState
