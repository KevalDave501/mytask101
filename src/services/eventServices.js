const { assert } = require('joi');
const Emp = require('../models/eventModels');
const jwt = require('jsonwebtoken');

// const getAllEmpServices = async (page) => {
//   const perPage = 5;
//   const offset = (page - 1) * perPage;
//   try {
//     const { rows: events, count: totalEvents } = await Event.findAndCountAll({
//       where: { is_delete: '0', status: '1' },
//       attributes: ['title', 'description', 'date'],
//       order:[['date', 'ASC']],
//       limit: perPage,
//       offset: offset
//     });
//     return { events, totalEvents };
//   } catch (error) {
//     throw new Error('Error while fetching all events');
//   }
// };

const createEmpServices = async ( e_name, e_email, e_password ) => {
  try {
    return await Emp.create({ e_name, e_email, e_password });
  } catch (error) {
    console.log(error)
  }
};

const loginEmpServices = async (e_name, e_password) => {
  try {
    const user = await Emp.findOne({ where: { e_name, e_password } });

    if (!user) {
      console.log('Authentication failed. User not found.');
    }

    const token = jwt.sign({ id: user.id, email: user.email }, 'okayokay123', { expiresIn: '10h' });

    return { user, token };
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  // getAllEmpServices,
  createEmpServices,
  loginEmpServices
}