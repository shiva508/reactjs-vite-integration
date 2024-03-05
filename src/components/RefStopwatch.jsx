import { useRef, useState } from "react";

const RefStopwatch = () => {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const gameTimer = useRef(null);

  const startHandler = () => {
    setStartTime(Date.now());
    setNow(Date.now());
    clearInterval(gameTimer.current);
    gameTimer.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  };

  const stopHandler = () => {
    clearInterval(gameTimer.current);
  };

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <h1>Time took : {secondsPassed.toFixed(3)}</h1>
      <button onClick={startHandler}>Start</button>
      <button onClick={stopHandler}>Stop</button>
    </>
  );
};
export default RefStopwatch;
