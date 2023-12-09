import React from "react";
import ReactDOM from "react-dom/client";
// import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"; // Replace BrowserRouter with HashRouter or MemoryRouter if needed
import App from "./App.jsx";
import { PrimeReactProvider } from "primereact/api";
import "./index.css";
import "primeicons/primeicons.css";
//theme primereact
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { Provider } from "react-redux";
import store from './components/ReduxStateManagement/store';

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <PrimeReactProvider>
        <App />
      </PrimeReactProvider>
    </Provider>
  </BrowserRouter>
);
