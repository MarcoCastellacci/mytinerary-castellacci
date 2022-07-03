const User = require('../models/user');
const bcryptjs = require('bcryptjs');
const crypto = require('crypto');
const sendVerification = require('./verificationEmail')
const jwt = require('jsonwebtoken');

const userControllers = {
    signUpUser: async(req, res) => {
        const {name,lastName,email,password,image,from,country} = req.body
        const uniquestring = crypto.randomBytes(20).toString('hex');
        try { 
            const userExist = await User.findOne({email})
            if(userExist){
                if(userExist.from.indexOf(from) !== -1){
                    res.json({
                        success: false,
                        from: 'signup',
                        message: 'User already exist'})
                } else {
                const passwordHash = bcryptjs.hashSync(password, 10)
                userExist.verification = true
                userExist.from.push(from)
                userExist.password.push(passwordHash)
                await userExist.save()
                res.json({
                success: true,
                from: from,
                message: 'User coorectly created with ' + " " + from})
                }
            } else {
                const passwordHash = bcryptjs.hashSync(password, 10)
                const newUser = await new User({
                    name: name,
                    lastName: lastName,
                    email: email,
                    password: passwordHash,
                    uniquestring: uniquestring,
                    verification: false,
                    image: image,
                    from: [from],
                    country: country,
                })
                if(from !== "form-signup"){
                    await newUser.save()
                    res.json({
                        success: true,
                        from: 'signup',
                        message: 'User coorectly created with' + "" +  from})
                } else {
                    await newUser.save()
                    await sendVerification(email, uniquestring)
                    res.json({
                        success: true,
                        from: 'signup',
                        message: 'User coorectly created with ' + "" + from + "" + ' Check your email to verify your account'})
                }
            }
        }   catch (error) {
            res.json({
                console: console.log(error),
                success: false,
                message: 'There was an error'})
        }
    },
    signInUser: async(req, res) => {
        const {email,password, from} = req.body.logedUser
        try {
                const userExist = await User.findOne({email})
                // const indexpass = userExist.from.indexOf(from)
                if(!userExist){
                    res.json({
                        success: false,
                        message: 'User not exist. Please Sign Up'})
                } else {
                    if(userExist.verification){
                        let passwordHash = userExist.password.filter(pass => bcryptjs.compareSync(password, pass))
                        if(passwordHash.length > 0){
                            const userData={
                                id: userExist._id,
                                name: userExist.name,
                                email: userExist.email,
                                from:from,
                            }
                        const token = await jwt.sign({...userData}, process.env.SECRET_KEY, {expiresIn: 60*60*24})
                        await userExist.save()
                        res.json({
                            success: true,
                            from: from,
                            response: {token, userData},
                            message: 'welcome Back ' + "" + userData.name,
                            })
                    } else {
                        res.json({
                        
                            success: false,
                            from: from,
                            message: 'Try again, password or email is incorrect',
                            })
                    }
                } else {
                    let passwordHash = userExist.password.filter(pass => bcryptjs.compareSync(password, pass))
                        if(passwordHash.length > 0){
                            const userData={
                                id: userExist._id,
                                name: userExist.name,
                                email: userExist.email,
                                from:from,
                            }
                        await userExist.save()
                        res.json({
                            success: true,
                            from: from,
                            response: {token, userData},
                            message: 'welcome Back' + "" + userData.name,
                            })
                    } else {
                        res.json({
                            success: false,
                            from: from,
                            message: 'User email or password is incorrect',
                            })
                    }
                }
            }
        }
    catch (error) {
                res.json({
                    console: console.log(error),
                    success: false,
                    message: 'Something went wrong please try again'})
        }
    },
    getUsers: async(req, res) => {
        let users
        let error = null
        try {
            users = await User.find()
        } catch (err) { error = err } 
            res.json({
                response: error ? 'ERROR': users,
                success: error ? false : true,
                error: error,
                console: console.log(error)
            })
    },
    verifyMail: async(req, res) => {
        const {string} = req.params
        const user = await User.findOne({uniquestring: string})
        if(user){
            user.verification = true
            await user.save()
            res.redirect(process.env.API_URL)
        }else {
            res.json({
                success: false,
                message: 'Mail has not been verified'})
        }
    },
    verifyToken: async(req, res) => {
            if(req.user){
                res.json({
                    success: true,
                    message: 'Welcome back ' + "" + req.user.name,
                    response:{
                        id: req.user._id,
                        name: req.user.name,
                        email: req.user.email,
                        from:"token",
                        }
                    })    
            } else {
                res.json({
                    success: false,
                    message: 'Please login'})
            }
    }
}
module.exports = userControllers