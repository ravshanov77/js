const todoList = [{name: 'make dinner', dueDate: '05/31/2024'},
 {name: 'wash dishes', dueDate: '06/7/2024'}]

render()

function render() {
    let todoListHTML = ''

    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i]
        const { name, dueDate } = todo
        const html = `
            <p>
                ${name} ${dueDate}
                <button class="delete-button" 
                onclick="todoList.splice(${i}, 1);
                render()">Delete</button>
            </p>`
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
}
