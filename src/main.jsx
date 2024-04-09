import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/pages/homePage/HomePage.jsx";
import AboutUs from "./components/pages/homePage/aboutUs/AboutUs.jsx";
import UserLayout from "./components/UserLayout.jsx";
import Faqs from "./components/pages/homePage/faqs/Faqs.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout/>,
    // errorElement: <ErrorPage />,
    // loader: rootLoader,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/faqs",
        element: <Faqs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
