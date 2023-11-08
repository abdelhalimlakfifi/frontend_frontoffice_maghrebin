import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import '../src/styles/index.css';
import { BrowserRouter } from 'react-router-dom';


//theme primereact
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-indigo/theme.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </BrowserRouter>
);
