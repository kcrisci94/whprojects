// Function Declaration
function $(id) {
   return document.getElementById(id);
}

// Function Expression
const welcome = function() {
    let username = prompt("Please enter your name!");
    $("welcome").innerHTML = username;
}

// Arrow Function
const fireworks = () => {
    $("h1").style.backgroundImage = "url('http://bestanimations.com/Holidays/Fireworks/fireworks/ba-colorful-fireworks-animated-gif-pic.gif')";
   $("h1").style.color = "white";
    toggleColor();
    changeParagraph();
}

const toggleColor = () => {
    document.body.classList.add("colorize");
}

const changeParagraph = () => {
    $("paragraph").classList.add("color", "bigger", "center");
    $("h1").classList.add("center");
}

welcome();
