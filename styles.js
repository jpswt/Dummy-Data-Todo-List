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
        .then( (response) => response.json())
        .then( (json) => arrayOfTodos = json)
    }
    
    const logTodos = () => {
        console.log(arrayOfTodos)
    }
    
    const populateTodos = () => {

        for (i=0; i < arrayOfTodos.length; i++) {
            let ol = document.getElementById("todo-list")
            let li = document.createElement("li")
            const text = document.createTextNode(arrayOfTodos[i].title)
            li.appendChild(text)
            ol.appendChild(li)
        }
    }

    
    const filterTodos = () => {
        const userNum = document.getElementById("userNum").value
        let filterArray = arrayOfTodos.filter(filter => filter.userId == userNum)
        clearAll()
        populatefilteredTodos(filterArray)
        console.log(filterArray)
        
        
    }
    
    
    const populatefilteredTodos = (filterArray) => {
        for (i=0; i < filterArray.length; i++) {
                let ol = document.getElementById("todo-list")            
                let li = document.createElement("li")
                const text = document.createTextNode(filterArray[i].title)
                li.appendChild(text)
                ol.appendChild(li)
                
        }   
    }
        
    const storage = []
    
    const completedTodos = (filterArray) => {
        clearAll()
        for (i=0; i < filterArray.length; i++) {
            if(filterArray[i].completed == true){
                let ol = document.getElementById("todo-list")            
                let li = document.createElement("li")
                const text = document.createTextNode(filterArray[i].title)
                li.appendChild(text)
                ol.appendChild(li)
            }
        }   
    }




    const clearAll = () => {
        let clear = document.getElementById("todo-list")
        clear.textContent = ''
        
 }

