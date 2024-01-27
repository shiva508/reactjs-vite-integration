import { useRef } from "react";
import "./Workout.css";

const Workout = ({ title, description, time, onComplete }) => {
  const workoutTimer = useRef();
  const handleStartWorkout = () => {
    workoutTimer.current = setTimeout(() => {
      onComplete("Timedout");
    }, time * 1);
  };

  const handleStopWorkout = () => {
    clearTimeout(workoutTimer.current);
    onComplete("Manually");
  };
  return (
    <article className="workout">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{time}</p>
      <p>
        <button onClick={handleStartWorkout}>Start</button>
        <button onClick={handleStopWorkout}>Stop</button>
      </p>
    </article>
  );
};
export default Workout;
