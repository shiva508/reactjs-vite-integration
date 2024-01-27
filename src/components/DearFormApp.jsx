import DearForm from "./DearForm";
import "./DearFormApp.css";
const DearFormApp = () => {
  function handleRestart() {}

  return (
    <div id="app">
      <button onClick={handleRestart}>Restart</button>
      <DearForm />
    </div>
  );
};
export default DearFormApp;
