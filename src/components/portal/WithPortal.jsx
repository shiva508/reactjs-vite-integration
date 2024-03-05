import { createPortal } from "react-dom";
import ModelComponent from "./ModelComponent";
import { useState } from "react";

const WithPortal = () => {
  const [showModal, setShowModal] = useState(false);
  const showModalHanler = () => {
    setShowModal(true);
  };
  const closeModalHandler = () => {
    setShowModal(false);
  };
  return (
    <>
      <button onClick={showModalHanler}>Show modal without portal</button>
      {showModal &&
        createPortal(
          <ModelComponent closeHandler={closeModalHandler} />,
          document.body
        )}
    </>
  );
};
export default WithPortal;
