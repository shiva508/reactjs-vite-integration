import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage, { jobLoder } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";

function App() {
  const addNewJobHandler = async (newJob) => {
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });

    return;
  };

  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
    return;
  };
  const router = createBrowserRouter([
    {
      path: "",
      element: <MainLayout />,

      children: [
        { index: true, element: <HomePage /> },
        { path: "/jobs", element: <JobsPage /> },
        {
          path: "/jobs/:id",
          element: <JobPage deleteJob={deleteJob} />,
          loader: jobLoder,
        },
        {
          path: "/add-job",
          element: <AddJobPage addJobSubmit={addNewJobHandler} />,
        },
        { path: "*", element: <NotFoundPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
