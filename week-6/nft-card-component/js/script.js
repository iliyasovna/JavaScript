const body = document.querySelector("body");
body.style.background = 'hsl(217, 54%, 11%)'
body.style.width = "100vh";
body.style.margin = "0, auto";
body.style.fontFamily = "Outfit, san-serif";
body.style.fontSize = "18px";
body.style.boxSizing ="border-box";

// wrapper
const wrapper = document.createElement("div");
wrapper.id = "wrapper";
wrapper.style.margin = "0, auto";
wrapper.style.maxWidth = "1440";
wrapper.style.display = "flex";
wrapper.style.justifyContent = "space-around";
wrapper.style.flexWrap = "wrap";
wrapper.style.marginTop = "100px";

// Card
function createCard() {
    const card = document.createElement("div");
    


    document.body.appendChild(wrapper);

}

createCard();


