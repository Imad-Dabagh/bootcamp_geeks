// 1. Create an array with two book objects
let allBooks = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    image: "atomic_habits.jpg",
    alreadyRead: true,
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    image: "rich_dad_poor_dad.jpg",
    alreadyRead: false,
  },
];

// 2. Select the section where books will be displayed
let bookSection = document.querySelector(".listBooks");

// 3. Loop through the books and create a div for each one
for (let i = 0; i < allBooks.length; i++) {
  let bookDiv = document.createElement("div");

  // 4. Create a paragraph for title and author
  let bookInfo = document.createElement("p");
  bookInfo.textContent =
    allBooks[i].title + " written by " + allBooks[i].author;

  // 5. Set text color to red if the book is already read
  if (allBooks[i].alreadyRead) {
    bookInfo.style.color = "red";
  }

  // 6. Create an image element and set its properties
  let bookImage = document.createElement("img");
  bookImage.setAttribute("src", allBooks[i].image);
  bookImage.style.width = "100px";

  // 7. Append elements to the book div
  bookDiv.appendChild(bookInfo);
  bookDiv.appendChild(bookImage);

  // 8. Append the book div to the section
  bookSection.appendChild(bookDiv);
}
