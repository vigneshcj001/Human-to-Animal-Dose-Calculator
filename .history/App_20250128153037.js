import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/Body";
import "./index.css";

const App = () => {
  return (
    <div>
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
