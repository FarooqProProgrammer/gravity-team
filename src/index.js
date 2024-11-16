import "@fontsource-variable/inter";
import "@fontsource/roboto";
import "@fontsource/plus-jakarta-sans";
import "@fontsource/space-grotesk";
import "@fontsource-variable/manrope";
import "./assets/css/bootstrap.css";
import "./assets/css/style.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/index.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
