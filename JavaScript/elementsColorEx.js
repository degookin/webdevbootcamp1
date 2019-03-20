var button = document.querySelector("button");
var isPurple = false;

// button.addEventListener("click", function(){
//     if(isPurple){
//         document.body.style.background = "white";
//         isPurple = false;
//     } else {
//         document.body.style.background = "purple";
//         isPurple = true;
//     }
// });

//Minor refactor below to remove the isPurple from the ifelse
// button.addEventListener("click", function(){
//     if(isPurple){
//         document.body.style.background = "white";
//     } else {
//         document.body.style.background = "purple";
//     }
//     isPurple = !isPurple;
// });


//Using Toggle which shortens everything.
//It looks for class of purple and toggles it on and off in the document
button.addEventListener("click", function(){
    document.body.classList.toggle("purple");
});