let taskInput = document.querySelector("#taskInput");
let addButton = document.querySelector("#addButton");
let taskCounter = document.querySelector("#taskList");
let taskList = document.querySelector("#taskList");

function addTask() {
    let text = taskInput.value.trim();

    if(text === "") {
        alert("Please enter something");
        return;
    }
    let li = document.createElement("li");
    li.classList.add("task");
    let span = document.createElement("span");
    span.classList.add("task-text");
    span.textContent = text;

    let doneButton = document.createElement("button");
    doneButton.textContent = "Done";

    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit-btn");

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");

    li.append(span, doneButton, editButton, deleteButton);


    li.textContent = text;
    taskList.append(li);
    taskInput.value = "";
}
addButton.addEventListener("click", addTask);