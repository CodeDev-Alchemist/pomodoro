import React, {useState, useEffect} from "react";
import TimerDisplay from "./TimerDisplay";
import TimerControls from "./TimerControls";
import TimerState from "./TimerState";

const PomodoroTimer = () => {
  const [seconds, setSeconds] = useState(1500);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let intervalId; 
    if(isRunning) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds > 0) return prevSeconds - 1;
          setIsRunning(false)
          setIsBreak((prev) => !prev)
          return isBreak ? 1500 : 300
        });
      }, 1000);
    }
  
    return () => clearInterval(intervalId)
  }, [isRunning, isBreak])
  const handleStartStop = () => {
    setIsRunning((prev) => !prev)
  }
  const handleReset = () => {
    setIsRunning(false)
    setSeconds(isBreak ? 300 : 1500)
  }
  
  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
        <h1 className="text-center font-bold">Pomodoro Timer</h1>
        <TimerDisplay seconds = {seconds} />
        <TimerControls
          isRunning = {isRunning}
          onStartStop = {handleStartStop}
          onReset = {handleReset}
        />
        <TimerState isBreak = {isBreak}/>
    </div>
  )
}

export default PomodoroTimer;
