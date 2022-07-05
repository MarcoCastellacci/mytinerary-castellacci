const Activity = require('../models/activities');

const activitiesControllers = {
    getActivities: async(req, res) => {
        let activities
        let error = null
        try {
        activities = await Activity.find()
                    .populate('itinerary')
        }  catch (err) { error = err }
        res.json({
            response: error ? 'ERROR' : {activities},
            success: error ? false : true,
            error: error
        })
    },
    comentActivity: async(req, res) => {
        const id = req.params.id
        const coment = req.body
        let activitydb
        let error = null
        try{
            activitydb = await Activity.findOneAndUpdate({_id: id}, coment, {new: true})
        } catch (err) { error = err }
        res.json({
            response: error ? 'ERROR' : activitydb,
            success: error ? false : true,
            error: error
        })
    },
    getOneActivity: async(req, res) => {
        const id = req.params.id
        let activity
        let error = null
        try {
        activity = await Activity.findOne({_id: id})
                    .populate('itinerary')
        } catch (err) { error = err }
        res.json({
            response: error ? 'ERROR' : activity,
            success: error ? false : true,
            error: error
        })
    }
}
module.exports = activitiesControllers;