//WHILE LOOPS

var count = 1;

while(count < 4) {
    console.log("count is: " + count);
count++;  //this adds 1 to count var each time
}
//count+=2;  would add 2 each time

//count is: 1
//count is: 2
//count is: 3



//string we’re looping over:
var str = "hello";
//first character is at index 0
var count = 0;

while(count < str.length) {
    console.log(str.count);
    count++;
}

//“h”
//“e”
//“l”
//“l”
//“o”


var num = 1;

while(num <= 10) {
    console.log(num);
    num += 2;
    }

//This prints 1,3,5,7,9

var num = 1;

while(num <= 20) {
    if(num % 4 === 0){
        console.log(num);
    }
    num++;
}

//This prints the multiples of 4 up to 20





//FOR LOOPS

//Printing numbers 1-5 with for loop
for(var count = 1; count < 6; count ++) {
    console.log(count);
}


//Printing letters in hello
var str = "hello"

for(var i  = 0; i < str.length; i++) {
    console.log(str[i]);
}