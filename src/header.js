function header(){
    var header = document.createElement("header");
    var logo = document.createElement("img");
    var title = document.createElement("p");
    var content = document.querySelector("#content");
    const norseFont = document.createElement("style");
    header.style.height = "100px";
    header.style.backgroundColor = "black";
    header.style.fontSize = "70px";
    header.style.display = "flex";
    header.style.alignItems = "center";
    header.style.color = "#cc9543";
    logo.src = "../img/odinIcon.png";
    logo.width = "80";
    norseFont.textContent = `@font-face{
        font-family: "Norsebold";
        src:url("../font/Norsebold.otf")
    }`;
    document.querySelector("body").appendChild(norseFont);
    title.innerHTML = "THE ODIN CAFE";
    title.style.marginLeft = "10px";
    title.style.fontFamily = "Norsebold";
    header.appendChild(logo);
    header.appendChild(title);
    document.querySelector("body").appendChild(header);
}

export default header
