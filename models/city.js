const mongoose = require('mongoose');

const citiesSchema = new mongoose.Schema({
    name: {type: String, required: true},
    country: {type: String, required: true},
    image: {type: String, required: true},
    info: {type: String, required: true},
    // itinerary: {type: Schema.objectId, ref: 'Itinerary'}    
})

const Cities = mongoose.model('Cities', citiesSchema);
module.exports = Cities
