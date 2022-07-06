const Itinerary = require('../models/itinerary')
const User = require('../models/user')

const commentsController = {
    addComment: async (req, res) => {
        const {id,comments} = req.body
        const user = await User.findOne({_id: req.user._id})
        try {
            const newComment = await Itinerary
                .findOneAndUpdate({_id: id}, {$push: {comments: {comment: comments.comment, userId: user._id}}}, {new: true})
                .populate("comments.userId", {name:1,email:1,userPhoto:1})
            res.json({success: true,
                response: {newComment},
                message: "thanks for comment!"})
        }
        catch (error) {
            console.log(error)
            res.json({success: false,
                message: "try again please!"})
        }
    },
    getComments: async (req, res) => {
        const {id} = req.params
        try {
            const comments = await Itinerary
                .findOne({_id: id})
                .populate("comments.userId", {name:1,email:1,userPhoto:1})
            res.json({success: true,
                response: {comments}})
        }
        catch (error) {
            console.log(error)
            res.json({success: false,
                message: "try again please!"})
        }

    },
    getCommentsByUser: async (req, res) => {
        const user = await User.findOne({_id: req.user._id})
        const id = req.params.id
        const comments = []
        try {
            const itinerary = await Itinerary.findOne({_id: id})
            itinerary.comments.forEach(comment => {
                if (comment.userId._id.toString() === user._id.toString()) {
                    comments.push(comment)
                }
            })
            res.json({success: true,
                response: {comments}})
        }
        catch (error) {
            console.log(error)}
            res.json({success: false,
                message: "try again please!"})
    },
    modifyComment: async (req, res) => {
        const {commentId,comments} = req.body
        const user = req.user._id
        try {
            const modifyComment = await Itinerary
            .findOneAndUpdate({"comments._id": commentId}, {$set: {"comments.$.comment": comments.comment}}, {new: true})
            res.json({success: true,
                response: {modifyComment},
                message: "The comment has been modified"})
        }
        catch (error) {
            console.log(error)
            res.json({ success: true,
                message: "sorry! try again!" })
        }
    },

    deleteComment: async (req, res) => {
        const commentId = req.params.id
        const user = req.user._id
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
                message: "try again!"})
        }
    }
}
module.exports = commentsController