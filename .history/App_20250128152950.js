import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/Body";
import "./index.css";

const App = () => {
  return (
    <div>
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);
