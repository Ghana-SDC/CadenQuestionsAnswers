const faker = require("faker");

const setupSomeData = (context, events, done) => {
  let product_id = faker.random.number({ min: 1, max: 5000000 });
  context.vars["query"] = product_id;
  return done();
};

module.exports = {
  setupSomeData
};
