import React , {useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';


import '../src/styles/App.css';
import "swiper/css/bundle";
import "../src/styles/styles.css";

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from "react-scroll-to-top";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

import { useDispatch} from 'react-redux';
import citiesActions from './redux/actions/citiesActions';


import Cities from './pages/Cities';
import Contact from './pages/Contact';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import NonPage from './pages/NonPage';
import Index from './pages/Index';
import Details from './pages/Details';
import Itinerary from './components/Itinerarys';



function App() {

useEffect(() => {
    setTimeout(() => {
    window.scrollTo(0, 0);
    }, 500)
}, []);

const dispatch = useDispatch();

useEffect(() => {
dispatch(citiesActions.getCities())
// eslint-disable-next-line
},[])
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/cities" element={<Cities/>} />
        <Route path="/cities/city/:id" element={<Details/>} />
        <Route path="/cities/city/:id" element={<Itinerary/>} />        
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<LogIn/>} />
        <Route path="/signup" element={<SignUp/>} />  
        <Route path="/" element={<Index/>} />
        <Route path="/index" element={<Index/>} />
        <Route path="*" element={<NonPage/>} />
      </Routes>
      <Footer />
        <ScrollToTop
        smooth
        viewBox="0 0 24 24"
        component={<ArrowCircleUpIcon />}
      />
    </>
  )
}

export default App;
