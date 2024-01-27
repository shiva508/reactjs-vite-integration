import { forwardRef, useRef } from "react";

const DearForm = forwardRef(() => {
  const nameRef = useRef();
  const emailRef = useRef();
  const saveForm = (event) => {
    event.preventDefault();
  };
  const clearSubmitForm = () => {
    nameRef.current = "";
    emailRef.current = "";
  };
  return (
    <form>
      <p>
        <label>Name</label>
        <input type="text" ref={nameRef} />
      </p>

      <p>
        <label>Email</label>
        <input type="email" ref={emailRef} />
      </p>
      <p id="actions">
        <button onClick={saveForm}>Save</button>
      </p>
    </form>
  );
});
export default DearForm;
