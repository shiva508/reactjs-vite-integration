import {
  Link,
  redirect,
  useLoaderData,
  useParams,
  useRouteLoaderData,
} from "react-router-dom";
import EventItem from "../components/EventItem";
const EventDetailPage = () => {
  const params = useParams();
  const data = useRouteLoaderData("event-details");
  return (
    <>
      <EventItem event={data.event} />
      {/* <h1>Event Detail Page</h1>
      <h2>{params.eventId}</h2>
      <Link to=".." relative="path">
        Back
      </Link> */}
    </>
  );
};
export default EventDetailPage;

export async function eventByIdLoader({ request, params }) {
  const eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + eventId);

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

export async function deleteEventAction({ params, request }) {
  const eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method,
  });

  if (response.status == 422) {
    return response;
  }
  if (!response.ok) {
    throw json({ message: response.statusText }, { status: response.status });
  } else {
    return redirect("/events");
  }
}
