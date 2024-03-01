import { Form, useActionData, useNavigate } from "react-router-dom";

import classes from "./EventForm.module.css";
import { useState } from "react";

function EventForm({ method, event }) {
  const errorMessage = useState(null);
  const navigate = useNavigate();
  const formResponse = useActionData();
  console.log(formResponse);
  function cancelHandler() {
    navigate("..");
  }

  return (
    <Form method="POST" className={classes.form}>
      {formResponse && formResponse.errors && (
        <ul>
          {Object.values(formResponse.errors).map((error) => (
            <li key={error.title}>{error.title}</li>
          ))}
        </ul>
      )}
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          defaultValue={event ? event.title : ""}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          defaultValue={event ? event.image : ""}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          defaultValue={event ? event.date : ""}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          defaultValue={event ? event.description : ""}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button>Save</button>
      </div>
    </Form>
  );
}

export default EventForm;
