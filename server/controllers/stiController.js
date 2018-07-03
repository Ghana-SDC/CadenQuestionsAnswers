const STI = require("../../database/models");
const Op = require("sequelize").Op;

const stiController = {
  // SEARCH BY PRODUCT ID - GET 10//
  get: (req, res) => {
    STI.findAll({
      where: {
        product_id: req.query.product_id
      },
      limit: 10
    })
      .then(data => res.status(200).send(data))
      .catch(err => res.status(400).send(err));
  },
  // POST FULLY FUNCTIONAL //
  post: (req, res) => {
    STI.create({
      product_id: req.query.product_id,
      category: req.query.category,
      text: req.query.text,
      votes: req.query.votes,
      date: req.query.date,
      question_id: req.query.question_id
    })
      .then(data => res.status(201).send(data))
      .catch(err => console.log(err));
  },
  // ONLY ALTER VOTES //
  put: (req, res) => {
    STI.findById(req.query.id)
      .then(found => {
        found.update({
          votes: req.query.votes
        });
        res.status(200).send(found);
        console.log("successfully updated" + req.params.id);
      })
      .catch(err => {
        console.log("error help", err);
        res.status(400);
      });
  },
  // DELETE ANY BY ID //
  delete: (req, res) => {
    STI.destroy({ where: { id: req.query.id } })
      .then(() => res.send("Record Deleted"))
      .catch(err => console.log(err));
  }
};

module.exports = stiController;
