const express = require("express");
// const app = express();
const router = express.Router();
const controllers = require("../controllers/tasks.controller.js");

router.get("/", controllers.getTasks);
router.get("/:id", controllers.getTaskById);
router.post("/", controllers.addTask);
router.put("/:id", controllers.updateTask);
router.delete("/:id", controllers.deleteTask);

module.exports = router;