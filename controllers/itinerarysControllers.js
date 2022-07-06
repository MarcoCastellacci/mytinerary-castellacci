const Itinerary = require('../models/itinerary');
const Activity = require('../models/activities');
const User = require('../models/user');

const itineraryController = {
    getItinerarys: async (req, res) => {
        let itinerarys
        let error = null
        let { id } = req.params
        try {
            itinerarys = await Itinerary.find()
                .populate('city')
                .populate('activities')
        } catch (err) { error = err }
        res.json({
            response: error ? 'ERROR' : { itinerarys },
            success: error ? false : true,
            error: error
        })
    },
    getOneItinerary: async (req, res) => {
        const id = req.params.id
        let itinerary
        let error = null
        try {
            itinerary = await Itinerary.findOne({ _id: id })
                .populate('city', { city: 1 })
                .populate('activities')
        } catch (err) { error = err }
        res.json({
            response: error ? 'ERROR' : itinerary,
            success: error ? false : true,
            error: error
        })
    },
    addItinerary: async (req, res) => {
        const { name, nameUser, imageUser, activities, price, time, likes, hashtags, image } = req.body
        let itinerary
        let error = null
        try {
            itinerary = await new Itinerary({
                name: name,
                nameUser: nameUser,
                imageUser: imageUser,
                activities: activities,
                price: price,
                time: time,
                likes: likes,
                hashtags: hashtags,
                image: image,
                city: city
            }).save()
        } catch (err) { error = err }
        res.json({
            response: error ? 'ERROR' : itinerary,
            success: error ? false : true,
            error: error
        })
    },
    modifyItinerary: async (req, res) => {
        const id = req.params.id
        const itinerary = req.body
        let itinerarydb
        let error = null
        try {
            itinerarydb = await Itinerary.findOneAndUpdate({ _id: id }, itinerary, { new: true })
        }
        catch (err) { error = err }
        res.json({
            response: error ? 'ERROR' : itinerarydb,
            success: error ? false : true,
            error: error
        })
    },
    deleteItinerary: async (req, res) => {
        const id = req.params.id
        let itinerary
        let error = null
        try {
            itinerary = await Itinerary.findOneAndDelete({ _id: id })
        } catch (err) { error = err }
        res.json({
            response: error ? 'ERROR' : itinerary,
            success: error ? false : true,
            error: error
        })
    },
    addLike: async (req, res) => {
        const id = req.params.id
        const user = req.user._id

        await Itinerary.findOne({ _id: id })
            .then((itinerary) => {
                if (!itinerary.likes.includes(user._id)) {
                    Itinerary.findOneAndUpdate({ _id: id }, { $push: { likes: user } }, { new: true })
                        .then((response) => res.json({
                        response: response.likes, 
                        success: true
                    })).catch((err) => console.log(err))
                } else { 
                    Itinerary.findOneAndUpdate({ _id: id }, { $pull: { likes: user } }, { new: true })
                        .then((response) => res.json({
                        response: response.likes, 
                        success: true
                    })).catch((err) => console.log(err))
                }
            
            }).catch((error) => res.json({
            console: console.log(error),
            response: error ,
            success: false   
        }))
    },
    getLikesByUser: async (req, res) => {
        const user = await User.findOne({ _id: req.user._id })
        let likes = []
        let error = null
        try {
            likes = await Itinerary.find()
        }
        catch (err) { error = err }
        res.json({
            response: error ? 'ERROR' : likes,
            success: error ? false : true,
            error: error
        })
    },
    getItinerarysByCity: async (req, res) => {
        const city = req.params.id
        let itinerarys
        let error = null
        try {
            itinerarys = await Itinerary.find({ city: city })
                .populate('activities')
        } catch (err) { error = err }
        res.json({
            response: error ? 'ERROR' : itinerarys,
            success: error ? false : true,
            error: error
        })
    }
}

module.exports = itineraryController;