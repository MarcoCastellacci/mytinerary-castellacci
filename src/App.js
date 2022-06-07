import React, {useEffect, useState} from 'react';

import './styles/App.css';
import "swiper/css/bundle";
import "../src/styles/styles.css";
import Carrousel from './components/Carrousel';
import CallToAction from './components/CallToAction';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import axios from "axios";

function App() {

const [Cities,setCities] = useState()

useEffect(() => {
fetch("http://localhost:3000/data/cities.json")
.then(response =>response.json())
.then(data => console.log(data))
.catch(error => console.error(error))
},[])

  return (
    <>
      <Navbar />
      <div className="main">
            <div className="call">
                <CallToAction/>
            </div>
            <div className="carrousel">
                <Carrousel Cities={Cities}/>
            </div>
      </div>
      <Footer />
    </>
  )
}

export default App;
