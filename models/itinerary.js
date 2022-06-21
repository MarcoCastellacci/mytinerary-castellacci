const mongoose = require('mongoose');

const itinerarySchema = new mongoose.Schema({
    name: {type: String, required: true},
    nameUser: {type: String, required: true},
    imageUser: {type: String, required: true},
    info: {type: String, required: true},
    price: {type: Number, required: true},
    time: {type: Number, required: true},
    likes: {type: Number, required: true},
    hashtags: {type: String, required: true},  
    image: {type: String, required: true},
})

const Itinerary = mongoose.model('Itinerary', itinerarySchema);
module.exports = Itinerary