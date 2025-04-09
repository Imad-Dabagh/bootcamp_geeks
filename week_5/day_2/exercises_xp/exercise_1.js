// Exercise 1 : Giphy API
const fetchGiphy = async () => {
  try {
    const response = await fetch(
      "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
    );

    if (!response.ok) {
      throw new Error(`HTTP error!`);
    }

    const data = await response.json();

    console.log("data", data);

  } catch (err) {
    console.log("Error: ", err);
  }

};

fetchGiphy();