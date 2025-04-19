const express = require("express");
const router = express.Router();

const todos = [
  {
    id: 0,
    title: "Eat Apple",
    status: "pending",
  },
];

router.get("/", (req , res) => {
    res.json(todos);
});

router.post("/", (req, res) => {
  const newTask = {
    id: todos.length === 0 ? 0 : todos.length + 1,
    title: req.body.title,
    status: "pending",
  }
  todos.push(newTask);
  res.send("Task Created");
});

router.put("/:id", (req,res) => {
    const taskID = Number(req.params.id);
    const taskIndex = todos.findIndex(task => task.id === taskID);
    const updatedTask = {
        id: taskID,
        title: req.body.title,
        status: req.body.status ? req.body.status : "pending",
    }
    todos[taskIndex] = updatedTask;
    res.send("Task Updated");
})

router.delete("/:id", (req, res) => {
  const taskID = Number(req.params.id);
  const taskIndex = todos.findIndex(task => task.id === taskID);
  todos.splice(taskIndex , 1)
  res.send("Task Deleted");
});

module.exports = router;