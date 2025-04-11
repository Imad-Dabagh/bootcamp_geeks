const fs = require('fs')

const readFiles = (fileName) => {
    fs.readFile(fileName, "utf-8", function (err, data) {
      if (err) {
        console.error(err);
        return;
      }
      console.log(data);
    });
}

const writeFiles = (fileName, content) =>{
    fs.writeFile(fileName, content, (err) => {
      if (err) {
        console.error("Error writing file:", err);
      } else {
        console.log("File written successfully!");
      }
    });
}

module.exports = {readFiles, writeFiles}