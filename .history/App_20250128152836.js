import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App";
import "./index.css";

const Index = () => {
  return (
    <div>
      <App />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);
