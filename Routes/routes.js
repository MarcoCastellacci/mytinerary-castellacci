const Router = require('express').Router();

const citiesControllers = require('../controllers/citiesControllers');
const itineraryControllers = require('../controllers/itinerarysControllers');
const userControllers = require('../controllers/userControllers');
// const activityControllers = require('../controllers/activityControllers');
const {getCities, getOneCity, addCity, modifyCity, addMultipleCity, removeCity} = citiesControllers;
const {getItinerarys, getOneItinerary, addItinerary, modifyItinerary, deleteItinerary, addLike, addHashtag, deleteHashtag, getItinerarysByHashtag,getItinerarysByCity} = itineraryControllers;
const {signUpUser, signInUser, getUsers} = userControllers;
// const {getActivities, getOneActivity, addActivity, modifyActivity, deleteActivity, getActivityByCity} = activityControllers;

// Routes for cities
Router.route('/cities')
.get(getCities)
.post(addCity)

Router.route('/cities/:id')
.delete(removeCity)
.put(modifyCity)
.get(getOneCity)

Router.route('/addMultipleCities')
.post(addMultipleCity)

// Routes for itinerarys
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

// Routes for user
Router.route('/user/signup')
.post(signUpUser)

Router.route('/user')
.get(getUsers)

Router.route('/user/signin')
.post(signInUser)


// Routes for activities
// Router.route('/activities')
// .get(getActivities)
// .post(addActivity)

// Router.route('/activities/:id')
// .get(getOneActivity)
// .put(modifyActivity)
// .delete(deleteActivity)

// Router.route('/activities/city/:id')
// .get(getActivityByCity)

module.exports = Router;