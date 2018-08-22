const Sequelize = require("sequelize");
const sequelize = new Sequelize("sti", "colemichaels", "", {
  dialect: "postgres"
});

sequelize
  .authenticate()
  .then(() => console.log("Connected to DB"))
  .catch(err => console.log("Failed to connect to DB", err));

module.exports = sequelize;
