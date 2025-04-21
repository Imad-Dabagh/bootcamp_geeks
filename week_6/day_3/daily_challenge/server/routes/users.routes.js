const express = require("express");
const router = express.Router();
const controller = require("../controllers/users.controller.js");

router.post("/register", controller.addUser);
router.post("/login", controller.loginUser);
router.get("/users", controller.getUsers);
router.get("/users/:id", controller.getUserById);
router.put("/users/:id", controller.updateUser);

module.exports = router;
