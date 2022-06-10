import React from 'react';
import Carrousel from '../components/Carrousel';
import CallToAction from '../components/CallToAction';
import { useState, useEffect} from 'react';
import '../styles/styles.css';

function Index (){


const [cities,setCities] = useState()

useEffect(() => {
fetch("../data/cities.json")
.then(response =>response.json())
.then(data => setCities(data))
.catch(error => console.error(error))
},[])
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