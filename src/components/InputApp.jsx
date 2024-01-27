import { useRef } from "react";
import Input from "./Input";
import "./InputApp.css";

export const userData = {
  name: "",
  email: "",
};

const InputApp = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  function handleSaveData() {
    userData.name = nameRef.current.value;
    userData.email = emailRef.current.value;
    console.log(userData);
  }

  return (
    <div id="app">
      <Input ref={nameRef} type="text" label="Your Name" />
      <Input ref={emailRef} type="email" label="Your E-Mail" />
      <p id="actions">
        <button onClick={handleSaveData}>Save Data</button>
      </p>
    </div>
  );
};
export default InputApp;
