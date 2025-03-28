const tasks = [];
let task_id = 0;

let form = document.getElementById("taskForm");
let taskInput = document.getElementById("taskInput");
let taskBtn = document.getElementById("taskBtn");

let listTasks = document.querySelector(".listTasks");



const addTask = (event) => {
    event.preventDefault();
    let taskText = taskInput.value.trim();

    if(taskText === ""){
        alert("Please write a task to add");
        return;
    }

    let taskObject = {
      task_id: task_id++,
      text: taskText,
      done: false,
    };

    tasks.push(taskObject);

    let newDiv = document.createElement("div")
    newDiv.setAttribute("class", "task");
    newDiv.setAttribute("data_task_id", taskObject.task_id);

    let newSpan = document.createElement("span");
    newSpan.textContent = `${taskObject.text}`;

    if (taskObject.done) {
      newSpan.style.textDecoration = "line-through";
      newSpan.style.color = "red";
    }

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = 'X';
    deleteBtn.classList.add("delete");

    newDiv.appendChild(deleteBtn);
    newDiv.appendChild(checkbox);
    newDiv.appendChild(newSpan);

    listTasks.appendChild(newDiv);

    taskInput.value = '';

}

const doneTask = (event) => {
  if (!event.target.matches("input[type='checkbox']")) return;

  let taskDiv = event.target.closest(".task");
  let taskId = Number(taskDiv.getAttribute("data-task-id"));

  let task = null;
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].task_id === taskId) {
      task = tasks[i];
      break;
    }
  }

  if (task !== null) {
    task.done = event.target.checked;

    let span = taskDiv.querySelector("span");
    if (task.done) {
      span.style.textDecoration = "line-through";
      span.style.color = "red";
    } else {
      span.style.textDecoration = "none";
      span.style.color = "black";
    }
  }
};

const deleteTask = (event) => {
  if (!event.target.matches(".delete")) return;

  let taskDiv = event.target.closest(".task");
  let taskId = Number(taskDiv.getAttribute("data-task-id"));

  let taskIndex = -1;
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].task_id === taskId) {
      taskIndex = i;
      break;
    }
  }

  if (taskIndex !== -1) {
    for (let i = taskIndex; i < tasks.length - 1; i++) {
      tasks[i] = tasks[i + 1];
    }
    tasks.pop();
  }

  taskDiv.remove();
};

form.addEventListener("submit", addTask);
listTasks.addEventListener("change", doneTask);
listTasks.addEventListener("click", deleteTask);







// // Create Ul
// let ulList = document.createElement("ul");
// ulList.setAttribute("class", "listTasks");
// listTasks.appendChild(ulList);
// // Create Li
// let newLi = document.createElement("li");
// ulList.setAttribute("class", "task");
// newLi.textContent = task;
// ulList.appendChild(newLi);  