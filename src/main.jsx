import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import '../src/styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <PrimeReactProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PrimeReactProvider>
  </>
);
