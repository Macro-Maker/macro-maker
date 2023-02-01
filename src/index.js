import React from "react";
import App from "./components/App";
import Error from "./components/Error";
import ReactDOM from "react-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "Login",
        element: <Login />,
      },
      {
        path: "Register",
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.render(
  <RouterProvider router={router} />,
  document.getElementById("App")
);
