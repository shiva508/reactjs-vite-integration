import { forwardRef } from "react";

const Input = forwardRef(({ type, label }, ref) => {
  return (
    <p className="control">
      <label>{label}</label>
      <input ref={ref} type={type} />
    </p>
  );
});
export default Input;
