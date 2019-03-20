//A closure is a function that makes use variables
//defined in outer functions that
//have previously been returned

function outer(){
    var data = "closures are ";
    return function inner(){
        var innerData = "awesome";
        return data + innerData;
    }
}

//calling outer returns the definition of inner
//in which we see the variable data from the outer function
outer();

//function inner(){
//    var innerData = "awesome";
//    return data + inner data
//}

outer()();
//returns "closures are awesome"



function outer(a){
    return function inner(b){
        //the inner func is making use of the var a
        //which was defined in an outer func
        //and by the time this is called, outer func has returned.
        //This func called inner is a closure
        return a + b
    }
}

outer(5)(5); //10



//PRIVATE VARIABLES
//These don't exist in JS, but we can use closures
//to replicate the behavior

function counter(){
    var count = 0;
    return function(){ //anonymous func
        return ++count
    }
}

var c = counter();

c; //returns the function definition function(){return ++count}

c(); //1 and goes up everytime you call c()

//However, nobody has access to the variable count
//it's a private var, so nobody can change start value
count; //returns ReferenceError, count is not defined




