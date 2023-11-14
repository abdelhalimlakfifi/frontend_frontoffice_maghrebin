
import React from "react";
import ReactDOM from "react-dom/client";
// import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"; // Replace BrowserRouter with HashRouter or MemoryRouter if needed
import App from "./App.jsx";
import { PrimeReactProvider } from "primereact/api";
import "./index.css";
import 'primeicons/primeicons.css';
//theme primereact
import "primereact/resources/themes/lara-light-indigo/theme.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </BrowserRouter>
);

