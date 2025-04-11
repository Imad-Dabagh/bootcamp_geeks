export class TodoList {
    constructor(){
        this.tasksArray = [];
    }
    addTask = (newTask) => {
        this.tasksArray.push({task: newTask, completed: false})
    }

    completeTask = (task) => {
        let myArray = this.tasksArray
        const oneTask = myArray.find(
          (t) => t.task.toLowerCase() === task.toLowerCase()
        );
        if (oneTask){
            oneTask.completed = true;
            console.log(`Completed task: ${oneTask.task}`);
        } else {
            console.log('Task Not Found')
        } 
    }

    listTasks = () => {
        console.log(this.tasksArray);
    }
}