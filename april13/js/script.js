var items = document.querySelector("#items");
var photos = document.querySelectorAll("li");
var cartNum = document.querySelector("#cartNum");

var selectedArray = [];
var itemArray = [
    {
        img: "http://unsplash.it/256/256?image=100",
        alt: "Muggy Beach",
        title: "Muggy Beach",
        cost: 100,
        desc: "People playing on a beach during a foggy day."
    },
    {
        img: "http://unsplash.it/256/256?image=204",
        alt: "Railroad Tracks",
        title: "Railroad Tracks",
        cost: 75,
        desc: "Staring down the center of a railroad track."
    },
    {
        img: "http://unsplash.it/256/256?image=156",
        alt: "Footprints",
        title: "Footprints",
        cost: 130,
        desc: "Footprints in the sand"
    },
    {
        img: "http://unsplash.it/256/256?image=220",
        alt: "Train Stop",
        title: "Train Stop",
        cost: 200,
        desc: "Staring at an empty railway stop."
    },
    {
        img: "http://unsplash.it/256/256?image=110",
        alt: "Marshy Sunrise",
        title: "Marshy Sunrise",
        cost: 230,
        desc: "Sunrise over a marshy land."
    },
    {
        img: "http://unsplash.it/256/256?image=118",
        alt: "Mountain Overlook",
        title: "Mountain Overlook",
        cost: 170,
        desc: "Staring off a mountain cliff at the valley below."
    }
];

function displayItems(arr) {
    for(var i = 0; i < arr.length; i++) {
        var item = `
        <li data-sku="${i + 1}">
        <input type="checkbox">
        <img src="${arr[i].img}" alt="${arr[i].alt}">
        <h3>${arr[i].title}</h3>
        <p>$${arr[i].cost}</p>
        <p>${arr[i].desc}</p>
        </li>`;
        items.innerHTML += item;
    }

    
}
displayItems(itemArray);

function addListener(arr, objArr) {
    for(var i = 0; i < arr.length; i++) {
        arr[i].addEventListener("click", function(evt) {

            this.classList.toggle("selected");
            (this.firstElementChild.checked) ? this.firstElementChild.checked = false : this.firstElementChild.checked = true;
            console.log(this.firstElementChild.checked);

            
            // selectedArray.push(Array.from(arr).slice(this.dataset.sku , 1));
            if(this.firstElementChild.checked)
            {
                selectedArray.push((objArr.slice(this.dataset.sku, parseInt(this.dataset.sku) + 1)[0]));
            }else {
                selectedArray.splice(selectedArray.indexOf(objArr.slice(this.dataset.sku, parseInt(this.dataset.sku) + 1)[0]));
            }

           console.log(selectedArray);
        });
    }
    
}

addListener(items.children, itemArray);

