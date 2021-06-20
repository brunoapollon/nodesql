"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("users", "company_id", {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: { model: "companies", key: "id" },
      ondUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("users", "company_id");
  },
};
