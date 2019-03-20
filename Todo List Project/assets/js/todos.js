//check off specific todos by clicking (with an Object)
//This says for the entire ul that already exists when the page loads
//if an li inside is clicked, run this code
//Reason is it only runs on li's when page is loaded, but we're adding
//li's each time we add an item to the list
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//click on X to delete todo
//stopPropagation stops the events from bubbling up to higher layers, so if a click on span happens, any clicks on higher parent layers of html won't fire
//the parent().remove() takes away the entire li than contains the span instead of just the span that the click is on
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //grabbing new todo text fron input
        var todoText = $(this).val();
        //clearing input
        $(this).val("");
        //create new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash-alt'></i> </span>" + todoText + "</li>");
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});


















