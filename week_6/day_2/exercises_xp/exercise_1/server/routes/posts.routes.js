const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts.controller.js");

router.get("/", postsController.getPosts);
router.get("/:id", postsController.getPost);
router.post("/", postsController.createPost);
router.put("/:id", postsController.updatePost);
router.delete("/:id", postsController.deletePost);

module.exports = router;
