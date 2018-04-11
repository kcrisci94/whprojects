/*
var btns = document.querySelectorAll("button");

// USING A FOR LOOP
// ASSIGN EVENT LISTENER TO EACH BUTTON
// DETERMINE WHICH BUTTON WAS CLICKED ON
// USING THE CLICK EVENT TARGET PROPERTY
for(var i = 0; i < btns.length; i ++) {
    btns[i].addEventListener("click", function(event){
        console.log(event.target);
        // console.log(this);
    });
}


 // ADD EVENT LISTENER TO ENTIRE PAGE
 // DETERMINE ELEMENT THAT IS CLICKED BASED ON 
 // TARGET.NODENAME PROPERTIES IN THE CLICK EVENT
window.addEventListener("click", function(event) {
    if(event.target.nodeName == "BUTTON") {
        console.log(event.target);
    }

});


// THIS IS AN ARRAY
var cars = ["jeep", "honda", "jeep", "subaru"];
console.log(cars);


// OBJECTS 

var Kaleb = {
    firstName: 'Kaleb',
    lastName: 'Crisci',
    height: "5\'8\"",
    hair: true,
    hairColor: "blond",
    facialHair: true,
    facialHairColor: "brown",
    age: 24,
    greeting: function() {
        console.log("Hello, my name is " + this.firstName + " " + this.lastName);
    }
};

Kaleb.greeting();


// REUSABLE OBJECT

// Create a constructor object 
// It's good practice to capitalize first letter of object
// constructor
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.greeting = function(message) {
        console.log(message + " " + this.firstName);
    };
}

var myDaughter = new Person("Kylie", "Crisci", 2, "brown");
var myDad = new Person("Mike", "Crisci", 46, "brown");
var myMom = new Person("Karee", "Jordan", 47, "green");

console.log(myDaughter);
console.log(myDad);
console.log(myMom);

myDaughter.greeting("Hello");



function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}
*/

// var Kaleb = new User('kcrisci94', 'kcrisci94@gmail.com', 'Today123');
// console.log(Kaleb);

var submitBtn = document.querySelector('input[type="submit"]');
var form = document.querySelector("form");

submitBtn.addEventListener("click", function(evt) {
    evt.preventDefault();
    var user = 1;
    var info = [];
    var users = [];
    var variables = [];
    variables.push(['user' + user]);
    user++;

    for(var i = 0; i < form.elements.length - 1; i++) {
        
        info.push(form.elements[i].value);
    
    }
    console.log(info);
    
    variables[variables.length - 1][0] = [variables[variables.length]];
    variables[variables.length -1][0].push(new UserInfo(info));
//    console.log(info);
   console.log(variables);
   
    
});

var users = [];
var user = 0;

function UserInfo([username, email, password]) {
    this.username = username;
    this.email = email;
    this.password = password;
}

