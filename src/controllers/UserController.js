const User = require("../models/User");

module.exports = {
  async index(req, res) {
    const users = await User.findAll();

    return res.json(users);
  },
  async store(req, res) {
    const { name, email, company_id } = req.body;

    const user = await User.create({ name, email, company_id });

    return res.json(user);
  },
  async update(req, res) {
    const { user_id } = req.params;
    const { name, email, company_id } = req.body;

    const user = await User.update(
      { name, email, company_id },
      { where: { id: user_id } }
    );
    return res.json(user);
  },
  async delete(req, res) {
    const { user_id } = req.params;
    await User.destroy({ where: { id: user_id } });
    return res.json();
  },
};
