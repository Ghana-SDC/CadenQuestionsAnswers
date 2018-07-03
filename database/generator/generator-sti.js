const faker = require("faker");
const fs = require("fs");

let sti = fs.createWriteStream("./fake-sti.csv");
// STI //
const writeToSTI = writer => {
  let i = 10000000;
  const write = () => {
    let ok = true;
    do {
      let product_id = faker.random.number();
      let text = faker.lorem.sentences();
      let votes = faker.random.number({ min: 0, max: 30 });
      let date = faker.date.recent().toISOString();
      let questionId = faker.random.number({ min: 1, max: 5000000 });
      i--;
      if (i > 5000000) {
        // QUESTIONS //
        ok = writer.write(`${product_id},${text},${votes},NULL,NULL\n`);
      } else if (i > 0 && i <= 5000000) {
        // ANSWERS //
        ok = writer.write(`NULL,${text},${votes},${date},${questionId}\n`);
      } else if (i === 0) {
        writer.write(`NULL,${text},${votes},${date},${questionId}`);
      }
    } while (i > 0 && ok);

    if (i > 0) {
      writer.once("drain", write);
    }
  };
  write();
};
writeToSTI(sti);
