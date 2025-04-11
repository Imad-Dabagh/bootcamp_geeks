const fs = require("fs");

// Read the list of files in a specified directory and display their names in the terminal.

fs.readdir("./", (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(files);
});
