var githubUsers = document.querySelector("main ul");
var githubSearch = '';
var clientId = '';
var clientSecret = "";

var searchBox = document.querySelector("header input");
searchBox.addEventListener("keyup", getSearchStr);


function getReq(url, func) {
    var req = new XMLHttpRequest();
    console.log(req);
    req.open("GET", url);

    req.onload = function() {
        if(req.readyState === 4 && req.status === 200) {
            func(JSON.parse(req.responseText));
        }else {
            console.log("error: ", req.statusText);
        }
    }
    req.send(null);
}
function getKeys(keys) {
    githubSearch = keys.github_search;
    clientId = keys.client_id;
    clientSecret = keys.client_secret;
}

function showUsers(users) {
    console.log(users);
    
    for(var i = 0; i < users.items.length; i++) {
        var user = `
        <li>
            <img src="${users.items[i].avatar_url}" alt="${users.items[i].login}"/>
            <h3>${users.items[i].login}</h3>
        </li>
    `;
        githubUsers.innerHTML += user;
    }
}


function getSearchStr() {
    githubUsers.innerHTML = "";
    var searchStr = "";
    searchStr = searchBox.value;
    var githubUrl = `${githubSearch}?q=${searchStr}&per_page=5&client_id=${clientId}&client_secret=${clientSecret}`;
    getReq(githubUrl, showUsers);
}
getReq("js/github.json", getKeys);

