// Importing the core React library
import React from "react";
// Importing the ReactDOM package
import ReactDOM from "react-dom/client";
// Imports the main component of application, App from a local file.
import App from "./App";

// Rendering root
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
