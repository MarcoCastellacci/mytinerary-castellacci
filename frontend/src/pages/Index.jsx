import React from 'react';
import Carrousel from '../components/Carrousel';
import CallToAction from '../components/CallToAction';
import { useState, useEffect} from 'react';
import '../styles/styles.css';
import axios from 'axios';



function Index (){


const [cities,setCities] = useState()

useEffect(() => {
axios.get("https://62a395985bd3609cee6cceb8.mockapi.io/api/cities")
.then(response  => setCities(response.data))
.catch(error => console.error(error))
},[])
console.log(cities)
return (
<>
<div className="main">
    <div className="call">
        <CallToAction/>
    </div>
    <div className="carrousel">
        <Carrousel cities={cities} />
    </div>
</div>
</>
)
}
export default Index;