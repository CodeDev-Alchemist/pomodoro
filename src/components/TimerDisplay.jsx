import React from 'react'


function TimerDisplay({seconds}) {

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds /60)
    const secondsRemaining = seconds % 60
    return `${minutes.toString().padStart(2, "0")}:${secondsRemaining
      .toString()
      .padStart(2, "0")}`;
  }

  return (
    <div className='flex justify-center'>
      <div className="text-5xl font-bold">{formatTime(seconds)}</div>
    </div>
  )
}

export default TimerDisplay
