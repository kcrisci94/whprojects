// var storageBtn1 = document.querySelector("#btn1");

// var storageBtn2 = document.querySelector("#btn2");
// storageBtn2.addEventListener("click", setSessionStorage);
// storageBtn1.addEventListener("click", setStorage);

// function setStorage() {
//     localStorage.setItem("lastname", "Crisci");
// }
// function setSessionStorage() {
//     sessionStorage.setItem("vehicle", "Scion");

// }

var saveBtn = document.querySelector("input[type='submit']");

if(localStorage.getItem("details") !== null) {
    saveBtn.addEventListener("click", checkPassword);
}else {
    saveBtn.addEventListener("click", getUserInfo);
}
function getUserInfo(evt) {
    evt.preventDefault();
    var username = document.querySelector("input[type='text']").value;
    var password = MD5(document.querySelector("input[type='password']").value);
    var theme = document.querySelector("input[type='radio']:checked").value;
    localStorage.setItem("details", JSON.stringify(new UserInfo(username, password, theme)));
    var userInfo = JSON.parse(localStorage.getItem("details"));
    document.body.classList.add(userInfo.theme);
    document.querySelector('label[for="theme"]').style.display = 'none';
    

}
function UserInfo(un, pw, theme) {
    this.user = un; 
    this.pass = pw;
    this.theme = theme;
}

function checkUserInfo() {
    if(localStorage.getItem("details") !== null) {
        document.querySelector('label[for="theme"]').style.display = 'none';
        var userInfo = JSON.parse(localStorage.getItem("details"));
        document.querySelector("input[type='text']").value = userInfo.user;
        // alert("Please enter your password");
    }
}
checkUserInfo();

function checkPassword(evt) {
    evt.preventDefault();
    var userInfo = JSON.parse(localStorage.getItem("details"));
    var password = MD5(document.querySelector("input[type='password']").value);
    var username = document.querySelector("input[type='text']").value;

    if(username === userInfo.user && password === userInfo.pass) {
        console.log("Welcome " + userInfo.user);
        document.body.classList.add(userInfo.theme);
    }else {
        console.log("Please enter proper credentials");
    }
}