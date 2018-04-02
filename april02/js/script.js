// var p1 = document.getElementById("p1");
// console.log(p1);

// //Query selector can target based on css selector
// //Query selectors only target one occurence
// var p2q = document.querySelector("#p2");
// console.log(p2q);

// var pClass = document.querySelector(".p");
// console.log(pClass);

// var pLast = document.querySelector("p:last-of-type");
// console.log(pLast);
// pLast.style.fontSize = "28px";

// //.querySelectorAll is like .querySelector
// //except it gets all the occurences and stores them
// //into an array-like object
// var pClasses = document.querySelectorAll(".p");
// console.log(pClasses);
// pClasses[2].style.fontSize = "8px";
// pClasses[1].style.color = "blue";

// //Selects by Class Name
// var pByClassname = document.getElementsByClassName("p");
// console.log(pByClassname);
// pByClassname[0].style.fontSize = "32px";

//Selects by Tag Name
var pByTagName = document.getElementsByTagName("p");
console.log(pByTagName);
//Target last element with given tag name
// pByTagName[pByTagName.length - 1].style.color = "blue";

// //FOR LOOP
// for(var i = 0; i < 10; i++) {
//     pByTagName[i].style.color = "red";
//     console.log(i);
// }

// var myName = "Kaleb Crisci";

// for(var i = 0; i < myName.length; i++) {
//     console.log(myName[i]);
// }

// let getName = () => {
//     var myName = prompt("Please enter your name");
//     myName = myName.split(" ").join("");
//     printConsole(myName);
// }
// let printConsole = (name) => {
//     for(var i = 0; i < name.length; i++) {
//         console.log(name[i]);
//     }
// }

// getName();

//ADD 2 NUMBERS TOGETHER
// function getUserNums() {
//     var num1 = parseInt(prompt("Please enter a number"));
//     var num2 = parseInt(prompt("Please enter another number"));
//     addUserNums(num1, num2);
// }
// function addUserNums(a, b) {
//     var sum = a + b;
//     alert(sum);
// }
// getUserNums();

//GET 3 DIFFERENT COLORS
function getColors() {
    var colors = prompt("Enter 3 colors separated by a comma and a space").split(",");
    trimmedColors = [];
    for(var i = 0; i < colors.length; i++) {
        trimmedColors.push(colors[i].trim());
    }
    assignColors(trimmedColors);
}
//ASSIGN COLORS TO PARAGRAPHS
function assignColors(colors) {
    var paragraphs = document.getElementsByTagName("p");
    for(var i = 0; i < colors.length; i++) {
        paragraphs[i].style.color = colors[i];
    }
}
getColors();

