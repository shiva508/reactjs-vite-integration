import { Link, useLoaderData, json } from "react-router-dom";
import EventsList from "../components/EventsList";
import { useEffect, useState } from "react";
const DUMMY = [
  {
    id: "e1",
    title: "Spoosos",
  },
  {
    id: "e2",
    title: "GFsffss idiwie",
  },
];

const EventsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedEvents, setFetchedEvents] = useState();
  const [error, setError] = useState();
  const response = useLoaderData();
  if (response.isError) {
    return <p>{response.message}</p>;
  }
  const events = response.events;
  // useEffect(() => {
  //   async function fetchEvents() {
  //     setIsLoading(true);
  //     const response = await fetch("http://localhost:8080/events");

  //     if (!response.ok) {
  //       setError("Fetching events failed.");
  //     } else {
  //       const resData = await response.json();
  //       setFetchedEvents(resData.events);
  //     }
  //     setIsLoading(false);
  //   }

  //   fetchEvents();
  // }, []);
  return (
    <>
      {/* <div style={{ textAlign: "center" }}>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </div>
      {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />} */}
      <EventsList events={events} />
    </>
  );

  // return (
  //   <>
  //     <h1>Events Page</h1>
  //     <ul>
  //       {DUMMY.map((myEvent) => (
  //         <li key={myEvent.id}>
  //           <Link to={myEvent.id}>{myEvent.title}</Link>
  //         </li>
  //       ))}
  //       <li>
  //         <Link to="/events/1">Event Detail Page</Link>
  //       </li>
  //       <li>
  //         <Link to="/events/1/edit">Edit Event Page</Link>
  //       </li>

  //       <li>
  //         <Link to="/events/new">New Event Page</Link>
  //       </li>
  //     </ul>
  //   </>
  // );
};
export default EventsPage;

export async function eventsLoader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: "Something went wrong" };
    // throw { message: "Something went wrong!" };
    // throw new Response(JSON.stringify({ message: "Something went wrong" }), {
    //   status: "500",
    // });
    console.log(response);
    throw json({ message: response.statusText }, { status: response.status });
  } else {
    return response;
  }
}
