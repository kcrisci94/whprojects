var paras = document.querySelectorAll('p');

/*
for(var i = 0; i < paras.length; i++) {
    if(1){
        console.log("thats not true");
    }
}

*/
// == LOOSE COPARISON
// === STRICT COMPARISON

// console.log(3 == '3');

// console.log(typeof('3'));

// var userNum = parseInt(prompt("pick a number"));
// if(!isNaN(userNum) && userNum !== "") {
//     console.log(3 + userNum);
// }else {
//     console.log("Please enter a number");
// }

// API key for OpenWeatherMap
var weatherKey = "fdac7da180966d85bed2c08b0296c165";
var myUl = document.querySelector("ul");
// XML HTTP REQUEST
// console.log(new XMLHttpRequest());
// CREATE NEW INSTANCE OF THE REQUREST
var req = new XMLHttpRequest();
// OPEN A CHANNEL TO THE SITE AND GET INFORMATION
req.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=fdac7da180966d85bed2c08b0296c165');

// GET ALL INFORMATION AFTER SEND IS COMPLETE
// 1: CONNECTION ESTABLISHED
// 2: RECIEVED REQUEST
// 3: PROCESSING REQUEST
// 4: REQUEST SENT
req.onload = function() {
    if(req.readyState === 4) {
        // JSON.parse turns data into an object
        var apiData = JSON.parse(req.responseText);    }
        // console.log(apiData.emojis_url);
        processData(apiData);
    }
//TELL WEBSITE TO SEND INFORMATION BACK
req.send(null);

function processData(data) {
 for(var i = 0; i < data.list.length; i++) {
    var timeOfDay = data.list[i].dt_txt; 
    var dateArray = timeOfDay.slice(0, 10).split("-");
    dateArray.push(dateArray.shift());
    dateArray = dateArray.join("/"); 
    var time = timeOfDay.slice(10).split(":"); 
    if(time[0] > 12) {
        time[0] = time[0] - 12;
        time = time.join(":");
        time += "pm";
    }else {
        time = time.join(":");
        if(time[0] === 12) {
            time += "pm"
        }

        time += "am";
    }
    console.log(time);  
    var myLi = `
        <li>
           <p>${dateArray} at ${time}</p>
        </li>
    `;
    
    myUl.innerHTML += myLi; 
    
 } 
 console.log(data.list);
}