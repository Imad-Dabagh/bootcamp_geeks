const fetchGiphy2 = async () => {
    try {
        const response = await fetch(
          "https://api.giphy.com/v1/gifs/search?q=sun&rating=g&limit=10&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
        );

        if (!response.ok){
            throw new Error("HTTP Error")
        }

        const data = await response.json()

        console.log(data)

    } catch (error) {
        console.log("Error: " + error);
    }
}

fetchGiphy2();