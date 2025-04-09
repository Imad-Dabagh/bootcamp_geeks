const getCharacters = async () => {
  try {

    let characterInfo = document.getElementById("characterInfo");
    characterInfo.textContent = "";

    let loadingIcon = document.getElementById("loadingIcon");
    loadingIcon.classList.remove("hidden");

    // We have 82 character but i used 100 to get errors
    const randomNumber = Math.floor(Math.random() * 100);

    const response = await fetch(
      `https://swapi.dev/api/people/${randomNumber}`
    );

    if (!response.ok) {
      throw new Error("");
    } else {
      const character = await response.json();

      let name = document.createElement("h1");
      let height = document.createElement("p");
      let gender = document.createElement("p");
      let birthYear = document.createElement("p");
      let homeWorld = document.createElement("p");

      name.textContent = `Name: ${character.name}`;
      height.textContent = `Height: ${character.height}`;
      gender.textContent = `Gender: ${character.gender}`;
      birthYear.textContent = `Birth Year: ${character.birth_year}`;

      const getHomeWorld = async () => {
        const response = await fetch(character.homeworld);
        const homeWorldData = await response.json();
        return homeWorldData.name;
      };

      const homeworldName = await getHomeWorld();
      homeWorld.textContent = `Homeworld: ${homeworldName}`;

      loadingIcon.classList.add("hidden");

      characterInfo.appendChild(name);
      characterInfo.appendChild(height);
      characterInfo.appendChild(gender);
      characterInfo.appendChild(birthYear);
      characterInfo.appendChild(homeWorld);
    }
  } catch (error) {
    let characterInfo = document.getElementById("characterInfo");
    characterInfo.innerHTML = `<h1 style='color: yellow;'>Oh No! That person isnt available</h1>`;
    loadingIcon.classList.add("hidden");
  }
};

let findBtn = document.getElementById("find");
findBtn.addEventListener("click", getCharacters);
