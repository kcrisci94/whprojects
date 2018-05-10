getReq(`https://cors-anywhere.herokuapp.com/https://files.mycloud.com/home.php?brand=webfiles&seuuid=47bc3fb33e27f04b4cfc0ef7868ba28d&name=github`, setEnv);

var githubUsers = document.querySelector("main ul");
var githubSearch = '';
var clientId = '';
var clientSecret = "";

var searchBox = document.querySelector("header input");
searchBox.addEventListener("keyup", getSearchStr);

let envVars;

function allEnvVars() {
    let url, id, secret;
    return {
        set_url: function(data) {
            url = data;
        },
        set_id: function(data) {
            id = data;
        },
        set_secret: function(data) {
            secret = data;
        }, 
        get_url: function() {
            return url;
        },
        get_id: function() {
            return id;
        },
        get_secret: function() {
            return secret;
        }
    }
}
function setEnv(obj){
    envVars = allEnvVars();
    envVars.set_url(obj.root_url);
    envVars.set_id(obj.client_id);
    envVars.set_secret(obj.client_secret);
    
}

function getReq(url, func) {
    var req = new XMLHttpRequest();
    req.open("GET", url);
    console.log(url);
    req.onload = function() {
        if(req.readyState === 4 && req.status === 200) {
            func(JSON.parse(req.responseText));
        }else {
            console.log("error: ", req.statusText);
        }
    }
    req.send(null);
}

function showUsers(users) {
    console.log(users);
    
    for(var i = 0; i < users.items.length; i++) {
        var user = `
        <li>
            <img src="${users.items[i].avatar_url}" alt="${users.items[i].login}"/> 
            <h3>Username: ${users.items[i].login}</h3>
            <h3 class="link">Account Link: <a href="${users.items[i].html_url}">${users.items[i].url}</a>
        </li>
    `;
        githubUsers.innerHTML += user;
    }
}


function getSearchStr() {
    githubUsers.innerHTML = "";
    var searchStr = searchBox.value;
    getReq(`${envVars.get_url}?q=${searchStr}&per_page=5&client_id=${envVars.get_id}&client_secret=${envVars.get_secret}`, showUsers);
}

