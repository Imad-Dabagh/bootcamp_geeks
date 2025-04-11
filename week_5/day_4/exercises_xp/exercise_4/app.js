import { TodoList } from "./todo.js";

// let myTasks = [
//   {
//     task: "Do this",
//     completed: true,
//   },
//   {
//     task: "Do that",
//     completed: false,
//   },
// ];

let todo1 = new TodoList();

todo1.addTask('Read a book')
todo1.addTask("Finish Node.js");
todo1.addTask("Kill someone");
todo1.listTasks();

todo1.completeTask('read a book')
todo1.completeTask("go out");
todo1.listTasks();