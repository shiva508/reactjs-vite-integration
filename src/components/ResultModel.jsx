import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModel = forwardRef(({ result, targetTime }, ref) => {
  const dailog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dailog.current.showModal();
      },
    };
  });
  return (
    <dialog ref={dailog} className="result-modal" open>
      <h2>You have {result}</h2>
      <p>
        Target time was <strong>{targetTime}</strong> seconds
      </p>
      <p>
        You stopped timer with <strong>X</strong> seconds left
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});
export default ResultModel;
