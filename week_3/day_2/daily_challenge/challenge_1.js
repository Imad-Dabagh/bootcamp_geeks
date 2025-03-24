// 1. Create a variable called sentence
// let sentence = "The dinner is not that bad, I like it";

let sentence = "This dinner is not bad ! like";

// 2. Create a variable called wordNot...
let wordNot = sentence.indexOf("not");

// 3. Create a variable called wordBad...
let wordBad = sentence.indexOf("bad");

// 4.

if (wordBad > wordNot && wordBad != -1 && wordNot != -1) {

    let beforeNot = sentence.slice(0, wordNot);
    let afterBad = sentence.slice(wordBad + 3);
    let sentenceGood = beforeNot + "good" + afterBad;

    console.log(sentenceGood);

} else {
  console.log(sentence);
}

