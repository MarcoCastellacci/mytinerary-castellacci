const Itinerary = require('../models/itinerary')
const User = require('../models/user')

const commentsController = {
    addComment: async (req, res) => {
        const {id,comment} = req.body.comment
        const user = await User.findOne({_id: req.user.id})
        try {
            const newComment = await Itinerary
                .findOneAndUpdate({_id: id}, {$push: {comments: {comment: comment, user: user._id}}}, {new: true})
                .populate('comments.user')
            res.json({
                success: true,
                response: {newComment},
                message: "Thanks for comment!" + user.name})
        }
        catch (error) {
            console.log(error)
            res.json({success: false,
                message: "Try again please!"})
        }
    },
    modifyComment: async (req, res) => {
        const {commentId,comment} = req.body.comment
        try {
            const modifyComment = await Itinerary
            .findOneAndUpdate({"comments._id": commentId}, {$set: {"comments.$.comment": comment}}, {new: true})
            res.json({success: true,
                response: {modifyComment},
                message: "The comment has been modified"})
        }
        catch (error) {
            console.log(error)
            res.json({ success: true,
                message: "Sorry! Try again!" })
        }
    },
    deleteComment: async (req, res) => {
        const commentId = req.params.id
        try {
            const deleteComment = await Itinerary
            .findOneAndUpdate({"comments._id": commentId}, {$pull: {comments: {_id: commentId}}}, {new: true})
            res.json({success: true,
                response: {deleteComment},
                message: "The comment has been deleted"})
        }
        catch (error) {
            console.log(error)
            res.json({success: false,
                message: "Try again!"})
        }
    }
}
module.exports = commentsController