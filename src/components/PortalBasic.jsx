import { createPortal } from "react-dom";

const PortalBasic = () => {
  const content = createPortal(
    <p>This child is placed in the document body.</p>,
    document.body
  );
  return (
    <>
      <div style={{ border: "2px solid black" }}>
        <p>This is child attribute</p>
        {content}
      </div>
    </>
  );
};
export default PortalBasic;
