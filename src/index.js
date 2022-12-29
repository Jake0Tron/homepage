import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import ErrorPage from "./ErrorPage";
import "./index.css";
import { NewsFeed } from "./routes";

import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Root from "./routes/Root/Root";
import { Parallax } from "./components/lib";
import Gallery from "./components/lib/Gallery";

const router = createHashRouter([
  {
    path: "/",
    exact: true,
    errorElement: <ErrorPage />,
    element: <Root />,
    children: [
      {
        path: "news",
        element: <NewsFeed />,
      },
      {
        path: "us",
        element: <Parallax />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
