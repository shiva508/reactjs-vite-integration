import { useRef, useState } from "react";
import ResultModel from "./ResultModel";
//let timer;
const TimerChallenge = ({ title, targetTime }) => {
  const timer = useRef();
  const [timerExpaired, setTimerExpaired] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);
  const dailog = useRef();

  const startTimerHandler = () => {
    timer.current = setTimeout(() => {
      setTimerExpaired(true);
      setTimerStarted(false);
      dailog.current.open();
    }, targetTime * 1000);
    setTimerStarted(true);
  };
  const stopTimerHandler = () => {
    clearTimeout(timer.current);
    setTimerStarted(false);
  };
  return (
    <>
      {timerExpaired && (
        <ResultModel ref={dailog} targetTime={targetTime} result="Won" />
      )}

      <section className="challenge">
        <h2>{title}</h2>
        {timerExpaired ? <p>You have lost</p> : ""}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button
            onClick={!timerStarted ? startTimerHandler : stopTimerHandler}
          >
            {!timerStarted ? <p>Start Challenge</p> : <p>Stop Challenge</p>}
          </button>
        </p>
        <p className={timerStarted ? "active" : ""}>
          {!timerStarted ? "Timer stoped" : "Timer running"}
        </p>
      </section>
    </>
  );
};
export default TimerChallenge;
