const Joi = require('joi');

const createEmployeeSchema = Joi.object({
    e_name: Joi.string().required(),
    e_email: Joi.string().required(),
    e_password: Joi.string().required()
});

const loginEmployeeSchema = Joi.object({
    e_name: Joi.string().required(),
    e_email: Joi.string().required(),
    e_password: Joi.string().required()
});

module.exports = {
    createEmployeeSchema,
    loginEmployeeSchema
};