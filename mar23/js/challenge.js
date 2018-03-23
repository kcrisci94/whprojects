var nav = document.getElementById("nav");
var main = document.getElementById("main");
var user = document.getElementById("user");

var menu = document.getElementById("menu"); //button
var username = document.getElementById("username"); //button
var userStyle = document.getElementById("userStyle"); //button
var a1 = document.getElementById("a1");
var a2 = document.getElementById("a2");

menu.addEventListener("click", vertMenu);
username.addEventListener("click", getUsername);
userStyle.addEventListener("click", styleUsername);

// using anonymous function
a1.addEventListener("click", function(e) {
    e.preventDefault();
    console.log(e);
}); 

a2.addEventListener("click", colorText2);

function changeBody() {
    document.body.style.backgroundColor = "teal";
};

function vertMenu() {
    nav.classList.toggle("vertical");
    main.classList.toggle("vertical");
};

function getUsername() {
    let username = prompt("Enter your name");
    user.innerHTML = username;
};

function styleUsername() {
    user.classList.add("mega");
};

function colorText1() {
    e.preventDefault();
    console.log(e);
    a1.style.color = "red";
};

function colorText2() {
    a2.style.color = "red";
};

changeBody();
