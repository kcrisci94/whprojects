const nav = document.getElementById("nav");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const h1 = document.getElementById("h1");
const paragraph = document.getElementById("paragraph");
const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const name = document.getElementById("name");
const flex = document.getElementById("flex");
const main = document.getElementById("content");


//Functions
const backgroundColor = () => {
    document.body.classList.add("backRed");
};

const navToggle = () => {
    nav.classList.toggle("vertical");
    main.classList.toggle("vertical2");
    

};

const getFirstName = () => {
    let firstName = prompt("Please enter your first name.");
    name.innerHTML = firstName;
};

const nameStyle = () => {
    name.classList.add("nameStyle");
};

const linkColor1 = () => {
    link1.classList.add("linkColor1");
};

const linkColor2 = () => {
    link2.classList.add("linkColor2");
};

button1.addEventListener("click", navToggle);
button2.addEventListener("click", getFirstName);
button3.addEventListener("click", nameStyle);
link1.addEventListener("click", linkColor1);
link2.addEventListener("click", linkColor2);

backgroundColor();


