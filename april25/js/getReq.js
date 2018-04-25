function getReq(url, func) {
    var req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function() {
        console.log(JSON.parse(req.responseText));
        if(req.readyState === 4 && req.status === 200) {
            func(JSON.parse(req.responseText));
        }else {
            console.log('error' , req.statusText);
        }
}
req.send(null);

}
