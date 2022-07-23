import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Navbar from './components/Navbar';
import Carts from './pages/Carts';
import Profile from './pages/Profile';
import { useEffect, useState } from 'react';



function App() {
  const [isLogedIn,setIslogedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('eshop_jwt');
    if (token) {
      setIslogedIn(true);
      
    }
  }, []);

  return (
    <Router>
      <Navbar isLogedIn={isLogedIn} s/>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/auth/login' element={<Auth isLogedIn={isLogedIn} login setIslogedIn={setIslogedIn} />} />
        <Route path='/auth/register' element={<Auth isLogedIn={isLogedIn} register />} />

        <Route path='/carts' element={<Carts isLogedIn={isLogedIn} />} />
        <Route path='/profile' element={<Profile setIslogedIn={setIslogedIn} isLogedIn={isLogedIn} />} />
      </Routes>
    
    </Router>
  );
}

export default App;
