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
        .then((console.log("fetch complete")))
        .then((json) => arrayOfTodos = json)
}

const logTodos = () => {
    console.log(arrayOfTodos)
}

const populateTodos = () => {
    clearAll()
    for (i = 0; i < arrayOfTodos.length; i++) {
        let ol = document.getElementById("todo-list")
        let li = document.createElement("li")
        const text = document.createTextNode(arrayOfTodos[i].title)
        li.appendChild(text)
        ol.appendChild(li)
    }
}

git 