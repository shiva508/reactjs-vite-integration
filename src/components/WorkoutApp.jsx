import { useState } from "react";
import Workout from "./Workout";

const workouts = [
  {
    title: "Pushups",
    description: "Do 30 pushups",
    time: 1000 * 60 * 3,
  },
  {
    title: "Squats",
    description: "Do 30 squats",
    time: 1000 * 60 * 2,
  },
  {
    title: "Pullups",
    description: "Do 10 pullups",
    time: 1000 * 60 * 3,
  },
];
const WorkoutApp = () => {
  const [completedWorkouts, setCompletedWorkouts] = useState([]);

  function handleWorkoutComplete(workoutTitle, stopType) {
    setCompletedWorkouts((prevCompletedWorkouts) => [
      ...prevCompletedWorkouts,
      workoutTitle + "-" + stopType,
    ]);
  }
  return (
    <main>
      <section>
        <h2>Choose a workout</h2>
        <ul>
          {workouts.map((workout) => (
            <li key={workout.title}>
              <Workout
                {...workout}
                onComplete={(stopType) =>
                  handleWorkoutComplete(workout.title, stopType)
                }
              />
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Completed workouts</h2>
        <ul>
          {completedWorkouts.map((workoutTitle, index) => (
            <li key={index}>{workoutTitle}</li>
          ))}
        </ul>
      </section>
    </main>
  );
};
export default WorkoutApp;
