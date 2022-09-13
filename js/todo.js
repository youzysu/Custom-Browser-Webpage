const toDoForm = document.getElementById("toDoForm");
const toDoInput = document.querySelector("#toDoForm input");
const toDoList = document.querySelector("#toDoList");



function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
}

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

toDoForm.addEventListener("submit", handleToDoSubmit)

const saveToDo = [];

function storageToDo () {
    localStorage.setItem("ToDos", JSON.stringify(saveToDo));
}

function handleToDoSubmit (event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value="";
    paintToDo(newToDo);
    saveToDo.push(newToDo);
    storageToDo();
}

