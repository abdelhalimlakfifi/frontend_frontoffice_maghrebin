import '../src/styles/App.css';
import NavBar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import handleRoutes from './routes/routes';
import SignUpForm from './components/forms/SignUpForm';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {handleRoutes.map(({ path, element }, key) => (
          <Route key={key} path={path} element={element} />
        ))}
      </Routes>
      <SignUpForm />
    </>
  );
}

export default App;



