import { Route, Routes } from 'react-router-dom';
import handleRoutes from './routes/routes';
import NavBar from './components/navbar/Navbar';
import SignUpForm from './components/forms/SignUp/SignUpForm';
// import Login from './components/forms/login/Login';
import Footer from './components/footer/Footer'

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
      {/* <Login /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;



