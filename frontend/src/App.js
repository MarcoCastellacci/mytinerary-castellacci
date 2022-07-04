import React , {useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';


import '../src/styles/App.css';
import "swiper/css/bundle";
import "../src/styles/styles.css";

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from "react-scroll-to-top";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

import { useDispatch, useSelector} from 'react-redux';
import citiesActions from './redux/actions/citiesActions';
import { Toaster}  from 'react-hot-toast';
import userActions from './redux/actions/userActions';


import Cities from './pages/Cities';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import NonPage from './pages/NonPage';
import Index from './pages/Index';
import Details from './pages/Details';
import Itinerary from './components/Itinerarys';
import UserPage from './pages/UserPage';



function App() {

useEffect(() => {
    setTimeout(() => {
    window.scrollTo(0, 0);
    }, 500)
}, []);

const dispatch = useDispatch();

useEffect(() => {
    if(localStorage.getItem('token') !== null){
      const token = localStorage.getItem('token');
      dispatch(userActions.verifyToken(token));
    }
})

const user = useSelector(store => store.userReducer.user);
useEffect(() => {
dispatch(citiesActions.getCities())
// eslint-disable-next-line
},[])
  return (
    <>
      
      <Navbar />
      <Routes>
        {user && <Route path="/user" element={<UserPage />} />}
        <Route path="/cities" element={<Cities/>} />
        <Route path="/cities/city/:id" element={<Details/>} />
        <Route path="/cities/city/:id" element={<Itinerary/>} />
        {!user && <Route path="/login" element={<LogIn/>} />}
        {!user && <Route path="/signup" element={<SignUp/>} />}  
        <Route path="/" element={<Index/>} />
        <Route path="/index" element={<Index/>} />
        <Route path="*" element={<NonPage/>} />
      </Routes>
      <Toaster
      position='bottom-center'
      autoClose={3000}
      hideProgressBar={true}
      newestOnTop={true}
      transition={'scale'}
      />
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
