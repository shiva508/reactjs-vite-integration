import { createPortal } from "react-dom";
import "./App.css";
import DearFormApp from "./components/DearFormApp";
import FormComponent from "./components/FormComponent";
import ImagePIcker from "./components/ImagePIcker";
import InputApp from "./components/InputApp";
import Player from "./components/Player";
import PortalBasic from "./components/PortalBasic";
import RefBasic from "./components/RefBasic";
import RefStopwatch from "./components/RefStopwatch";
import TimerChallenge from "./components/TimerChallenge";
import WorkoutApp from "./components/WorkoutApp";
import WithoutPortal from "./components/portal/WithoutPortal";
import WithPortal from "./components/portal/WithPortal";
function App() {
  return (
    <>
      <WithPortal />
      {/* <WithoutPortal /> */}
      {/* <PortalBasic /> */}
      {/* <FormComponent /> */}
      {/* <RefStopwatch /> */}
      {/* <RefBasic /> */}
      {/* <DearFormApp /> */}
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
