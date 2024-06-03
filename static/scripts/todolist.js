const todoList = JSON.parse(localStorage.getItem('todoList')) || [{
    name: 'make dinner',
    dueDate: '2022-12-22'
  }, {
    name: 'wash dishes',
    dueDate: '2022-12-22'
  }];
render()

function render() {
    let todoListHTML = ''

    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i]
        const { name, dueDate } = todo
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class="delete-button" 
            onclick="todoList.splice(${i}, 1);
            render(); saveToStorage();">Delete</button>`
        todoListHTML += html
    }
    document.querySelector('.todo-list').innerHTML = todoListHTML
}

function add() {
    const todoName = document.querySelector('.todo-name').value;
    const todoDate = document.querySelector('.todo-date').value;

    todoList.push({name: todoName, dueDate: todoDate});
    
    document.querySelector('.todo-name').value = '';
    document.querySelector('.todo-date').value = '';

    render();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }