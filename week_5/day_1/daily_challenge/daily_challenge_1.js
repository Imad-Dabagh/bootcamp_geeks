// 1st daily challenge

const sortWords = (arraySort) => {
  return new Promise(function (resolve, reject) {
    if (arraySort.length > 4) {
      arraySort.sort();
      resolve(arraySort);
    } else {
      reject("Length should be bigger than 4");
    }
  })
};

const makeAllCaps = (array) => {
    return new Promise((resolve, reject) => {
      let result = array.every((element) => typeof element === "string");
      if (result) {
        let newArray = array.map((word) => (word = word.toUpperCase()));
        resolve(newArray);
      } else {
        reject("Not an array of words");
      }
    })
      .then((result) => { return sortWords(result)}).then((result1) => console.log(result1))
      .catch((error) => {
        console.log("Error: " + error);
      });
}

makeAllCaps(['hey', 'johnas', 'sarah', 'lili', 'hello']);
