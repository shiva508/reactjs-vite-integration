import "./App.css";
import DearFormApp from "./components/DearFormApp";
import ImagePIcker from "./components/ImagePIcker";
import InputApp from "./components/InputApp";
import Player from "./components/Player";
import TimerChallenge from "./components/TimerChallenge";
import WorkoutApp from "./components/WorkoutApp";
function App() {
  return (
    <>
      <DearFormApp />
      {/* <WorkoutApp /> */}
      {/* <InputApp /> */}
      {/* <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={2} />
        <TimerChallenge title="Not Easy" targetTime={4} />
        <TimerChallenge title="Hard" targetTime={6} />
        <TimerChallenge title="Pros only" targetTime={8} />
      </div> */}
    </>
  );
}

export default App;
