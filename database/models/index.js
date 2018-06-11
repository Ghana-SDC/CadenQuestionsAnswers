const Sequelize = require('sequelize');
const sequelize = require('../config/index.js');

const Question = sequelize.define('question', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  product_id: {
    type: Sequelize.INTEGER
  },
  category: {
    type: Sequelize.STRING
  },
  text: {
    type: Sequelize.STRING
  },
  votes: {
    type: Sequelize.INTEGER
  }
}, {
  timestamps: false
});

const Answer = sequelize.define('answer', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  question_id: {
    type: Sequelize.INTEGER
  },
  text: {
    type: Sequelize.STRING
  },
  votes: {
    type: Sequelize.INTEGER
  },
  date: {
    type: Sequelize.STRING
  }
},
{
timestamps: false
});

Answer.belongsTo(Question)
Question.hasMany(Answer);

// Question.sync({force: true});
// Answer.sync({force: true});

Question.sync();
Answer.sync();

module.exports = {
  Question,
  Answer
}