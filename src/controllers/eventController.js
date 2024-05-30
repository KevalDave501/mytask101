const { createEmpServices, loginEmpServices } = require('../services/eventServices');
const { createEmployeeSchema, loginEmployeeSchema } = require('../middleware/eventMiddleware');

const createEvent = async (req, res) => {
    try {
        const { error } = createEmployeeSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        const { e_name, e_email, e_password } = req.body;
        const event = await createEmpServices(e_name, e_email, e_password);
        res.status(201).json(event);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const login = async (req, res) => {
    try {
        const { error } = loginEmployeeSchema.validate(req.body);
        if (error) {
            const {e_name , e_password} = req.body;
            const log_in = await loginEmpServices(e_name, e_password);
            res.status(201).json(log_in);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = {
    createEvent,
    login
};