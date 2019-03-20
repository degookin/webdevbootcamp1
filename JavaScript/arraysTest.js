// printReverse() - which takes items in an array and prints in reverse order
console.log("Print Reverse Order");

function printReverse(reverseArray) {
    //array.length-1 starts us at the end of the array, keep going while i >= 0
    for(var i = reverseArray.length - 1; i >= 0; i--){
        console.log(reverseArray[i]);
    }
}

printReverse([1,2,3,4,5]);  //5 new lines of 5,4,3,2,1


// isUniform() - func that takes an argument that returns true if all items are identical
console.log("Print True or False if equal");

function isUniform(identical) {
    var first = identical[0];
    for(var i = 1; i < identical.length; i++){
        if(identical[i] !== first){
            return false;
        }
    }
    return true;
}

isUniform([2,2,2]); //true
isUniform([1,2,3]); //false


// sumArray() - adds all numbers to get the sum
console.log("Print the sum");

function sumArray(sum) {
    var total = 0;
    sum.forEach(function(element){
        total += element;
    })
    return total;
}

sumArray([1,2,3,4,5,6,7]);  //28



// max() - func that returns the higher number in the array
console.log("Print the highest value");

function max(someArray){
    // New var starting at first number
    var max = someArray[0];
    for(var i = 1; i < someArray.length; i++) {
        // if the next item is greater than max, then max is new highest
        if(someArray[i] > max){
            max = someArray[i];
        }
    }
    return max;
}

max([1,2,3]);



