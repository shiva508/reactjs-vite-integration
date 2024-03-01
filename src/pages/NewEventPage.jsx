import { json, redirect } from "react-router-dom";
import EventForm from "../components/EventForm";
const NewEventPage = () => {
  return (
    <>
      <EventForm />
      {/* <h1>New Event Page</h1>
      <Link to=".." relative="path">
        Back
      </Link> */}
    </>
  );
};
export default NewEventPage;

export async function addNewEventAction({ request, params }) {
  const data = await request.formData();

  const enteredData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };
  const response = await fetch("http://localhost:8080/events/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(enteredData),
  });
  if (response.status == 422) {
    return response;
  }
  if (!response.ok) {
    // return { isError: true, message: "Something went wrong" };
    // throw { message: "Something went wrong!" };
    // throw new Response(JSON.stringify({ message: "Something went wrong" }), {
    //   status: "500",
    // });
    console.log(response);
    throw json({ message: response.statusText }, { status: response.status });
  } else {
    return redirect("/events");
  }
}
