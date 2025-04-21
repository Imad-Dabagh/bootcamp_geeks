const booksModel = require("../models/books.model.js");

const getBooks = (req, res) => {
  booksModel
    .getAllBooks()
    .then((books) => res.json(books))
    .catch((err) => res.send("Error: " + err));
};

const getBook = (req, res) => {
  const bookId = Number(req.params.bookId);
  booksModel
    .getBookById(bookId)
    .then((book) =>
      book.length === 0 ? res.send("Book not found") : res.json(book)
    )
    .catch((err) => res.send("Error: " + err));
};

const createBook = (req, res) => {
  const { title, author, publishedYear } = req.body;
  booksModel
    .createBook(title, author, publishedYear)
    .then((newBook) => res.send("Added: " + newBook))
    .catch((err) => res.send("Error: " + err));
};

module.exports = {
  getBooks,
  getBook,
  createBook,
};
