import React from 'react'
import classNames from "classnames"

function TimerControls({isRunning, onStartStop, onReset}) {
  return (
    <div className="flex justify-center mt-2 mb-4 gap-3">
      <button
        className={classNames(
          "text-white font-bold py-2 px-4 rounded-lg",
          {
            "bg-red-500 hover:bg-red-700" : isRunning,
            "bg-green-500 hover:bg-green-700" : !isRunning
          }
        )}
        onClick={onStartStop}
      >
        {isRunning ? "Stop" : "Start"}
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold  px-4 rounded-lg"
        onClick={onReset}
      >
        Reset
      </button>
    </div>
  );
}

export default TimerControls
