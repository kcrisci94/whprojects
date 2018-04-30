
const portItems = document.querySelector(".portfolioDisplay ul");
const portPages = [
    {
    name: "59 Days Of Code Template",
    image: "pictures/59daysOfCodeLogo.jpg",
    pageUrl: "https://kcrisci94.github.io/whprojects/mar05/Template/template.html"
    }, 
    {
        name: "Number Guessing Game",
        image: "pictures/numberGuessingGame.jpg",
        pageUrl: "https://kcrisci94.github.io/whprojects/april06/index.html"
    }, 
    {
        name: "Photos For Sale Template",
        image: "pictures/photosForSale.jpg",
        pageUrl: "https://kcrisci94.github.io/whprojects/april13/index.html"
    },
    {
        name: "Rick and Morty Playing Cards",
        image: "pictures/rickAndMorty.jpg",
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
