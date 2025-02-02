import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Components/Header";
import Body from "./src/Components/Body";
import ContactUs from "./src/Components/ContactUs";
import AboutUs from "./src/Components/AboutUs";
import ErrorWrapper from "./src/Components/ErrorWrapper";
import Copyright from "./src/Components/Copyright";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Copyright/>
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorWrapper />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      }
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

