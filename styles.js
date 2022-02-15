// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

// let arrayOfTodos = [
//     {
//     "userId": 14,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
// },
// {
//     "userId": 20,
//     "id": 2,
//     "title": "delectus aut autes",
//     "completed": false
// }]

const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((json) => arrayOfTodos = json)
}

const logTodos = () => {
    console.log(arrayOfTodos)
}

const populateTodos = () => {
    clearAll()
    for (i = 0; i < arrayOfTodos.length; i++) {
        const list = document.getElementById("todo-list")
        let listItem = document.createElement("li")
        const text = document.createTextNode(arrayOfTodos[i].title)
        listItem.appendChild(text)
        list.appendChild(listItem)
    }
}

const storedFilterValue = []

const filterTodos = () => {
    clearAll()
    const userNumber = document.getElementById("userNum").value
    const filterArray = arrayOfTodos.filter(filteredTodo => filteredTodo.userId == userNumber)
    for (i = 0; i < filterArray.length; i++) {
        const list = document.getElementById("todo-list")
        let listItem = document.createElement("li")
        const text = document.createTextNode(filterArray[i].title)
        listItem.appendChild(text)
        list.appendChild(listItem)
        storedFilterValue.push(filterArray[i])
        console.log(storedFilterValue)
    }
}


const completeTodos = () => {
    clearAll()
    for (i = 0; i < storedFilterValue.length; i++) {
        if (storedFilterValue[i].completed == true) {
            const list = document.getElementById("todo-list")
            let listItem = document.createElement("li")
            const text = document.createTextNode(storedFilterValue[i].title)
            listItem.appendChild(text)
            list.appendChild(listItem)
        }
    }
}


const incompleteTodos = () => {
    clearAll()
    for (i = 0; i < storedFilterValue.length; i++) {
        if (storedFilterValue[i].completed == false) {
            let list = document.getElementById("todo-list")
            let listItem = document.createElement("li")
            const text = document.createTextNode(storedFilterValue[i].title)
            listItem.appendChild(text)
            list.appendChild(listItem)

        }
    }
}

const clearAll = () => {
    let clear = document.getElementById("todo-list")
    clear.textContent = ''

}
