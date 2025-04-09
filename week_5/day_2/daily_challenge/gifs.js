let myForm = document.getElementById("myForm");
let myInput = document.getElementById("myInput");

let gifContainer = document.createElement('div')
gifContainer.setAttribute('class', 'container')
document.body.appendChild(gifContainer)

let delAllButton = document.createElement("button");
delAllButton.innerText = "Delete All";

delAllButton.addEventListener('click', () => {
  gifContainer.remove();
})

const getInputValue = (e) => {
  e.preventDefault();
  let inputValue = myInput.value;
  return inputValue
}

const fetchingGifs = async (query) => {
    try{
        const response = await fetch(
          `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
        );

        if(!response.ok){
            throw new Error("HTTP Error")
        }

        const data = await response.json()

        const randomIndex = Math.floor(Math.random() * data.data.length)

        let gifUrl = data.data[randomIndex].images.original.url;

        let gifDiv = document.createElement('div')
        gifDiv.classList.add('gifs')

        let gifImg = document.createElement('img')
        gifImg.setAttribute("src", gifUrl);
        gifImg.style.width = "120px"

        let delButton = document.createElement('button')
        delButton.innerText = 'Delete'

        delButton.addEventListener('click', (e) => {
          gifDiv.remove();
        })

        gifDiv.appendChild(gifImg);
        gifDiv.appendChild(delButton);
        gifContainer.appendChild(gifDiv);

    } catch (error){
        console.log(`Error: ${error}`)
    }
}

myForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    let query = myInput.value;

    if (query === "") {
      alert("Please write something to search for!");
      window.location.reload();
    } else {
      await fetchingGifs(query);
      gifContainer.appendChild(delAllButton);
    }
})