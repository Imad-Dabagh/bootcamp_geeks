const planets = [
  { name: "Mercury", color: "gray", moons: 0 },
  { name: "Venus", color: "yellow", moons: 0 },
  { name: "Earth", color: "blue", moons: 1 },
  { name: "Mars", color: "red", moons: 2 },
  { name: "Jupiter", color: "orange", moons: 79 },
  { name: "Saturn", color: "gold", moons: 83 },
  { name: "Uranus", color: "lightblue", moons: 27 },
  { name: "Neptune", color: "darkblue", moons: 14 },
];

planets.forEach((planet) => {
  let newDiv = document.createElement("div");
  newDiv.setAttribute("class", "planet");
  newDiv.style.backgroundColor = planet.color;

  let textNode = document.createTextNode(planet.name);
  newDiv.appendChild(textNode);

  for (let i = 0; i < planet.moons; i++) {
    let moonDiv = document.createElement("div");
    moonDiv.setAttribute("class", "moon");

    moonDiv.style.left = `${Math.random() * 100}px`;
    moonDiv.style.top = `${Math.random() * 100}px`;

    newDiv.appendChild(moonDiv);
  }

  let section = document.getElementsByClassName("listPlanets")[0];
  section.appendChild(newDiv);
});
