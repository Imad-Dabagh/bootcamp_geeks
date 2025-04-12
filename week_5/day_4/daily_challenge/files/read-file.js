// Task 3: Advanced File Operations
import fs from 'fs';

export default function readingFile(filePath){
    fs.readFile(filePath, "utf-8", function (err, data) {
      if (err) {
        console.log(err);
        return;
      }

    console.log(data);

    });
}