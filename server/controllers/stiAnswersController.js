const STI = require("../../database/models");

const stiAnswersController = {
  // GET ANSWERS BASED ON QUESTION ID PROVIDED //
  get: (req, res) => {
    let ids = JSON.parse(req.query.question_ids).reduce((acc, element) => {
      acc.push(element.id);
      return acc;
    }, []);
    STI.findAll({
      where: {
        question_id: ids
      }
    })
      .then(data => res.status(200).send(data))
      .catch(err => res.status(400).send(err));
  }
};

module.exports = stiAnswersController;
