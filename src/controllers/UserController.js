const User = require("../models/User");
const CreateUserService = require("../services/CreateUserService");
const ListAllUsersService = require("../services/ListAllUsersService");

module.exports = {
  async index(req, res) {
    const listAllUsersService = new ListAllUsersService();

    const users = await listAllUsersService.execute();

    return res.json(users);
  },

  async store(req, res) {
    const { name, email, company_id } = req.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({ name, email, company_id });

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
