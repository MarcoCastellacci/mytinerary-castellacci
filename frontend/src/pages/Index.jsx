import React from 'react';
import Carrousel from '../components/Carrousel';
import CallToAction from '../components/CallToAction';

import '../styles/styles.css';
// import axios from 'axios';

function Index (){

return (
<>
<div className="main">
    <div className="call">
        <CallToAction/>
    </div>
    <div className="carrousel">
        <Carrousel />
    </div>
</div>
</>
)
}
export default Index;