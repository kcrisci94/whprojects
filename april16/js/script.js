

// var theDate = new Date();
// console.log(theDate);
// console.log("The day of the month: " + theDate.getDate());
// console.log("Day of the week: " + theDate.getDay());
// console.log("The 4 digit year: " + theDate.getFullYear());
// console.log("The Month: " + theDate.getMonth());

// var dateStr = `
//     Today's date is the ${theDate.getDate()}th of ${theDate.toLocaleString('en-us', {month: 'long'})} ${theDate.getFullYear()}
// `
// // document.body.textContent = dateStr;

// var myBday = new Date(1994, 0, 31);
// console.log(myBday);

// var bdayString = `
// My birthday is  ${myBday.toLocaleString('en-us', {month: '2-digit'})}/${myBday.getDate()}/${myBday.getFullYear()} 
// `
// document.body.textContent = bdayString;

// var theTime = new Date();
// var timeStr = `
// ${theTime.toLocaleString('en-us', {hour: 'numeric', hour12: false, minute: '2-digit', second: '2-digit'})};
// `
var stopBtn = document.querySelector('button');
stopBtn.addEventListener('click', function() {
    clearInterval(myTimer);
});
var myTimer = setInterval(updateTimer, 100);

function updateTimer() {
    var theTime = new Date();
    var timeStr = `
    ${theTime.toLocaleString('en-us', {hour: 'numeric', hour12: false, minute: '2-digit', second: '2-digit'})};
    `
    document.querySelector('h3').textContent = timeStr;
}
//setTimeout Function
var myDelay = setTimeout(hiliteBg, 5000);
function hiliteBg() {
    document.body.classList.add("hilite");
}

function runTimer() {
    var theTime = new Date();
    var timeStr = `
    ${theTime.toLocaleString('en-us', {hour: 'numeric', hour12: false, minute: '2-digit', second: '2-digit'})};
    `
    document.querySelector('h3').textContent = timeStr;
}