import { useRef } from "react";
import InputComponent from "./InputComponent";

const FormComponent = () => {
  const inputRef = useRef(null);
  const changeFocusHandler = () => {
    inputRef.current.focus();
  };
  return (
    <>
      <InputComponent ref={inputRef} name="User Name" />
      <button onClick={changeFocusHandler}>Focus</button>
    </>
  );
};
export default FormComponent;
