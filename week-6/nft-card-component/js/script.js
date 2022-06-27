const body = document.querySelector("body");
body.style.background = 'hsl(217, 54%, 11%)'
body.style.width = "100%";
body.style.margin = "0, auto";
body.style.fontFamily = "Outfit, san-serif";
body.style.fontSize = "18px";
body.style.boxSizing ="border-box";

// wrapper
const wrapper = document.createElement("div");
wrapper.id = "wrapper";
wrapper.style.boxSizing = "border-box";
wrapper.style.margin = "0, auto";
wrapper.style.width = "1440";
wrapper.style.display = "flex";
wrapper.style.justifyContent = "center";
wrapper.style.alignItems = "center";
wrapper.style.marginTop = "150px";


// container
const container = document.createElement ("div");
container.className = "container";
container.style.boxSizing = "border-box";
container.style.width = "1240px";
container.style.margin = "0, auto";
container.style.padding = "0, 15px"


// Card
function createCard() {
    const card = document.createElement("div");
    card.className = "card";
    card.style.position = "relative";
    card.style.display = "flex";
    card.style.justifyContent = "center";
    card.style.alignItems = "center";
    card.style.boxSizing = "border-Box";
    card.style.width = "350px";
    card.style.height = "600px";
    card.style.padding = "24px";
    card.style.marginLeft = "auto";
    card.style.marginRight = "auto";
    card.style.background = "hsl(216, 50%, 16%)";
    card.style.borderRadius = "15px";

    // card-img
    const cardIMg = document.createElement("img");
    cardIMg.className = "card-img";
    cardIMg.setAttribute('src', 'images/image-equilibrium.jpg');
    // cardIMg.src = 'images/image-equilibrium.jpg';
    cardIMg.style.position = "relative"
    cardIMg.style.width = "302px";
    cardIMg.style.height = "302px";
    cardIMg.style.borderRadius = "10px";


    document.body.appendChild(wrapper);
    wrapper.appendChild(container);
    container.appendChild(card);
    card.appendChild(cardIMg);


}

createCard();


