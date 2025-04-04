const robots = [
  {
    id: 0,
    name: "Zaki Laassri",
    username: "Zaki.Laassri",
    email: "Zaki.Laassri@karina.biz",
    image: "https://robohash.org/yahya",
  },
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    image: "https://robohash.org/1?200x200",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    image: "https://robohash.org/2?200x200",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    image: "https://robohash.org/3?200x200",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    image: "https://robohash.org/4?200x200",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    image: "https://robohash.org/5?200x200",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    image: "https://robohash.org/6?200x200",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    image: "https://robohash.org/7?200x200",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    image: "https://robohash.org/8?200x200",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    image: "https://robohash.org/9?200x200",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    image: "https://robohash.org/10?200x200",
  },
  {
    id: 11,
    name: "Amine Loloda",
    username: "Amine_Loloda",
    email: "Amine_Loloda@karina.biz",
    image: "https://robohash.org/amine",
  },
];

let searchBar = document.getElementById("searchBar");
let main = document.getElementsByTagName("main")[0];

const displayRobots = () => {
    
    robots.forEach((item) => {

      let cardDiv = document.createElement("div");
      cardDiv.setAttribute("class", "robot-card");

      let image = document.createElement("img");
      image.setAttribute("src", item["image"]);

      let roboName = document.createElement("h2");
      roboName.textContent = item["name"];

      let roboMail = document.createElement("p");
      roboMail.textContent = item["email"];

      cardDiv.appendChild(image);
      cardDiv.appendChild(roboName);
      cardDiv.appendChild(roboMail);

      main.appendChild(cardDiv);

    });
}

displayRobots()

const searchRobots = () => {
  let searchValue = searchBar.value.toLowerCase();

  main.innerHTML = "";

  if (searchValue === "") {
    displayRobots();
  } else {
    let filteredRobots = robots.filter((robot) =>
      robot["name"].toLowerCase().includes(searchValue)
    );

    filteredRobots.forEach((item) => {
      let cardDiv = document.createElement("div");
      cardDiv.setAttribute("class", "robot-card");

      let image = document.createElement("img");
      image.setAttribute("src", item["image"]);

      let roboName = document.createElement("h2");
      roboName.textContent = item["name"];

      let roboMail = document.createElement("p");
      roboMail.textContent = item["email"];

      cardDiv.appendChild(image);
      cardDiv.appendChild(roboName);
      cardDiv.appendChild(roboMail);

      main.appendChild(cardDiv);
    });
  }
};

searchBar.addEventListener("input", searchRobots);