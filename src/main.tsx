import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Render the App component, passing the title prop
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
