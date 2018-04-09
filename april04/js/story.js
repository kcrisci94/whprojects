 // WRITE A FUNCTION TELLING THE USER A "STORY" AND PROMPT THE USER
 // ASKING FOR 1 OF 3 CHOICES
 // EACH CHOICE CONTINUES TO THEIR OWN FUNCTION
 // REPEAT 3 TIMES
 // USE ALERTS, PROMPTS AND CONFIRMS
 // USE IF ELSEIF AND ELSE
 // COMPLEX VERSION:
 // USE LOOPS AND ARRAYS


 //VARIABLES
 travelGround = document.getElementById("travelGround"); // div element to travel by ground
 snakeHide = document.getElementById("snakeHide"); // div element to hide from snake in a hole
 snakeSneak = document.getElementById("snakeSneak");  // div element to try to sneak around snake
 snakeClimb = document.getElementById("snakeClimb");  // div element to climb tree to hide from snake
 travelTree = document.getElementById("travelTree"); // div element to travel by tree
 groundBird1 = document.getElementById("groundBird1"); // div element for running back to the ground to hide
 birdStill1 = document.getElementById("birdStill1"); // div element for staying still to hide from bird
 escapeBird1 = document.getElementById("escapeBird1"); //div element for running from bird
 name = document.getElementById("name"); //Text box for name
 spanNameElements = document.getElementsByClassName("squirrelName"); //All empty span elements to display the squirrel's name
 gender = document.getElementById("gender"); //Select menu for gender
 spanGenderElements = document.getElementsByClassName("gender"); // All empty span elements to display squirrel's gender
 nameBtn = document.getElementById("btnName"); // submit button for name
 introNext = document.getElementById("introNext"); // div element for gender
btnGender = document.getElementById("btnGender"); // submit button for gender
introLast = document.getElementById("introLast"); // div element for mode of travel
travel = document.getElementById("travel"); // select input for travel method
snake = document.getElementById("snake"); //select input for what to do when snake
// btnSnake = document.getElementById("btnSnake"); //submit button for snake choice
bird1 = document.getElementById("bird1"); // select choice for bird
btnBird = document.getElementById("btnBird"); // submit button for bird choice
bird2 = document.getElementById("bird2"); //select choice for 2nd bird instance
groundBird2 = document.getElementById("groundBird2"); // div displaying escape to ground

var choices =  [
    ['sneakAround', 'wait', 'climbTree'], 
    ['Hide on the Ground', 'stay still', 'climb faster to escape']
];

// EVENT LISTENERS
nameBtn.addEventListener("click", getName);
btnGender.addEventListener("click", getGender);
btnTravel.addEventListener("click", travelMethod);
// btnSnake.addEventListener("click", groundChoices);

// btnBird1.addEventListener("click", birdChoice1);
// btnBird2.addEventListener("click", birdChoice2);

 function getName() {
    var squirrelName = name.value;
    for(var i = 0; i < spanNameElements.length; i++) {
        spanNameElements[i].innerHTML = squirrelName;
    }
    introNext.style.display = "block";
 }

 function getGender() {
    var sqGen;
    if(gender.value == "female") {
        sqGen = "she";
    }else {
        sqGen = "he";
    }
    for(var i = 0; i < spanGenderElements.length; i++) {
        spanGenderElements[i].innerHTML = sqGen;
    }
    introLast.style.display = "block";

 }

 function travelMethod() {
     console.log(1);
     var choice = travel.value;
     if(choice == "ground") {
        console.log(2);
        document.write("<p> So <span class='squirrelName'></span> crawls for about a mile. Suddenly, <span class='gender'></span> runs into a snake! Oh No! What should <span id='gender'></span> do!? </p> <select name='snake' id='snake'> <option value='sneakAround'>Sneak Around It</option> <option value='wait'>Hide and Wait</option> <option value='climbTree'>Climb up a Tree</option> </select> <button type='button' id='btnSnake'>Submit</button>");
        btnSnake = document.getElementById("btnSnake"); //submit button for snake choice
        console.log(3);
        btnSnake.addEventListener("click", groundChoices);
        console.log(4);
     }else {
         document.write("<p> So <span class='squirrelName'></span> decided to travel by tree. <span class='gender'></span> hops from branch to branch and almost makes it home when <span class='gender'></span> runs into a bird! Oh No! What should I do!?</p> <select name='bird' id='bird2'> <option value='climbDown'>Hide On the Ground</option> <option value='stayStill'>Stay Still</option> <option value='climbFaster'>Climb Faster to Escape</option> </select> <button type='button' id='btnBird2'>Submit</button>");
     }
 }

 function groundChoices() {
     console.log(5);
     var choice = snake.value;
     if(choice == choices[0][0]) {
        document.write("<p> So <span class='squirrelName'></span> decided to try to sneak around the snake. Scaling the bushes, <span class='gender'></span> slowly crawled around the snake. However, while watching the snakes movements, <span class='gender'></span> forgot to watch where <span class='gender'></span> was going and stepped on a twig, which broke with a noisy 'Crack!'. </p>")
     }else if(choice == choices[0][1]) {
        document.write("<p> So <span class='squirrelName'></span> decided to jump into the nearest hole that <span class='gender'></span> could find. <span class='gender'></span> waited for about 20 minutes and poked <span class='gender'></span> head out to see if the snake was gone. Hurray! the snake is gone! So <span class='squirrelName'></span> continues home with no more obstacles.</p>");
     }else if(choice == choices[0][2]) {
         document.write("<p> So <span class='squirrelName'></span> decided to climb a tree to try to escape from the snake. It worked! The snake did not follow. However, now there is a new problem... A bird has spotted you! What should <span class='name'></span> do? </p> <select name='bird' id='bird1'> <option value='climbDown'>Hide On the Ground</option> <option value='stayStill'>Stay Still</option> <option value='climbFaster'>Climb Faster to Escape</option></select> <button type='button' id='btnBird1'>Submit</button>");

     }
 }

 





 
 
