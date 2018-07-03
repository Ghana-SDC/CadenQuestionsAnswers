const { Question } = require("../../database/models/index.js");

const questionsController = {
  get: (req, res) => {
    Question.findAll()
      .then(data => {
        res.status(200).send(data);
        console.log("successfully fetched data from /questions");
      })
      .catch(err => {
        res.status(400);
        console.log("failed to fetch data from /questions", err);
      });
  },
  post: (req, res) => {
    Question.create({
      product_id: req.query.product_id,
      category: req.query.category,
      text: req.query.text,
      votes: req.query.votes
    })
      .then(data => res.send(data))
      .catch(err => console.log(err));
  },
  delete: (req, res) => {
    Question.destroy({ where: { id: req.query.id } })
      .then(() => res.send("Record Deleted"))
      .catch(err => console.log(err));
  },
  put: (req, res) => {
    let updateObj = {};
    req.query.product_id && (updateObj.product_id = req.query.product_id);
    req.query.category && (updateObj.category = req.query.category);
    req.query.text && (updateObj.text = req.query.text);
    req.query.votes && (updateObj.votes = req.query.votes);
    Question.update(updateObj, { where: { id: req.query.id } })
      .then(data => res.send(data))
      .catch(err => console.log(err));
  }
};

const questionsIdController = {
  get: (req, res) => {
    Question.findById(req.params.id)
      .then(found => {
        res.status(200).send(found);
      })
      .catch(err => {
        console.log(
          "failed to fetch data from /questions/" + req.params.id,
          err
        );
      });
  },
  put: (req, res) => {
    Question.findById(req.query.id)
      .then(found => {
        found.update({
          votes: req.query.votes
        });
        res.status(200).send(found);
        console.log("successfully updated /questions/" + req.params.id);
      })
      .catch(err => {
        console.log("error help", err);
        res.status(400);
      });
  }
};

const productController = {
  get: (req, res) => {
    Question.findAll({ where: { product_id: req.params.id } })
      .then(found => {
        res.send(found).status(200);
        console.log("successfully fetched data by product_id");
      })
      .catch(err => {
        console.log(
          "failed to fetch data from /questions/" + req.params.product_id,
          err
        );
      });
  }
};

module.exports = {
  questionsController,
  questionsIdController,
  productController
};
