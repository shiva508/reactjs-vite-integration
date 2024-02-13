import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigation = useNavigate();
  const programaticRoutHandler = () => {
    navigation("/waterProject");
  };
  return (
    <>
      <h1>Home Page</h1>
      {/* <Link to="/video">Videos Page</Link> */}
      <button onClick={programaticRoutHandler}>Programatic Routing</button>
    </>
  );
};
export default HomePage;
