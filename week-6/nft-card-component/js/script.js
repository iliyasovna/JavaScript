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
    // card.style.display = "flex";
    // card.style.flexWrap = "wrap";
    // card.style.direction = "column";
    // card.style.justifyContent = "center";
    // card.style.alignItems = "center";
    // card.style.boxSizing = "border-Box";
    card.style.width = "350px";
    card.style.height = "600px";
    // card.style.padding = "0";
    // card.style.margin = "0";
    card.style.marginLeft = "auto";
    card.style.marginRight = "auto";
    card.style.background = "hsl(216, 50%, 16%)";
    card.style.borderRadius = "15px";

    // card-img
    const cardIMg = document.createElement("img");
    cardIMg.className = "card-img";
    cardIMg.setAttribute('src', 'images/image-equilibrium.jpg');
    // cardIMg.src = 'images/image-equilibrium.jpg';
    // cardIMg.style.display = "flex";
    // cardIMg.style.alignItems = "flex-start";
    cardIMg.style.width = "302px";
    cardIMg.style.height = "302px";
    cardIMg.style.borderRadius = "10px";
    cardIMg.style.margin = "24px";
    cardIMg.style.marginBottom = "24px";

    // h3
    const cardTitle = document.createElement("h3");
    cardTitle.className = "card-title";
    cardTitle.innerText = "Equilibrium #3429";
    cardTitle.style.fontFamily = "Outfit";
    cardTitle.style.fontSize = "22px";
    cardTitle.style.fontStyle = "normal";
    cardTitle.style.fontWeight = "700";
    cardTitle.style.color = "hsl(0, 0%, 100%)";
    cardTitle.style.margin = "0";
    cardTitle.style.marginLeft = "24px";
    cardTitle.style.padding = "0";

    // subtitle
    const subtitle = document.createElement("p");
    subtitle.className = "subtitle";
    subtitle.innerText = 'Our Equilibrium collection promotes balance and calm.';
    subtitle.style.fontWeight = "400";
    subtitle.style.fontSize = "18px";
    subtitle.style.lineHeight = "26px";
    subtitle.style.color = "hsl(215, 51%, 70%)";
    subtitle.style.marginLeft = "24px";
    subtitle.style.marginBottom = "24px";
    
    // img-info-flex
    const imgInfo = document.createElement("div");
    imgInfo.className = "img-info";
    imgInfo.style.display = "flex";
    // imgInfo.style.justifyContent = "center";
    // imgInfo.style.gap = "111px";

    // img-info-icon
    const imgIcon = document.createElement("img");
    imgIcon.className = "img-icon";
    imgIcon.src = "images/icon-ethereum.svg";
    imgIcon.style.marginLeft = "24px";
    imgIcon.style.height = "18px";

    // img-info-text
    const imgInfoText = document.createElement("p");
    imgInfoText.className = "img-info-text";    
    imgInfoText.innerText = "0.041 ETH";
    imgInfoText.style.margin = "0"
    imgInfoText.style.fontFamily = "Outfit";
    imgInfoText.style.fontStyle= "normal";
    imgInfoText.style.fontWeight = "600";
    imgInfoText.style.fontSize = "16px";
    imgInfoText.style.color = "hsl(178, 100%, 50%)";
    imgInfoText.style.marginLeft = "7px";




    document.body.appendChild(wrapper);
    wrapper.appendChild(container);
    container.appendChild(card);
    card.appendChild(cardIMg);
    card.appendChild(cardTitle);
    card.appendChild(subtitle);
    card.appendChild(imgInfo);
    imgInfo.appendChild(imgIcon);
    imgInfo.appendChild(imgInfoText);


}

createCard();


