const express = require('express');
const app = express();

// 5.
const books = [
  {
    id: 1,
    title: "The JavaScript",
    author: "Ahmad Adri",
    publishedYear: 1999,
  },
  {
    id: 2,
    title: "PHP Cheat Book",
    author: "Imad Dabagh",
    publishedYear: 2008,
  },
  {
    id: 3,
    title: "Python All in one book",
    author: "Brahim",
    publishedYear: 2008,
  },
];

// 6.
app.listen(5000, () => {
    console.log("server is listening on port 5000");
})

app.use(express.json());

// 7. Implement the “Read all” route by defining a route at GET /api/books
app.get('/api/books', (req,res)=> {
    books ? res.json(books) : res.send("No books found");
})

// 8. Implement the “Read” route by defining a route at GET /api/books/:bookId
app.get("/api/books/:bookId", (req, res) => {
  const id = Number(req.params.bookId);
  const book = books.find((book) => book.id === id);
  book ? res.status(200).json(book) : res.status(404).send("Book not found");
});

// 9. Implement the “Create” route at POST /api/books.
app.post('/api/books', (req,res) => {
    const newBook = {
      id: books.length + 1,
      title: req.body.title,
      author: req.body.author,
      publishedYear: req.body.publishedYear,
    };
    books.push(newBook);

    res.status(201).send("Book Added")
})