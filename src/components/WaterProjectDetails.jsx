import { Link, useParams } from "react-router-dom";

const WaterProjectDetails = () => {
  const params = useParams();
  return (
    <>
      <h1>Water Project Details</h1>
      <h2>{params.id}</h2>
      <Link to=".." relative="path">
        Back
      </Link>
    </>
  );
};
export default WaterProjectDetails;
