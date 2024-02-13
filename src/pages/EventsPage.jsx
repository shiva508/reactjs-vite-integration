import { Link } from "react-router-dom";
const EventsPage = () => {
  return (
    <>
      <h1>Events Page</h1>
      <ul>
        <li>
          <Link to="/events/1">Event Detail Page</Link>
        </li>
        <li>
          <Link to="/events/1/edit">Edit Event Page</Link>
        </li>

        <li>
          <Link to="/events/new">New Event Page</Link>
        </li>
      </ul>
    </>
  );
};
export default EventsPage;
