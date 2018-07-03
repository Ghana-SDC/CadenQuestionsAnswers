const { Answer } = require("../../database/models/index.js");

const answerController = {
  get: (req, res) => {
    Answer.findAll()
      .then(data => {
        res.status(200).send(data);
        console.log("successfully fetched data from /answers");
      })
      .catch(err => {
        res.status(400);
        console.log("failed to fetch data from /answers", err);
      });
  },
  post: (req, res) => {
    Answer.create({
      text: req.query.text,
      votes: req.query.votes,
      date: req.query.date,
      questionId: req.query.questionId
    })
      .then(data => res.send(data))
      .catch(err => console.log(err));
  },
  delete: (req, res) => {
    Answer.destroy({ where: { id: req.query.id } })
      .then(() => res.send("Record Deleted"))
      .catch(err => console.log(err));
  },
  put: (req, res) => {
    let updateObj = {};
    req.query.text && (updateObj.text = req.query.text);
    req.query.votes && (updateObj.votes = Number(req.query.votes));
    Answer.update(updateObj, { where: { id: Number(req.query.id) } })
      .then(data => res.send(data))
      .catch(err => console.log(err));
  }
};

module.exports = answerController;
