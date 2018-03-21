let navBtn = document.getElementById("navBtn");
let nav = document.getElementById("nav");

navBtn.addEventListener("click", showNav);

function showNav() {
    nav.classList.toggle("viewNav");
    navBtn.classList.toggle("active");
}

// TARGET ELEMENT BY DECLARED VARIABLE
// navBtn.style.color = "red";
// navBtn.style.fontSize = "32px";

