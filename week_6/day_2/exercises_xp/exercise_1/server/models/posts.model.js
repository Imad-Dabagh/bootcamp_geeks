const db = require("../config/db");

const getAllPosts = () => {
  return db.select().from("posts");
};

const getPostById = (postId) => {
  return db.select().from("posts").where("id", postId);
};

const createPost = (title, content) => {
  return db("posts").insert({ title, content }).returning("*");
};

const updatePost = (postId, title, content) => {
  return db("posts")
    .where({ id: postId })
    .update({ title, content })
    .returning("*");
};

const deletePost = (postId) => {
  return db("posts").where("id", postId).del().returning("*");
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
