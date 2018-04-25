function userStr(evt) {
    getReq(`https://api.github.com/search/users?q=${searchBox.value}&client_id=${clientId}`, githubUsers);
    // if(
    //     evt.key !== 'undefined' &&
    //     evt.key !== 'Backspace' &&
    //     evt.key !== 'Tab'
    // ) {
    // str += evt.key;
    // }
    // console.log(str, searchBox.value);
    // // getChar(userStr);

}