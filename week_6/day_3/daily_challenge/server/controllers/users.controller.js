const express = require("express");
const fs = require("fs");
const bcrypt = require("bcrypt");


const path = require("path");

const filePath = path.join(__dirname, "..", "data", "users.json");

const readData = () => {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
};

const writeData = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
};

//  ==== Register User ====

const addUser = (req, res) => {
  const users = readData();
  const { firstname , lastname, email, username, password } = req.body;

  const userExists = users.find((user) => user.username === username);

  if (userExists) {
    return res.send("Username already exists");
  };

  const hashPass = bcrypt.hashSync(password, 10);

  const newUser = {
    id: users.length + 1,
    firstname,
    lastname,
    email,
    username,
    password: hashPass
  };
  users.push(newUser);
  writeData(users);
  res.send("Hello Your account is now created!");
};

// ==== Login User ====

const loginUser = (req,res) => {
  const users = readData();
  const { username, password } = req.body;

  const existingUser = users.find((user) => user.username === username);
  if (existingUser) {
    if (bcrypt.compareSync(password, existingUser.password)) {
      res.send(`Hi ${username} welcome back again!`);
    } else {
      res.send(`Incorrect Password!`);
    }
  } else {
    res.send(`Username is not registered`);
  }
}

// ==== Get All Users ====

const getUsers = (req, res) => {
  const users = readData();

  if (!users || users.length === 0) {
    return res.send("No users found");
  } else {
    res.json(users);
  }
};

// ==== Get User by ID ====

const getUserById = (req, res) => {
  const users = readData();
  const userId = Number(req.params.id);

  const user = users.find((user) => user.id === userId);

  if (!user) {
    return res.send("User not found");
  }

  res.json(user);
};

// ==== Update User ====

const updateUser = (req, res) => {
  const users = readData();
  const userId = Number(req.params.id);

  const userIndex = users.findIndex((user) => user.id === userId);

  if (userIndex === -1) {
    return res.send("User not found");
  }

  const { firstname, lastname, email, username, password } = req.body;

  const updatedUser = {
    id: userId,
    firstname,
    lastname,
    email,
    username,
    password: password ? bcrypt.hashSync(password, 10) : users[userIndex].password
  };

  users[userIndex] = updatedUser;
  writeData(users);

  res.send("User updated");
};

module.exports = {
  addUser,
  loginUser,
  getUsers,
  getUserById,
  updateUser,
};
