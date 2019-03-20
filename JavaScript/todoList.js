window.setTimeout(function() {
    // put all of your JS code from the lecture here
    //which will let HTML display all the time
  

var todos = [];

var input = prompt("What would you like to do?");

while(input !== "quit") {
    //handle input
    if(input === "list") {
        listTodos();
    } else if(input === "new") {
        addTodo();
    } else if(input === "delete") {
        deleteTodos();
    }
    //ask again for new input
    input = prompt("What would you like to do?");
}
console.log("OK, You quit the app");

//We added calling a function into the loop and took the function themselves
//out of the loop to clean it up some (refactor)
function listTodos() {
    //todo is item, i (or anything) is index of item
    console.log("**********")
    todos.forEach(function(todo, i){
        console.log(i + ": " + todo)
    });
    console.log("**********")
}

function addTodo() {
    //ask for new todo
    var newTodo = prompt("Enter new todo");
    //add to todos
    todos.push(newTodo);
    console.log("Todo item added")
}

function deleteTodos() {
    //ask for index of todo to be deleted
    var index = prompt("Enter index of todo to delete");
    //delete that todo - splice() - the 1 is how many items to delete starting at whichever index number we type
    todos.splice(index, 1);
    console.log("Todo item deleted")
}

}, 500);