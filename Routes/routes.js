const Router = require('express').Router();

const citiesControllers = require('../controllers/citiesControllers');
const itineraryControllers = require('../controllers/itinerarysControllers');
const {getCities, getOneCity, addCity, modifyCity, addMultipleCity, removeCity} = citiesControllers;
const {getItinerarys, getOneItinerary, addItinerary, modifyItinerary, deleteItinerary, addLike, addHashtag, deleteHashtag, getItinerarysByHashtag,getItinerarysByCity} = itineraryControllers;

Router.route('/cities')
.get(getCities)
.post(addCity)

Router.route('/cities/:id')
.delete(removeCity)
.put(modifyCity)
.get(getOneCity)

Router.route('/addMultipleCities')
.post(addMultipleCity)

Router.route('/itinerarys')
.get(getItinerarys)
.post(addItinerary)

Router.route('/itinerarys/:id')
.get(getOneItinerary)
.put(modifyItinerary)
.delete(deleteItinerary)

Router.route('/itinerarys/:id/like')
.post(addLike)

Router.route('/itinerarys/:id/hashtag')
.post(addHashtag)
.delete(deleteHashtag)
.get(getItinerarysByHashtag)

Router.route('/itinerarys/city/:id')
.get(getItinerarysByCity)

module.exports = Router;