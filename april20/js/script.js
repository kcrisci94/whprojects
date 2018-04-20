var charUl = document.querySelector("ul");
var homeUrl = 'https://rickandmortyapi.com/api/character/';

function getReq(url, func) {
    var req = new XMLHttpRequest();
    // OPEN CHANNEL .open(method, url) 
    req.open('GET', url);
    // WAIT TO RECIEVE INFORMATION BACK
    req.onload = function() {

        // MAKE SURE REQ.STATUS IS 200.
        // MEANS THAT IT FOUND A PAGE IN THE SERVER
        // READY STATE IS 4 MEANS IT FOUND THE SERVER
        if(req.readyState === 4 && req.status === 200) {
            func(JSON.parse(req.responseText));
        }else {
            console.log("error", req.statusText);
        }
    }
    req.send(null);
}

// getChar FUNCTION USING JQUERY
// $.ajax({
// url: 'https://rickandmortyapi.com/api/character/',
// }).done(getChars);

function getChar(char) {
    console.log(char);
    var char = `
            <li data-url="${char.url}">
                <img src="${char.image}" alt="${char.name}" />
                <div>
                   <h3>${char.name}</h3>
                   <ul>
                        <li><b>Species: </b>${char.species}</li>
                        <li><b>Gender: </b>${char.gender}</li>`;
                        if(!char.type == "") {
                                char += `<li><b>Type: </b>${char.type}</li>`
                            }
                        char += `
                        <li><b>Status: </b>${char.status}</li>

                   </ul>
                </div>
            </li>
        `;
        charUl.innerHTML = char;
}
//JSON.parse turns into a readable format
function getChars(chars) {
    var charArr = chars;
    for(var i = 0; i < charArr.results.length; i++) {
        // console.log(charArr.results[i]);
        var char = `
            <li data-url="${charArr.results[i].url}">
                <img src="${charArr.results[i].image}" alt="${charArr.results[i].name}" />
                <div>
                   <h3>${charArr.results[i].name}</h3>
                   <ul>
                        <li><b>Species: </b>${charArr.results[i].species}</li>
                        <li><b>Gender: </b>${charArr.results[i].gender}</li>`;
                        if(!charArr.results[i].type == "") {
                                char += `<li><b>Type: </b>${charArr.results[i].type}</li>`
                            }
                        char += `
                        <li><b>Status: </b>${charArr.results[i].status}</li>

                   </ul>
                </div>
            </li>
        `;
        charUl.innerHTML += char;
    }
}
getReq(homeUrl, getChars);
var charURL;
var count = 0;
$('body > ul').on('click', 'li', function(evt){
    if(count % 2 == 0){
        if(this.dataset.url) {
            charURL = this.dataset.url;
            charUl.innerHTML = "";
            getReq(charURL, getChar);
        }
    }else {
        charUl.innerHTML = "";
        getReq(homeUrl, getChars);
    }
    count++;

});

