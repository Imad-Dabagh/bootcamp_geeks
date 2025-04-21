const db = require("../config/db");

const getAllBooks = () => {
  return db.select().from("books");
};

const getBookById = (bookId) => {
  return db.select().from("books").where("id", bookId);
};

const createBook = (title, author, publishedYear) => {
  return db("books").insert({ title, author, publishedYear }).returning("*");
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
};
