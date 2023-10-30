import '../src/styles/App.css';
import NavBar from './components/navbar/Navbar';
import '../src/styles/navbar.css';
import { Route, Routes } from 'react-router-dom';
import handleRoutes from './routes/routes';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {handleRoutes.map(({ path, element }, key) => (
          <Route key={key} path={path} element={element} />
        ))}
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
