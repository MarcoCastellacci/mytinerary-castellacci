import React , {useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';


import '../src/styles/App.css';
import "swiper/css/bundle";
import "../src/styles/styles.css";

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Cities from './pages/Cities';
import Contact from './pages/Contact';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignIn';
import NonPage from './pages/NonPage';
import Index from './pages/Index';
import Details from './pages/Details';


function App() {

useEffect(() => {
    setTimeout(() => {
    window.scrollTo(0, 0);
    }, 500)
}, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/cities" element={<Cities/>} />
        <Route path="/cities/city/:id" element={<Details/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<LogIn/>} />
        <Route path="/signup" element={<SignUp/>} />  
        <Route path="/" element={<Index/>} />
        <Route path="/index" element={<Index/>} />
        <Route path="*" element={<NonPage/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
