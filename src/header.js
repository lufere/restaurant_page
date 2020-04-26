function header(){
    var header = document.createElement("header");
    var logo = document.createElement("img");
    var title = document.createElement("p");
    var banner = document.createElement("div");
    var norseFont = document.createElement("style");
    var navigation = document.createElement("div");
    var menuLink = document.createElement("a");
    var contactLink = document.createElement("a");
    menuLink.id = "menu";
    contactLink.id = "contact";
    banner.style.display = "flex";
    banner.style.alignItems = "center";
    banner.style.marginLeft = "10px";
    header.style.height = "100px";
    header.style.backgroundColor = "black";
    header.style.fontSize = "70px";
    header.style.display = "flex";
    header.style.alignItems = "center";
    header.style.justifyContent = "space-between";
    header.style.color = "#cc9543";
    header.style.fontFamily = "Norsebold";
    logo.src = "../img/odinIcon.png";
    logo.width = "80";
    norseFont.textContent = `@font-face{
        font-family: "Norsebold";
        src:url("../font/Norsebold.otf")
    }`;
    document.querySelector("body").appendChild(norseFont);
    title.innerHTML = "THE ODIN CAFE";
    title.style.marginLeft = "10px";
    menuLink.innerHTML = "MENU";
    menuLink.style.marginRight = "30px";
    contactLink.innerHTML = "CONTACT";
    navigation.style.fontSize = "50px";
    navigation.style.marginRight = "40px";
    navigation.appendChild(menuLink);
    navigation.appendChild(contactLink);
    banner.appendChild(logo);
    banner.appendChild(title);
    header.appendChild(banner);
    // header.appendChild(title);
    header.appendChild(navigation);
    document.querySelector("body").appendChild(header);
}

export default header
