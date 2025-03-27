let libform = document.getElementById("libform");
let storySpan = document.getElementById("story");
let shuffleButton = document.getElementById("shuffle-button");


const generateStory = () => {
  const noun = document.getElementById("noun").value;
  const adjective = document.getElementById("adjective").value;
  const person = document.getElementById("person").value;
  const verb = document.getElementById("verb").value;
  const place = document.getElementById("place").value;

  const stories = [
    `${person} decided to ${verb} a ${adjective} ${noun} in ${place}.`,
    `${person} went to the ${place} to ${verb} a ${adjective} ${noun}.`,
    `${person} ${verb} a ${noun} ${adjective} in ${place}`,
  ];

  const randomStory = stories[Math.floor(Math.random() * stories.length)];
  storySpan.textContent = randomStory;
};

const tellStory = (e) => {
  e.preventDefault();
  generateStory();
};

libform.addEventListener("submit", tellStory);
shuffleButton.addEventListener("click", generateStory);
