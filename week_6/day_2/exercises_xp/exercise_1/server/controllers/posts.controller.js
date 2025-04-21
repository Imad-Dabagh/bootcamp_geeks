const postsModel = require("../models/posts.model.js");

const getPosts = (req, res) => {
  postsModel
    .getAllPosts()
    .then((posts) => res.send(posts))
    .catch((err) => res.send("Error: " + err));
};

const getPost = (req, res) => {
  const postId = Number(req.params.id);
  postsModel
    .getPostById(postId)
    .then((post) =>
      post.length === 0 ? res.send("Post Not Found") : res.send(post)
    )
    .catch((err) => res.send("Error: " + err));
};

const createPost = (req, res) => {
  const { title, content } = req.body;
  postsModel
    .createPost(title, content)
    .then((newPost) => res.send("Added: " + newPost))
    .catch((err) => res.send("Error: " + err));
};

const updatePost = (req, res) => {
  const postId = Number(req.params.id);
  const { title, content } = req.body;
  postsModel
    .updatePost(postId, title, content)
    .then((updatedPost) => res.send("Updated: " + updatedPost))
    .catch((err) => res.send("Error: " + err));
};

const deletePost = (req, res) => {
  const postId = Number(req.params.id);
  postsModel
    .deletePost(postId)
    .then((deletedPost) => res.send("Deleted: " + deletedPost))
    .catch((err) => res.send("Error: " + err));
};

module.exports = {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
};
