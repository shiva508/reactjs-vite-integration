import { useRef } from "react";
import reactImage from "../assets/cai-fang.jpg";
const ImagePIcker = () => {
  const imageRef = useRef();
  const imagePickHandler = () => {
    console.log(imageRef.current.img);
  };
  return (
    <>
      <img src={reactImage} ref={imageRef} style={{ width: 100 }}></img>
      <button onClick={imagePickHandler}>Pick Image</button>
    </>
  );
};
export default ImagePIcker;
