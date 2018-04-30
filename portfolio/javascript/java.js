
var portItems = document.querySelector(".portfolioDisplay ul");
var portPages = [
    {
    name: "59DaysOfCodeTemplate",
    image: "../pictures/59daysOfCodeLogo.jpg",
    pageUrl: "https://kcrisci94.github.io/whprojects/mar05/Template/template.html"
    }, 
    {
        name: "NumberGuessingGame",
        image: "../pictures/numberGuessingGame.jpg",
        pageUrl: "https://kcrisci94.github.io/whprojects/april06/index.html"
    }, 
    {
        name: "PhotosForSaleTemplate",
        image: "../pictures/photosForSale.jpg",
        pageUrl: "https://kcrisci94.github.io/whprojects/april13/index.html"
    },
    {
        name: "RickandMortyPlayingCards",
        image: "../pictures/rickAndMorty.jpg",
        pageUrl: "https://kcrisci94.github.io/whprojects/april20/index.html"
    }
];

async function displayPortItems() {
    for(let i = 0; i < portPages.length; i++) {
        let li = await `
            <li><a href="${portPages[i].pageUrl}"><div><img src="${portPages[i].image}" alt="${portPages[i].name}" /><h3>${portPages[i].name}</h3></div></a></li>
        `;
        portItems.innerHTML += li;
    }
}
displayPortItems();
