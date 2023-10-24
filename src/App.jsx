import '../src/styles/App.css';
import NavBar from './components/navbar/Navbar';
import '../src/styles/navbar.css';
import { Route, Routes } from 'react-router-dom';
// import { Home, Men, Women, Kids } from './components/pages/index' // remember to move all folders into index.js to lean up the code
import Home from './components/pages/Home';
import Men from './components/pages/Men';
import Women from './components/pages/Women';
import Kids from './components/pages/Kids';

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/home' element={<Home />}/>
      <Route path='/men' element={<Men />}/>
      <Route path='/woman' element={<Women />}/>
      <Route path='/kids' element={<Kids />}/>
    </Routes>
    </>
  )
}

export default App
