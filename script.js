//v1
var  todos = ["Item 1", "Item 2", "Item 3"];
console.log("My ToDos:", todos);
todos.push ("Item 4");
todos[0] = "New 1";
todos.splic([0,1);


//v2 Funktionen
//Todo anzeigen
function displayTodos() {
    console.log("My ToDos:", todos);
}

//Todo hinzufügen
function addTodos(todo) {
    todos.push (todo);
    displayTodos();
}

//Todo ändern
function changeTodo(position, newValue) {
    todos[position] = newValue;
    displayTodos();
}

//Todo löschen
function deleteTodo(position) {
    todos.splice(position, 1);
    displayTodos();
}


//v3 Objects und Methods
var todolist = {
    todos: ["Item 1", "Item 2", "Item 3"],
    displayTodos: function() {
        console.log("My Todos", this.todos);
    },
    addTodo: function(todo) {
        this.todos.push(todo);
        this.displayTodos();
    },
    changeTodo: function(position, newValue) {
        this.todos[position] = newValue;
        this.displayTodos();
    },
    deleteTodo: function (position){
        this.todos.splice(position, 1);
        this.displayTodos();
    }
}


//v4
var todolist = {
    todos: [],
    displayTodos: function() {
        console.log("My Todos", this.todos);
    },
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false,
        });
        this.displayTodos();
    },
    changeTodo: function(position, newTodoText) {
        this.todos[position].todoText = newTodoText;
        this.displayTodos();
    },
    deleteTodo: function (position){
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    toogleCompleted: function(position) {
        var todo = this.todos[position]; //neue var erspart tippen, sonst in nächter zeile 2 mal this.todos[position]
        todo.completed = !todo.completed;
        this.displayTodos();
    }
}


//v5 und v6 for Loops! mehr Kommentieren!!
var todolist = {
    todos: [],
    displayTodos: function () {
        if (this.todos.length === 0) {
            console.log("No Todos on the List");
        } else {
            console.log("My Todos:");
            for (var i = 0; i < this.todos.length; i++) {
                if (this.todos[i].completed === true) {
                    console.log("(X)", this.todos[i].todoText);
                } else {
                    console.log("( )", this.todos[i].todoText);
                }
            }
        }
    },
    addTodo: function (todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false,
        });
        this.displayTodos();
    },
    changeTodo: function (position, newTodoText) {
        this.todos[position].todoText = newTodoText;
        this.displayTodos();
    },
    deleteTodo: function (position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    toogleCompleted: function (position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    },
    toogleAll: function () {
        var totalTodos = this.todos.length;
        var completedTodos = 0;
        for (var i = 0; i < totalTodos; i++) {
            if (this.todos[i].completed === true) {
                completedTodos++;
            }
        }
        if (completedTodos === totalTodos) {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = false;
            }
        } else {
            for(var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = true;
            }
        }
        this.displayTodos();
    }
};

var displayTodosButton = document.getElementById("displayTodosButton");
var toogleAllButton =document.getElementById("toogleAllButton");

displayTodosButton.addEventListener("click", function(){
    todolist.displayTodos();
});

toogleAllButton.addEventListener("click", function() {
    todolist.toogleAll();
});