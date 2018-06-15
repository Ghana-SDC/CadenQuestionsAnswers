const router = require('express').Router();
const answerController = require('../controllers/answerController');
const {questionsController, questionsIdController, productController} = require('../controllers/questionController');

router.route('/questions')
  .get(questionsController.get)
  .post(questionsController.post);

router.route('/answers')
  .get(answerController.get)
  .post(answerController.post);

router.route('/questions/:id')
  .get(productController.get)
  .put(questionsIdController.put)

// router.route('/products/:product_id')
//   .get(productController.get);

module.exports = router;