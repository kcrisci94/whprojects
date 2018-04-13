 // WRITE A FUNCTION TELLING THE USER A "STORY" AND PROMPT THE USER
 // ASKING FOR 1 OF 3 CHOICES
 // EACH CHOICE CONTINUES TO THEIR OWN FUNCTION
 // REPEAT 3 TIMES
 // USE ALERTS, PROMPTS AND CONFIRMS
 // USE IF ELSEIF AND ELSE
 // COMPLEX VERSION:
 // USE LOOPS AND ARRAYS
var travelChoices = ["ground", "tree"];
var snakeChoices = ["sneakAround", "wait", "climbTree"];
var birdChoices = ["climbDown", "stayStill", "climbFaster"];

var travelEntry = document.getElementById("travel"); // Text box for method of travel
var btnName = document.getElementById("btnName"); // SUBMIT BUTTON FOR NAME
var btnPt2 = document.getElementById("btnPt2"); // SUBMIT BUTTON TO GO INTO PART 2
var displayGroundDiv = document.getElementById("displayGround"); // Div with part 1 text on the ground
var displayGroundDiv2 = document.getElementById("displayGround2"); // Div with part 2 text on the ground
var divStory = document.getElementById("story"); // Div element to put variable into HTML
// Keep track of how many times squirrel has been to ground or in the trees
// for scenario purposes
var groundCount = 0;
var treeCount = 0;
var travelMethod = getTravelChoices();
var story = "";
btnName.addEventListener("click", storyPt1);
btnPt2.addEventListener("click", storyPt2);

function storyPt1() {
    switch (travelMethod) {
        case 0:
            displayGround();
            break;
        case 1: 
            displayTree();
    }
};

function storyPt2() {
    if(travelMethod == 1) {
        var birdChoices = getBirdChoices();
        displayBird(birdChoices);
    }else {
        var snakeChoices = getSnakeChoices();
        displaySnake(snakeChoices);
    }
};
        
function storyPt3() {
    if(travelMethod == 0) {
        var birdChoices = getBirdChoices();
        displayBird(birdChoices);
    }else {
        var snakeChoices = getSnakeChoices();
        displaySnake(snakeChoices);
    }
};

function displayGround() {
    if(groundCount != 1) {
        displayGroundDiv.classList.add("display");
        groundCount++;
    }else {
        displayGroundDiv2.classList.add("display");
    }
};

// function displaySnake(index) {
//     switch(index) {
//         case 0:
//         // squirrel dies
//         document.write("<p> So <span class='squirrelName'></span> decided to try to sneak around the snake. " +
//         "Scaling the bushes, <span class='gender'></span> slowly crawled around the snake. " +
//         "However, while watching the snakes movements, <span class='gender'></span> forgot to watch where <span class='gender'></span> " +
//         "was going and stepped on a twig, which broke with a noisy 'Crack!'. </p>");
//         break;

//         case 1: 
//         // squirrel survives
//         document.write("<p> So <span class='squirrelName'></span> decided to jump into the nearest hole " +
//         "that <span class='gender'></span> could find. <span class='gender'></span> waited for about 20 minutes " +
//         "and poked <span class='gender'></span> head out to see if the snake was gone. Hurray! the snake is gone! " +
//         "So <span class='squirrelName'></span> continues home with no more obstacles.</p>");
//         break;

//         case 2:
//         // links to tree section
//         document.write("<p> So <span class='squirrelName'></span> decided to climb a tree to try to escape from the snake." +
//         "It worked! The snake did not follow. However, now there is a new problem... A bird has spotted you! " +
//         "What should <span class='name'></span> do? </p> <select name='bird' id='bird1'> <option value='climbDown'>Hide On the Ground</option> " +
//         "<option value='stayStill'>Stay Still</option> <option value='climbFaster'>Climb Faster to Escape</option></select> " +
//         "<button type='button' id='btnBird1'>Submit</button>");
//         document.getElementById("btnBird1").addEventListener("click", storyPt3());
//     }
// }

// function displayBird(index) {
//     switch(index) {
//         case 0: 
//         if(treeCount != 0) {
//             document.write("<p> So <span class='squirrelName'></span> retreats for the ground and runs for about a mile. " + 
//     "Suddenly, <span class='gender'></span> runs into a snake! Oh No! What should <span id='gender'></span> do!?</p> " +
//     "<select name='snake' id='snake'> <option value='sneakAround'>Sneak Around It</option> <option value='wait'>Hide and Wait</option>" +
//     "<option value='climbTree'>Climb up a Tree</option> </select> <button type='button' id='btnSnake'>Submit</button>");
//         }else {

//         }
//         treeCount++;

//         case 1: 
//         document.write("<p>So <span class='squirrelName'></span> decided to stay still and hope that the bird didn't see <span class='gender'></span>. " +
//     "And it worked! The bird flew away. So, <span class='squirrelName'></span> continued to climb along the branches to his home. " +
//     "</p>");
//     break;
//         case 2:
//         document.write("</div><div id='escapeBird1'><p>So <span class='squirrelName'></span> decided to run as fast as <span class='gender'></span> " + 
//         "along the trees to try to escape the bird. Oh no! The bird has spotted <span class='gender'></span> and is gaining fast!</p> " +
//         "</div>");
//     };

//     }
    
    

// function displayTree() {
//     if(treeCount != 1) {
//         document.write("<p>So <span class='squirrelName'></span> decided to travel by tree. <span class='gender'>" + 
//         "</span> hops from branch to branch and almost makes it home when <span class='gender'></span> runs into a bird! " +
//         "Oh No! What should I do!?</p> <select name='bird' id='bird2'> <option value='climbDown'>Hide On the Ground</option>" +
//         "<option value='stayStill'>Stay Still</option> <option value='climbFaster'>Climb Faster to Escape</option> " +
//     "</select> <button type='button' id='btnBird2'>Submit</button>");
//         treeCount++;
//         }else {
//             document.write("<p>So <span class='squirrelName'></span> decided to escape to the trees! <span class='gender'>" + 
//             "</span> hops from branch to branch and almost makes it home when <span class='gender'></span> runs into a bird! " +
//             "Oh No! What should I do!?</p> <select name='bird' id='bird2'> <option value='climbDown'>Hide On the Ground</option>" +
//             "<option value='stayStill'>Stay Still</option> <option value='climbFaster'>Climb Faster to Escape</option> " +
//             "</select> <button type='button' id='btnBird2'>Submit</button>");
//         }
// }




// Return index number of user's travel method decision
function getTravelChoices() {
    for(var i = 0; i < travelChoices.length; i++) {
        if(travelEntry.value == travelChoices[i]) {
            return i;
        }
    }
    
};

// RETURN INDEX NUMBER OF USER'S SNAKE CHOICE
function getSnakeChoices() {
    for(var i = 0; i < snakeChoices.length; i++) {
        if(document.getElementById("snake").value == snakeChoices[i]) {
            return i; 
        }
    }
};

// RETURN INDEX NUMBER OF USER'S BIRD CHOICE
function getBirdChoices() {
    for(var i = 0; i < birdChoices.length; i++) {
        if(document.getElementById("bird").value == birdChoices[i]) {
            return i; 
        }
    }
};