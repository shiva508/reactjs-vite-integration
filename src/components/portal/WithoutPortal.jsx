import { useState } from "react";
import { createPortal } from "react-dom";
import ModelComponent from "./ModelComponent";

const WithoutPortal = () => {
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
      {showModal && <ModelComponent closeHandler={closeModalHandler} />}
    </>
  );
};
export default WithoutPortal;
