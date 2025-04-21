const express = require("express");
const fs = require("fs");
const app = express();

const path = require("path");

// const filePath = '../data/tasks.json';
const filePath = path.join(__dirname, "..", "data", "tasks.json");

const readData = () => {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
};

const writeData = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
};

const getTasks = (req,res) => {
    const tasks = readData();
    if(!tasks){
        return res.send("No tasks found");
    } else {
        res.json(tasks);
    }
};

const getTaskById = (req, res) => {
  const tasks = readData();
  if (!tasks) {
    return res.send("No tasks found");
  } else {
    const taskId = Number(req.params.id);
    const task = tasks.find((task) => task.id === taskId);

    res.json(task);
  }
};

const addTask = (req, res) => {
    const tasks = readData();
    const { task } = req.body;

    if (!task) {
      return res.send("Task content is required");
    }

    const newTask = {
        id: tasks.length + 1,
        task,
        status: false
    }
    tasks.push(newTask);
    writeData(tasks);
    res.send("Task added");
};

const updateTask = (req,res) => {
    const tasks = readData();
    const taskId = Number(req.params.id);

    const taskIndex = tasks.findIndex(task => task.id === taskId);

    const { task, status } = req.body;

    if (!task) {
      return res.send("Task content is required");
    }
    
    const updatedTask = {
      id: taskId,
      task,
      status: status ? status : false,
    };

    tasks[taskIndex] = updatedTask;
    writeData(tasks);

    res.send("Task updated");
};

const deleteTask = (req,res) => {
    const tasks = readData();
    const taskId = Number(req.params.id);

    const taskIndex = tasks.findIndex((task) => task.id === taskId);

    tasks.splice(taskIndex, 1);
    writeData(tasks);
    res.send("Task deleted");
}

module.exports = { getTasks, getTaskById, addTask, updateTask, deleteTask };