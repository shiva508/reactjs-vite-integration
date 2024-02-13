import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import VideoPage from "./components/VideoPage";
import RootLayout from "./components/RootLayout";
import ErrorPage from "./components/ErrorPage";
import WaterProject from "./components/WaterProject";
import WaterProjectDetails from "./components/WaterProjectDetails";

// const routeDefination = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />}></Route>
//     <Route path="/video" element={<VideoPage />}></Route>
//   </Route>
// );
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     errorElement: <ErrorPage />,
//     children: [
//       { path: "/", element: <HomePage /> },
//       { path: "/video", element: <VideoPage /> },
//       { path: "/waterProject", element: <WaterProject /> },
//       { path: "/waterProject/:id", element: <WaterProjectDetails /> },
//     ],
//   },
// ]);
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "video", element: <VideoPage /> },
      { path: "waterProject", element: <WaterProject /> },
      { path: "waterProject/:id", element: <WaterProjectDetails /> },
    ],
  },
]);

// const router = createBrowserRouter(routeDefination);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
