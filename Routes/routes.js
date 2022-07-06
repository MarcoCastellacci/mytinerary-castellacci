const Router = require('express').Router();
const validator = require('../config/validator');
const passport = require('../config/passport');

const citiesControllers = require('../controllers/citiesControllers');
const itineraryControllers = require('../controllers/itinerarysControllers');
const userControllers = require('../controllers/userControllers');
const activitiesControllers = require('../controllers/activitiesControllers');
const commentsControllers = require('../controllers/commentsControllers');

const {getCities, getOneCity, addCity, modifyCity, addMultipleCity, removeCity} = citiesControllers;
const {getItinerarys, getOneItinerary, addItinerary, modifyItinerary, deleteItinerary, addLike,getItinerarysByCity, coments} = itineraryControllers;
const {signUpUser, signInUser, getUsers, verifyMail, verifyToken, signOut} = userControllers;
const {getActivities, getOneActivity, addActivity,updateActivity,deleteActivity, getActivitiesByItinerary } = activitiesControllers;
const {getComments, addComment, deleteComment,modifyComment} = commentsControllers;

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

Router.route('/itinerarys/likes/:id')
.put(passport.authenticate('jwt', {session:false}),addLike)

Router.route('/itinerary/coments')
.post(passport.authenticate('jwt', {session:false}),addComment)
.put(passport.authenticate('jwt', {session:false}),modifyComment)
.get(passport.authenticate('jwt', {session:false}),getComments)

Router.route('/itinerary/coments/:id')
.delete(passport.authenticate('jwt', {session:false}),deleteComment)

Router.route('/itinerarys/city/:id')
.get(getItinerarysByCity)

// Routes for user
Router.route('/user/signup')
.post(validator, signUpUser)

Router.route('/user')
.get(getUsers)

Router.route('/user/signin')
.post(signInUser)

Router.route('/user/signout')
.post(signOut)

Router.route('/user/verify/:string')
.get(verifyMail)

Router.route('/user/signintoken')
.get(passport.authenticate('jwt', { session: false }), verifyToken)

// Routes for activities

Router.route('/activities')
.get(getActivities)
.post(addActivity)

Router.route('/activities/:id')
.get(getOneActivity)
.put(updateActivity)
.delete(deleteActivity)

Router.route('/activities/byitinerary/')
.get(getActivitiesByItinerary)

module.exports = Router;