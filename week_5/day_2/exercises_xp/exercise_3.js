// Exercise 3 : Async function
// == Improve the program below :
// ===== fetch("https://www.swapi.tech/api/starships/9/")
// =====    .then(response => response.json())
// =====    .then(objectStarWars => console.log(objectStarWars.result));

const asyncFucntion = async () => {
    try {
        const response = await fetch("https://www.swapi.tech/api/starships/9/")

        if(!response.ok){
            throw new Error("HTTP Error")
        }

        const objectStarWars = await response.json();

        console.log(objectStarWars.result);

    } catch (error){
        console.log(`Error: ${error}`);
    }
}

asyncFucntion();