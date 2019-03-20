//Print all numbers between -10 and 19
console.log("Print all numbers between -10 and 19");
var numberOne = -10;
while(numberOne < 20) {
    console.log(numberOne);
    numberOne++;
}

//Print all even numbers between 10 and 40
console.log("Print all even numbers between 10 and 40");
var numberTwo = 10;
while(numberTwo <= 40) {
    console.log(numberTwo);
    numberTwo+=2;
}
//Another way to do above that checks if numbers are even,
//however is slower as it runs through loop
//for every number 10 through 40 as opposed to every 2 numbers
// while(numberTwo <= 40) {
//     if(numberTwo % 2 === 0) {
//     console.log(numberTwo);
//     }
//     numberTwo+=1;
// }

//Print all odd numbers between 300 and 333
// console.log("Print all odd numbers between 300 and 333");
// var numberThree = 301;
// while(numberThree < 334) {
//     console.log(numberThree);
//     numberThree+=2;
// }

//Another way to do above
console.log("Print all odd numbers between 300 and 333");
var numberThree = 300;
while(numberThree <= 333) {
    if(numberThree % 2 !== 0) {
    console.log(numberThree);
    }
    numberThree+=1;
}

//Print all numbers divisible by 5 AND 3 between 5 and 50
console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");
var divisible = 3;
while(divisible <= 50) {
    if(divisible % 3 === 0 && divisible % 5 === 0) {
        console.log(divisible);
    }
    divisible++;
}

//Print all numbers divisible by 5 OR 3 between 5 and 50
console.log("Print all numbers divisible by 5 OR 3 between 5 and 50");
var numberFour = 5;
var numberFive = 6;

while(numberFour <= 50){
    if(numberFour % 5 === 0) {
    console.log(numberFour);
    }
    numberFour++;
}
while(numberFive <= 50){
    if(numberFive % 3 === 0) {
    console.log(numberFive);
    }
    numberFive++;
}