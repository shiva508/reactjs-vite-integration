import { forwardRef } from "react";

const InputComponent = forwardRef((props, inputRef) => {
  return (
    <>
      <label>{props.name}</label>
      <input {...props} ref={inputRef} />
    </>
  );
});
export default InputComponent;
