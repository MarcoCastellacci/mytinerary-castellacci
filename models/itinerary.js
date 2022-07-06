const mongoose = require('mongoose');

const itinerarySchema = new mongoose.Schema({
    name: {type: String, required: true},
    nameUser: {type: String, required: true},
    imageUser: {type: String, required: true},
    activities: [{type: mongoose.Types.ObjectId, ref: 'Activity'}],
    price: {type: Number, required: true},
    time: {type: Number, required: true},
    likes: [{type: String, required: true}],
    hashtags: {type: Array, required: true},  
    image: {type: String, required: true},
    coments: [{
        coment: {type: String},
        user: {type:mongoose.Types.ObjectId, ref: 'User'},
        }],
    city: {type: mongoose.Types.ObjectId, ref: 'Cities'},
})

const Itinerary = mongoose.model('Itinerary', itinerarySchema);
module.exports = Itinerary