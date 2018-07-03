const router = require("express").Router();
const stiController = require("../controllers/stiController");
const stiAnswersController = require("../controllers/stiAnswersController");

router
  .route("/sti")
  .get(stiController.get)
  .post(stiController.post)
  .put(stiController.put)
  .delete(stiController.delete);

router.route("/sti/answers").get(stiAnswersController.get);

module.exports = router;
