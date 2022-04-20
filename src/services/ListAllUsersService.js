const User = require("../models/User");

class ListAllUsersService {
  async execute() {
    const users = await User.findAll();

    return users;
  }
}

module.exports = ListAllUsersService;
