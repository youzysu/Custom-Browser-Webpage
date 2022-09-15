const toDoForm = document.getElementById("toDoForm");
const toDoInput = document.querySelector("#toDoForm input");
const toDoList = document.querySelector("#toDoList"); 
const ToDos_KEY = "ToDos"

function paintToDo(newToDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    toDoList.appendChild(li);
    li.appendChild(span);
    span.innerText = newToDo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(button);
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
}

const saveToDo = [];

function storageToDo () {
    localStorage.setItem(ToDos_KEY, JSON.stringify(saveToDo));
}

toDoForm.addEventListener("submit", handleToDoSubmit)

function handleToDoSubmit (event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value="";
    paintToDo(newToDo);
    saveToDo.push(newToDo);
    storageToDo();
}

const savedToDo = JSON.parse(localStorage.getItem(ToDos_KEY));
savedToDo.forEach(paintToDo);