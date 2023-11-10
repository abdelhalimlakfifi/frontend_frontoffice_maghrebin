import { Route, Routes } from 'react-router-dom';

import handleRoutes from './routes/routes';
import NavBar from './components/navbar/Navbar';
import SizeGuide from './components/SizeGuide/SizeGuide';
import LandingPage from './components/views/LandingPage';
import Footer from './components/footer/Footer';
import SignUpForm from './components/forms/SignUp/SignUpForm';
import Login from './components/forms/login/Login'


function App() {
  return (
    <>

      <NavBar />
      {/* <Routes>
        {handleRoutes.map(({ path, element }, key) => (
          <Route key={key} path={path} element={element} />
        ))}
      </Routes> */}
      {/* <LandingPage /> */}
      
      {/* <SizeGuide /> */}
      {/* <SignUpForm /> */}
      <Login />
      {/* <Footer /> */}
    </>
  );
}

export default App;
