const todoList = JSON.parse(localStorage.getItem("todoList")) || [
  {
    name: "make dinner",
    dueDate: "2022-12-22",
  },
  {
    name: "wash dishes",
    dueDate: "2022-12-22",
  },
];

render();

function render() {
  let todoListHTML = "";

  todoList.forEach((todo, i) => {
    const { name, dueDate } = todo;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-button" >Delete</button>`;
    todoListHTML += html;
  });

  document.querySelector(".todo-list").innerHTML = todoListHTML;

  document.querySelectorAll(".delete-button").forEach((deleteButton, index) => {
    deleteButton.addEventListener("click", () => {
      todoList.splice(index, 1);
      render();
      saveToStorage();
    });
  });
}

document.querySelector(".add-button").addEventListener("click", () => add());

function add() {
  const todoName = document.querySelector(".todo-name").value;
  const todoDate = document.querySelector(".todo-date").value;

  todoList.push({ name: todoName, dueDate: todoDate });

  document.querySelector(".todo-name").value = "";
  document.querySelector(".todo-date").value = "";

  render();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem("todoList", JSON.stringify(todoList));
}
