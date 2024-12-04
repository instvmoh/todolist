const addButton = document.querySelector(".input");
const todo = document.querySelector(".js-todo");
const addDate = document.querySelector(".date");

let list = JSON.parse(localStorage.getItem("todoList")) || [];

function add() {
  let addValue = addButton.value;
  let dateDuJour = addDate.value;
  /*list.name = addValue;
  list.date = dateDuJour;
  if (!addValue || !dateDuJour) {
    alert("Please fill all the informations");
    return;}*/

  list.push({ name: addValue, date: dateDuJour });
  localStorage.setItem("todoList", JSON.stringify(list));
  addButton.value = "";
  addDate.value = "";
  todo.innerHTML = "";

  for (let i = 0; i < list.length; i++) {
    const html = `<p class="js-todo-list"><input type="checkbox" class="check" onclick="remove(${i})">${list[i].name} ${list[i].date}</input></p>`;
    todo.innerHTML += html;
  }
}

addButton.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    add();
  }
});

render();

function remove(i) {
  list.splice(i, 1);
  localStorage.setItem("todoList", JSON.stringify(list));
  render();
}

function render() {
  todo.innerHTML = "";

  for (let i = 0; i < list.length; i++) {
    /*const html = `<p>${list[i].name} ${list[i].date}<button onclick="remove(${i})">Delete</button></p>`;*/
    const html = `<p class="js-todo-list"><input type="checkbox" class="check" onclick="remove(${i})">${list[i].name} ${list[i].date}</input></p>`;
    todo.innerHTML += html;
  }
}
