const {Answer} = require('../../database/models/index.js');

const answerController = {
  get: (req, res) => {
    Answer.findAll()
      .then(data => {
        res.status(200).send(data);
        console.log('successfully fetched data from /answers');
      })
      .catch(err => {
        res.status(400);
        console.log('failed to fetch data from /answers', err);
      });
  },
  post: (req, res) => {

  }
}

module.exports = answerController;