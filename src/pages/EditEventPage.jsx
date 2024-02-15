import { Link, useLoaderData, useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

const EditEventPage = () => {
  const data = useRouteLoaderData("event-details");
  return (
    <>
      <EventForm event={data.event} />
      {/* <h1>Edit Event Page</h1>
      <Link to=".." relative="path">
        Back
      </Link> */}
    </>
  );
};
export default EditEventPage;
