"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("sightings", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      month: {
        type: Sequelize.STRING,
        defaultValue: "Unknown",
      },
      year: {
        type: Sequelize.INTEGER,
        defaultValue: null,
      },
      location: {
        type: Sequelize.STRING,
        defaultValue: "Unknown",
      },
      season: {
        type: Sequelize.STRING,
        defaultValue: "Unknown",
      },
      notes: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable("sightings");
  },
};
