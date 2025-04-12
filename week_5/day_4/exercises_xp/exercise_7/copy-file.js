const fs = require('fs')

// Read the content from a source.txt and write the same content to destination.txt.

fs.readFile("source.txt", "utf-8", function (err, data) {
  if (err) {
    console.error(err);
    return;
  }
  fs.writeFile("destination.txt", data, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Write operation complete.");
    }
  });
  // ======= Using append method to write in destination.txt ========
//   fs.appendFile("destination.txt", data + "\n", function (err) {
//     if (err) {
//       console.error(err);
//       return;
//     }
//   });
});
