const joi = require('joi');

const validator = (res, req, next) => {
    const schema = joi.object({
        mail: joi.string()
            .email({minDomainSegments:2})
            .required()
            .messages({
                'string.email': 'Email is not valid'}),
        password: joi.string()
            .min(8)
            .max(20)
            .pattern(new RegExp('^[a-zA-Z0-9]{8,20}$'))
            .message({
                'string.min': 'Password must be at least 8 characters',
                'string.max': 'Password must be at most 20 characters',
            }),
            from: joi.string()
            .required(),
            name: joi.string()
            .required(),
            lastName: joi.string()
            .required(),
            image: joi.string()
            .required(),
            country: joi.string()
            .required(),

}) 
const validation = schema.validate(req.body, {abortEarly:false})
if(validation.error){
    return res.json({success: false, from: 'validator', message: validation.error.details, test:validation})
}
next()
}

module.exports = validator