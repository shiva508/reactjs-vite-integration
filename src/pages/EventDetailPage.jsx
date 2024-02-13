import { Link } from "react-router-dom";
const EventDetailPage = () => {
  return (
    <>
      <h1>Event Detail Page</h1>{" "}
      <Link to=".." relative="path">
        Back
      </Link>
    </>
  );
};
export default EventDetailPage;
