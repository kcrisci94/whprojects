const portItems = document.querySelector("#projects ul");
const portPages = [
    {
        name: "59 Days Of Code Template",
        image: "./pictures/59daysOfCodeLogo.jpg",
        pageUrl: "https://kcrisci94.github.io/whprojects/mar05/Template/template.html"
    }, 
    {
        name: "Photos For Sale Template",
        image: "./pictures/photosForSale.jpg",
        pageUrl: "https://kcrisci94.github.io/whprojects/april13/index.html"
    },
    {
        name: "Tribute Template",
        image: "./pictures/tributePage.JPG",
        pageUrl: "https://kcrisci94.github.io/whprojects/portfolioItems/tributeTemplate/index.html"
    }, 
    {
        name: "Sample Survey Form",
        image: "./pictures/survey.JPG",
        pageUrl: "https://kcrisci94.github.io/whprojects/portfolioItems/survey/index.html"
    },
    {
        name: "Product Landing Page",
        image: "./pictures/productLanding.JPG",
        pageUrl: "https://kcrisci94.github.io/whprojects/portfolioItems/productLandingPage/index.html"
    },
    {
        name: "Technical Document Outline",
        image: "./pictures/technicalDocument.JPG",
        pageUrl: "https://kcrisci94.github.io/whprojects/portfolioItems/technicalDocument/index.html"
    }
];

function displayPortItems() {
    for(let i = 0; i < portPages.length; i++) {
        let li = `
            <li><a href="${portPages[i].pageUrl}" target="_blank"/><div class="project-tile"><img src="${portPages[i].image}" alt="${portPages[i].name}" /><p>${portPages[i].name}</p></div></a></li>
        `;
        portItems.innerHTML += li;
    }
}
displayPortItems();