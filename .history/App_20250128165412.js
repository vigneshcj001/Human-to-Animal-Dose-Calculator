import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Components/Header";
import Body from "./src/Components/Body";
import ContactUs from "./src/Components/ContactUs";
import ErrorWrapper from "./src/Components/ErrorWrapper";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Header/>
      {/**<Header />
      <Outlet />**/}
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
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
