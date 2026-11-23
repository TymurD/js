let taskInput = document.querySelector("#taskInput");
let addButton = document.querySelector("#addButton");
let taskCounter = document.querySelector("#taskCounter");
let taskList = document.querySelector("#taskList");

function addTask() {
    let text = taskInput.value.trim()

    if (text === "") {
        alert("Please enter a task");
        return;
    }
    let li = document.createElement("li");
    li.textContent = text;
    li.classList.add("task")
    let span = document.createElement("span")
    span.classList.add("task-text");
    span.textContent = text;

    taskList.append(li);
    taskInput.value = '';
}

addButton.addEventListener("click", addTask);
