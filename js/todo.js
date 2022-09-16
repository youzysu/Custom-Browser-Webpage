const toDoForm = document.getElementById("toDoForm");
const toDoInput = document.querySelector("#toDoForm input");
const toDoList = document.querySelector("#toDoList"); 
const ToDos_KEY = "ToDos"

let saveToDo = [];

function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    toDoList.appendChild(li);
    li.appendChild(span);
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(button);
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    saveToDo = saveToDo.filter((newToDo) => newToDo.id !== parseInt(li.id));
    storageToDo();
}

function storageToDo () {
    localStorage.setItem(ToDos_KEY, JSON.stringify(saveToDo));
}

toDoForm.addEventListener("submit", handleToDoSubmit)

function handleToDoSubmit (event) {
    event.preventDefault();
    const newToDo = {
        id: Date.now(),
        text: toDoInput.value,
    };
    toDoInput.value="";
    paintToDo(newToDo);
    saveToDo.push(newToDo);
    storageToDo();
}

const savedToDo = localStorage.getItem(ToDos_KEY);

if (savedToDo !== null) {
const parsedToDos = JSON.parse(savedToDo);
saveToDo = parsedToDos;
parsedToDos.forEach(paintToDo);
}