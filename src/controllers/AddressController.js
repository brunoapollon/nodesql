const Address = require('../models/Address');
const { update } = require('../models/User');
const User = require('../models/User');

module.exports = {
  async index(req, res){
    const { user_id } = req.params;
    const user = await User.findByPk(user_id, {
      include: { association: 'addresses'  }
    });

    return res.json(user.addresses);
  },
  async store(req, res){
    const { user_id } = req.params;
    const { zipcode, street, number } = req.body;

    const user = await User.findByPk(user_id);
    if (!user) {
      return res.status(400).json({ error: 'User not found!' });
    }
    const address = await Address.create({ user_id, zipcode, street, number });
    return res.json(address);
  },
  async update(req, res){
    const { user_id, address_id } = req.params;
    console.log(address_id);
    const { zipcode, street, number } = req.body;
    let address = await Address.findByPk(address_id);
    const user = await User.findByPk(user_id);
    if(!user){
      return res.status(400).json({ error: "User not found!" });
    }else if(!address){
      return res.status(400).json({ error: "Address not found!" });
    }
    address = await Address.update({ zipcode, street, number }, {
      where: { id: address_id }
    });
    return res.json(address);
  }
};