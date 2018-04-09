// //CALLING FUNCTIONS WITH PARAMETERS

// // GLOBAL VARIABLES
// var h3 = document.querySelector("#welcomeUser");
// var user = document.querySelector("#user");


// // FUNCTIONS
// function welcomeMsg(str) {
//     // console.log(str);
//     return "Welcome " + str;
// }
// console.log(welcomeMsg("Kaleb"));

// function calcNums(x, y) {
//     // console.log(x + y);
//     return x + y;
// }
// console.log(calcNums(6, 8));

// function concatStr(str1, str2) {
//     return str1 + " " + str2;
// }
// console.log(concatStr("Hello", "my name is Kaleb"));

// function getFirstname() {
    
//     return prompt("What is your first name?");
// }

// function getLastname() {

//     return prompt("What is your last name");
// }

// function welcomeUser() {
//     // textContent prints plain text
//     // it will print tags as text, unlike innerHTML
//     user.textContent = concatStr(getFirstname(), getLastname());
// }
// welcomeUser();

spans = document.querySelectorAll("span");
var occupations = ['janitor', 'teacher', 'developer', 'plumber', 'cashier', 'delivery driver'];
var plurals = ['fish', 'monkeys', 'shoes', 'cactai'];
var adjectives = ['long', 'happy', 'beautiful', 'angry'];
var liquids = ['coffee', 'water', 'soda', 'juice'];
var famousPeople = ['Albert Einstein', 'Abraham Maslow'];
var places = ['Italy', 'Germany', 'Europe'];
var verbs = ['jumping', 'running', 'climbing', 'smiling'];
var nouns = ['statue', 'love', 'suspense'];
var nationalities = ['Mexican', 'Greek'];
var celebrities = ['Jessica Alba', 'Alyssa Milano'];
var friends = ['Jenny', 'Michaela', 'Brittany'];
var numbers = [1, 3, 5, 6, 10];



for(var i = 0; i < spans.length; i++) {
    spans[i].style.color = "blue";
    switch(spans[i].className) {
        case 'occupation':
        setText(spans[i], occupations);
        break;
        case "plural":
        setText(spans[i], plurals);
        break;
        case "adjective":
        setText(spans[i], adjectives);
        break;
        case 'liquid':
        setText(spans[i], liquids);
        break;
        case "famous":
        setText(spans[i], famousPeople);        
        break;
        case "place":
        setText(spans[i], places);        
        break;
        case "verb":
        setText(spans[i], verbs);        
        break;
        case 'noun':
        setText(spans[i], nouns);        
        break;
        case "nationality":
        setText(spans[i], nationalities);        
        break;
        case "celebrity":
        setText(spans[i], celebrities);        
        break;
        case "friend":
        setText(spans[i], friends);        
        break;
        case "number":
        setText(spans[i], numbers);
    }

}

function getRandNum(arrLength) {
    return Math.floor(Math.random() * arrLength);
}

function setText(currSpan, testArray) {
    currSpan.textContent = testArray[getRandNum(testArray.length)];
}
