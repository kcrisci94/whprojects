// var searchBox = document.querySelector("header input");
var userSearch = " ";
var cardList = document.querySelector("main ul");
// searchBox.addEventListener("keypress", getUserSearch);


// function getUserSearch(evt) {
//     if(
//         evt.key !== 'undefined' &&
//         evt.key !== 'Backspace' &&
//         evt.key !== 'Tab'
//     ) {
//     userSearch += evt.key;
//     }
//     console.log(userSearch);
//     getChar(userSearch);

// }
function getChar(searchStr) {
    var charArr = [];    
    var req = new XMLHttpRequest();
    searchStr = searchStr.slice(1);
    req.open('GET', 'https://rickandmortyapi.com/api/character');
    req.onload = function() {
        if(req.readyState === 4 && req.status === 200) {
            var obj = JSON.parse(req.responseText).results;
            // console.log(obj[0].name);
            console.log(typeof(searchStr), searchStr);
            console.log(obj[0].name.toLowerCase().includes(searchStr.toLowerCase()));
            for(var i = 0; i < obj.length; i++) {
                console.log(obj[i].name.toLowerCase().includes(searchStr.toLowerCase()), obj[i].name);
            }
        }
    }
    req.send(null);     
}

// function getReq(url, func) {
//     var req = new XMLHttpRequest();
//     req.open('GET', url);
//     req.onload = function() {
//         console.log(JSON.parse(req.responseText));
//         if(req.readyState === 4 && req.status === 200) {
//             func(JSON.parse(req.responseText));
//         }else {
//             console.log('error' , req.statusText);
//         }
// }
// req.send(null);

// }

function cardListData(cards) {
    console.log(cards.results);
    for(var i = 0; i < cards.results.length; i++) {
        var card = `
            <li>
                <img src="${cards.results[i].image}" alt="${cards.results[i].name}">
                <h3>${cards.results[i].name}</h3>
            </li>
        `
        cardList.innerHTML += card;
    }
}

