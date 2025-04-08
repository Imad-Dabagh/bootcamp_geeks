const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`;

const toJs = (morseJson) => {
  return new Promise((resolve, reject) => {
    let morseJS = JSON.parse(morseJson);
    if (Object.keys(morseJS).length === 0) {
      reject("The Object is empty!!");
    } else {
      resolve(morseJS);
    }
  });
};

const joinWords = (morseTranslation) => {
  let newdiv = document.createElement("div");
  newdiv.style.display = "block";
  newdiv.innerHTML = morseTranslation.join("<br>");
  return newdiv;
};

const toMorse = (morseJS) => {
  let newArray = [];
  return new Promise((resolve, reject) => {
    let userWord = prompt("Give a word to convert to morse code: ");
    let userArray = userWord.split("");
    let objectKeys = Object.keys(morseJS);
    for (let letter of userArray) {
      if (objectKeys.includes(letter)) {
        for (let key in morseJS) {
          if (letter === key) {
            newArray.push(morseJS[key]);
          }
        }
      } else {
        reject("Invalid character(s)");
      }
    }
    resolve(newArray);
  });
};

toJs(morse)
  .then((morseJS) => {
    return toMorse(morseJS);
  })
  .then((result) => {
    let joined = joinWords(result);
    document.body.appendChild(joined);
  })
  .catch((error) => {
    alert("Error: " + error);
  });
