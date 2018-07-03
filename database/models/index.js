const Sequelize = require("sequelize");
const sequelize = require("../config/index.js");

const STI = sequelize.define(
  "sti",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    product_id: {
      allowNull: true,
      type: Sequelize.INTEGER
    },
    text: {
      allowNull: false,
      type: Sequelize.TEXT
    },
    votes: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    date: {
      allowNull: true,
      type: Sequelize.STRING
    },
    question_id: {
      allowNull: true,
      type: Sequelize.INTEGER
    }
  },
  {
    timestamps: false
  }
);

STI.sync();

module.exports = STI;
