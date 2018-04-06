// /**
//  * MATH OBJECT
//  */

//  // INTEGERS - whole numbers
//  //   FLOATS - decimals

//  var unrounded =.1 * .2;
//  console.log(unrounded);

//  //Math.round ROUNDS UP OR DOWN DEPEINDING ON NUMBER
//  var rounded = Math.round(unrounded);
//  console.log(rounded);

//  //Math.ceil ROUNDS UP
//  var roundedUp = Math.ceil(unrounded);
//  console.log(roundedUp);

//  //Math.floor ROUNDS DOWN
//  var roundedDown = Math.floor(unrounded);
//  console.log(roundedDown);

// //Math.PI DISPLAYS VALUE OF PI
// var pi = Math.PI;
// console.log(pi);

// //Math.pow() POWER FUNCTION 
// //SYNTAX: Math.pow(baseNumber, power)
// console.log(Math.pow(8,2));

// //Math.sqrt()
// console.log(Math.sqrt(64));

// // Math.random() CRAETEs RANDOM NUMBER
// console.log(Math.random());

// /**
//  * RANDOM NUMBER GENERATOr
//  * GUESSING GAME
//  */


var userPick = document.getElementById("userPick");
var submitBtn = document.querySelector("#submit");
var resetBtn = document.querySelector("#reset");
var p = document.querySelector("p");

submitBtn.addEventListener("click", getUserPick);
resetBtn.addEventListener("click", resetRnd);

    var count = 0;
    var rand = Math.floor(Math.random() * 101);
    console.log("Random Number: " + rand);

function getUserPick() {
    var userNum = parseInt(userPick.value);
    count++;
    console.log("My Guesses: " + userNum);
    checkUserPick(userNum);
    userPick.value = "";
    userPick.placeholder = "";
    
}

function checkUserPick(x) {
    if(x < rand) {
        printUserRes(x + " is too low. Pick again");
    }else if(x > rand) {
        printUserRes(x + " is too large. Pick again");
    }else {
        if(count == 1) {
            printUserRes("You guessed my number on your first try!");
        }else {
            printUserRes("You guessed my number in " + count + " tries!");
        }
        
    }
}

function printUserRes(userRes) {
    p.innerHTML = userRes;
}

function resetRnd() {
    rand = Math.floor(Math.random() * 101);
    count = 0;
    console.log("Random Number: " + rand);
    changeBackground();
}

//CHANGE BACKGROUND COLOR USING RANDOM COLORS
var randColor;
function changeBackground(x) {
    randColor = Math.floor(Math.random() * 360);
    console.log(randColor);
    document.body.style.backgroundColor = "hsl(" + randColor + ", 50%, 50%)";
}


//CHANGE BACKGROUND COLORS ON MOUSE MOVE
console.log(window);
window.addEventListener('mousemove', function(e) {
        var width = Math.round((e.x / window.innerWidth) * 100); 
        var height = Math.round((e.y / window.innerHeight) * 100);
        document.body.style.backgroundColor = "hsl(" + randColor + ", " + width + "%, " + height + "% )";

});