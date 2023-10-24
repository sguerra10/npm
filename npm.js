class Task {
    constructor(id, description, completed = false) {
        this.id = id;
        this.description = description;
        this.completed = completed;
    }
}

class TaskList {
    constructor() {
        this.tasks = [];
    }

    addTask(description) {
        const id = this.tasks.length + 1;
        const newTask = new Task(id, description);
        this.tasks.push(newTask);
        return newTask;
    }

    markTaskAsCompleted(taskId) {
        const task = this.tasks.find(task => task.id === taskId);
        if (task) {
            task.completed = true;
            return task;
        }
        return null;
    }

    getTasks() {
        return this.tasks;
    }
}

// Ejemplo de uso
const taskList = new TaskList();

const task1 = taskList.addTask("Hacer la compra");
const task2 = taskList.addTask("Estudiar para el examen");

console.log("Lista de tareas:");
console.log(taskList.getTasks());

taskList.markTaskAsCompleted(task1.id);

console.log("Lista de tareas después de completar la primera tarea:");
console.log(taskList.getTasks());
