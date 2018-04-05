// CLASS PRACTICE LESSON BY MYSELF

//VARIABLES
const button = document.getElementById("button");

//FUNCTIONS
const getName = () => {
    let userName = prompt("Please enter your full name");
    userName = userName.split(" ");
    displayName(userName);
}

const displayName = (name) => {
    let fullName = name;
    let styleName = document.getElementById("firstName");
    document.getElementById("firstName").innerHTML = "";
    for(let i = 0; i < fullName.length; i++) {
        if( i == 0 || i == fullName.length -1){
            document.getElementById("firstName").innerHTML += fullName[i] + " ";
        }
    }
    styleName.classList.add("changedText");
}


//EVENT LISTENERS
button.addEventListener("click", getName);

// END LESSON



// ARRAYS

var stuff = ["jeep", "subaru", "honda"];
var removedCar;
console.log(stuff[1]);
console.log(stuff.length);

// PUSH METHOD
// adds element(s) to the end of the array
stuff.push("bmw");
console.log(stuff);

// POP METHOD
// removes the last element of an array
stuff.pop();
console.log(stuff);

removedCar = stuff.pop();
console.log(stuff);
console.log(removedCar);

// UNSHIFT METHOD
// adds element(s) to beginning of array
stuff.unshift("chevy", "chrysler");
console.log(stuff);

// SHIFT METHOD
// removes elements from beginnin of array
stuff.shift();
console.log(stuff);

// SPLICE METHOD
// add and/or remove items at a certain index
//.splice(starting point, Number of items to remove, item(s) to add)
stuff.splice(1, 1, "red", "green");
console.log(stuff);

stuff.splice(1, 1, "apple", "grape", "carrot");
console.log(stuff);

stuff.splice(2, 1);
console.log(stuff);

// SLICE METHOD
// removes elements from an array and returns a new array
// of removed elements
// .slice(beginning index number, ending index number)
// DOES NOT AFFECT ORIGINAL ARRAY
var removed = stuff.slice(2, 4);
console.log(removed);



// Next Lesson

let movies = ["Fast and the Furious", "The Guardian", "The Shawshank Redemption", "Rocky", "Harry Potter"];
console.log(movies);

movies.unshift("Die Hard");
console.log(movies);

movies.splice(2, 2, "Godfather I", "Godfather II", "Godfather III");
console.log(movies);

movies.push("Guardians of the Galaxy");
console.log(movies);

var newArray = movies.slice(0, 3);
console.log(newArray);

movies.splice(0, 1);
console.log(movies);

console.log(movies[movies.length-2]);

movies.splice(0, movies.length, "Jurassic Park");
console.log(movies);





// IF ELSEIF ELSE STATEMENTS

function getUserAge() {
    var userAge = parseInt(prompt("How old are you?"));

    if(userAge < 21) {
        console.log("not old enough");
    }else if (userAge == 21) {
        console.log("good to go");
    }else {
        console.log("plenty old");
    }
}


/** 
 * *TERNARY OPERATOR
 * (Shorthand if statement)
 * SYNTAX: (condition) ? ifTrue : ifFalse ;
 */

 function getAge() {
     var age = parseInt(prompt("What's my age?"));
    (age >= 21) ? console.log(true) : console.log(false);

 }

