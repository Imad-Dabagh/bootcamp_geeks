const express = require("express");
const router = express.Router();

const books = [
  {
    id: 0,
    title: "The Alchemist",
    author: "Paulo Coelho",
  },
];

router.get("/", (req, res) => {
  res.json(books);
});

router.post("/", (req, res) => {
  const newBook = {
    id: books.length === 0 ? 0 : books.length + 1,
    title: req.body.title,
    author: req.body.author,
  };
  books.push(newBook);
  res.send("Book Added");
});

router.put("/:id", (req, res) => {
  const bookID = Number(req.params.id);
  const bookIndex = books.findIndex(book => book.id === bookID);
  const updatedBook = {
    id: bookID,
    title: req.body.title,
    author: req.body.author,
  };
  books[bookIndex] = updatedBook;
  res.send("Book Updated");
});

router.delete("/:id", (req, res) => {
  const bookID = Number(req.params.id);
  const bookIndex = books.findIndex(book => book.id === bookID);
  books.splice(bookIndex, 1);
  res.send("Book Deleted");
});

module.exports = router;
