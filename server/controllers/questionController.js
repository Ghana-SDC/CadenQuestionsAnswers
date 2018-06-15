const {Question} = require('../../database/models/index.js');

const questionsController = {
  get: (req, res) => {
    Question.findAll()
      .then(data => {
        res.status(200).send(data);
        console.log('successfully fetched data from /questions');
      })
      .catch(err => {
        res.status(400);
        console.log('failed to fetch data from /questions', err);
      });
  },
  post: (req, res) => {

  }
}

const questionsIdController = {
  get: (req, res) => {
    Question.findById(req.params.id).then(found => {
      res.status(200).send(found);
    }).catch(err => {
      console.log('failed to fetch data from /questions/' + req.params.id, err)
    })
  },
  put: (req, res) => {
    Question.findById(req.params.id).then(found => {
      found.update({
        votes: req.body.votes
      })
      res.status(200).send(found);
      console.log('successfully updated /questions/' + req.params.id)
    }).catch(err => {
      console.log('error help', err)
      res.status(400);
    })
  }
}

const productController = {
  get: (req, res) => {
    Question.findAll({where: {product_id: req.params.id}}).then(found => {
      res.send(found).status(200);
      console.log('successfully fetched data by product_id')
    }).catch(err => {
      console.log('failed to fetch data from /questions/' + req.params.product_id, err)
    })
  }
}


module.exports = {
  questionsController,
  questionsIdController,
  productController
}