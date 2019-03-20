//This shows that a while loop can run an undetermined amount
//of times, unlike with numbers that run a set amount

//Below is v1 where you have to put exactly "yes" or "yeah"
// var answer = prompt("Are we there yet?");

// while(answer !== "yes" && answer !== "yeah") {
//     var answer = prompt("Are we there yet?");
// }

// alert("Yay, we made it!");



//Below is v2 where you can accept any string that contains "yes"
//.indexOf is a method checking if "yes" is -1, which means it doesn't contain that

var answer = prompt("Are we there yet?");

while(answer.indexOf("yes") === -1) {
    var answer = prompt("Are we there yet?");
}

alert("Yay, we made it!");