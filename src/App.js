import React, {useEffect, useState} from 'react';

import './styles/App.css';
import "swiper/css/bundle";
import "../src/styles/styles.css";
import Carrousel from './components/Carrousel';
import CallToAction from './components/CallToAction';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import axios from "axios";

function App() {

const [Cities,setCities] = useState()

useEffect(() => {
axios.get("../src/data/cities.json")
.then(response => setCities(response.data.results))
},[])

console.log(Cities)
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
