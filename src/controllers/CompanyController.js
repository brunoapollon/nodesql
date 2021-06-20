const Company = require("../models/Company");

module.exports = {
  async index(req, res) {
    const companys = await Company.findAll({ include: "users" });

    return res.json(companys);
  },
  async store(req, res) {
    const { name } = req.body;
    const company = await Company.create({ name });
    return res.json(company);
  },
  async update(req, res) {
    const { company_id } = req.params;
    const { name } = req.body;

    const company = await Company.update(
      { name },
      { where: { id: company_id } }
    );
    return res.json(company);
  },
  async delete(req, res) {
    const { company_id } = req.params;
    await Company.destroy({ where: { id: company_id } });
    return res.json();
  },
};
