import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./layout/Form";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>NOT FOUND!👻</h1>,
  },
  {
    path: "/form",
    element: <Form />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
