const fs = require("fs");
const csv = require("csv-parser");

const inputFile = "input.csv";
const outputFile = "output.json";
const readStream = fs.createReadStream(inputFile);
const writeStream = fs.createWriteStream(outputFile);

function converterCsvToJson() {
  const results = [];

  readStream
    .pipe(csv())
    .on("data", (row) => {
      results.push(row);
    })
    .on("end", () => {
      writeStream.write(JSON.stringify(results, null, 2));
      console.log("Arquivo CSV convertido para JSON com sucesso.", { results });
    });
}
converterCsvToJson();
