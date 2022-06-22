import React from 'react';
import Carrousel from '../components/Carrousel';
import CallToAction from '../components/CallToAction';
import { useEffect} from 'react';
import '../styles/styles.css';
// import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import citiesActions from '../redux/actions/citiesActions'



function Index (){
// const [cities,setCities] = useState()
const dispatch = useDispatch();
useEffect(() => {
// axios.get("https://62a395985bd3609cee6cceb8.mockapi.io/api/cities")
// .then(response  => setCities(response.data))
// .catch(error => console.error(error))
dispatch(citiesActions.getCities())
// eslint-disable-next-line
},[])
const cities = useSelector(state => state.citiesReducer.cities)
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