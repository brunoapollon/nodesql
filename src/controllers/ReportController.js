const { Op } = require('sequelize');
const User = require('../models/User');

module.exports = {
  async show(req, res){
    //construcao de query mais complexas
    const users = await User.findAll({
      attributes: ['name', 'email'],
      where: {
        email: {
          [Op.iLike]: '%.com',
        },
      },
      include: [
        { association: 'addresses', where: { street: 'Rua do Bruno' } }, //include do relacionamento de endereco
        { association: 'techs', where: { name: 'PHP' } } // include do relacionamento de tecnologia
      ]
    });

    return res.json(users);
  }
};