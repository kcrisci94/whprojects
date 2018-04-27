
var portItems = document.querySelector(".portfolioDisplay ul");
var portPages = [
    {
    name: "59DaysOfCodeTemplate",
    image: "../pictures/59daysOfCodeLogo.PNG",
    pageUrl: "https://kcrisci94.github.io/whprojects/mar05/Template/template.html"
    }
    // {
        
    // }
];

function displayPortItems() {
    for(var i = 0; i < portPages.length; i++) {
        var li = `
            <li><a href="${portPages[i].pageUrl}"><div><img src="${portPages[i].image}" alt="${portPages[i].name}" /><h3>${portPages[i].name}</div></h3></a></li>
        `;
        portItems.innerHTML += li;
    }
}
displayPortItems();
