const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    name: {type: String, required: true},
    image: {type: String, required: true},
    info: {type: String, required: true},
    coments: [{type: String, required: true}],
    itinerary: {type: mongoose.Types.ObjectId, ref: 'Itinerary'},
})

const Activity = mongoose.model('Activity', activitySchema);