const input = document.getElementById("input-box");
const pushButton = document.getElementById("push-button");
const todoList = document.getElementById("todo");


let itemArr = [] = JSON.parse(localStorage.getItem('todo')) ? JSON.parse(localStorage.getItem('todo')) : [];

function saveIntoLocalStorage(arr = []) {
  localStorage.setItem("todo", JSON.stringify(arr));
}

function pushTODO() {
  const itemToAdd = document.getElementById("input-box").value;
  todoList.innerHTML += `<li>${itemToAdd}</li>`;
  itemArr.push(itemToAdd);

  saveIntoLocalStorage(itemArr);
}

function clearTODO() {
  todoList.innerHTML = "";
  localStorage.clear();
}

function deleteItemFromTODO() {
  const deleteInput = Number(document.getElementById("delete-box").value);
  let tea = todoList.childNodes[deleteInput];
  todoList.removeChild(tea);

  for (let i = 0; i < itemArr.length; i++) {
    if (deleteInput - 1 == itemArr.indexOf(tea.innerHTML)) {
      itemArr.splice(itemArr.indexOf(tea.innerHTML), 1);
      break;
    }
  }

  saveIntoLocalStorage(itemArr);
}

function loadFromLocalStorage() {
  let tempList = JSON.parse(localStorage.getItem('todo'));
  for (const key in tempList) {
    todoList.innerHTML += `<li>${tempList[key]}</li>`;
  }
}

window.onload = loadFromLocalStorage();