const User = require("../models/User");

class CreateUserService {
  async execute({ name, email, company_id }) {
    if (!name || !email || !company_id)
      throw new Error("missing data for user");

    const user = await User.create({ name, email, company_id });

    return user;
  }
}

module.exports = CreateUserService;
