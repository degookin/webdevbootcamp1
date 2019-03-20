function test(x,y) {
    return y - x;
}

test(10,40);
//30



function test(x) {
    return x*2;
    console.log(x);
    return x/2;
}

test(40);
//This returns 80 because when any return is executed
//the funcion is done



//Write an isEven() function which takes a number and returns
//true or false if it's even or not
//Ex. isEven(2) True
function isEven(x) {
    if(x % 2 === 0){
        return true;
    }
    else {
        return false;
    }
}

isEven(2);  //"true"
isEven(7);  //"false"

//Another way to write above shorter.  This works because we're
//evaluating a boolean statement, so no need to do the if this
//then return true or false
function isEven(num) {
    return num % 2 === 0;
}


//Write a function factorial() which takes a single number
//and returns the factorial, which is written 4! which is 4x3x2x1
//Ex. factorial(4) = 24
function factorial(numb) {
    //define a result variable, counting up from 1
    var result = 1;
    //calculate factorial and store value in result, starting at 2
    //as no point to multiply 1*1
    for(var i = 2; i <= numb; i++) {
        // result = result * i;  //Same as below
        result *= i;
    }
    return result;
}
factorial(4);  //24


//Write a kebabToSnake() function that takes a word written with dashes
//and changes it to have underscores
//Ex. kebabToSnake("hello-world") returns "hello_world"
function kebabToSnake(word) {
    //have to create new var bc the replace doesn't replace anything in the original
    var newWord = word.replace(/-/g, "_");
    // / /g is a regular expresion that searches for what's inside
    return(newWord);
}

kebabToSnake("hello-world");  //"hello_world"



