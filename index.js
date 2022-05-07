// This line of code will find the 1st button and it adds an event listener to that so 
// it listens to that click of button and runs the function handleClick
// passing a function as an input so it can be called at a later time.

/*document.querySelector("button").addEventListener("click", handleClick);
//THERE ARE MANY TYPES OF EVENT ()

function handleClick(){
    alert("I got clicked");
}*/

//What to do when click detected (for any button):
alert("Hello");
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    
    //this.style.color = "white";
});
}

document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){

    switch (key){
        case "w":
            var tom1 = new Audio("sounds/do.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/re.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/mi.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/fa.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/so.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/la.mp3");
            crash.play();
            break;
        case "l":
            var kick_bass = new Audio("sounds/si.mp3");
            kick_bass.play();
            break;         
    
        default: console.log(buttonInnerHTML);
}
}

function buttonAnimation(currentKey){
   var activeButton = document.querySelector("." + currentKey);
   activeButton.classList.add("pressed");

   setTimeout(function(){
       activeButton.classList.remove("pressed");

   }, 100);
}

//alert("I got clicked!");});


// Higher Order Fucntions:
/* function add(num1, num2) {
        return num1 + num2;
        }*/
        
        //function subtract(num1, num2) {
       // return num1 - num2;
       // }
         
        //function multiply(num1, num2) {
      //      return num1 * num2;
       // }
        
        //function divide(num1, num2) {
        //return num1 / num2;
        //}
         
        //function calculator(num1, num2, operator) {
           // return operator(num1, num2);

        
/*Callbacks and Responding to Events:

function addEventListener(typeOfEvent, callback){
    // Dettect Event Code...

    var eventThatHappened =  {
        eventType: "keypress",
        key: "p",
        durantionOfKeypress: 2
    }// this will create an EVENT objeCT

if (eventThatHappened.eventType typeofEvent) (
  callback(eventThatHappened) :
}*/