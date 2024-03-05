import { useRef } from "react";

const RefBasic = () => {
  let counter = useRef(0);
  const onIncreament = () => {
    counter.current = counter.current + 1;
    alert("You clicked " + counter.current + " times");
  };
  return (
    <>
      <button onClick={onIncreament}>Click </button>
    </>
  );
};
export default RefBasic;
