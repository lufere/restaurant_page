function mainPage(){
    // var content = document.querySelector("#content");
    var content = document.createElement("div");
    var welcome = document.createElement("div");
    var welcome1 = document.createElement("p");
    var welcome2 = document.createElement("p");
    document.querySelector("body").style.height = "100%";
    document.querySelector("html").style.height = "100%";
    content.id = "content";
    content.style.backgroundImage = `url("../img/coffee5.jpg")`;
    content.style.backgroundRepeat = "no-repeat";
    content.style.backgroundSize = "cover";
    content.style.height ="100%";
    content.style.width = "100%";
    welcome.style.height = "350px"
    welcome.style.width = "450px"
    welcome.style.backgroundColor = "rgba(0, 0, 0, 0.527)";
    welcome.style.position = "absolute";
    welcome.style.top = "300px";
    welcome.style.left = "200px";
    welcome.style.color = "white";
    welcome.style.display = "flex"
    welcome.style.fontSize = "30px";
    welcome.style.flexDirection = "column";
    welcome.style.justifyContent = "center";
    welcome.style.alignItems = "center";
    welcome.style.textAlign = "center";
    welcome.style.fontFamily = "Oswald";
    welcome.style.padding = "0 25px";
    welcome1.innerHTML = "Bring your laptop over and enjoy a cup of coffee.";
    welcome2.innerHTML = "All coders are welcome!";
    welcome2.style.marginTop = "50px";
    welcome.appendChild(welcome1);
    welcome.appendChild(welcome2);
    content.appendChild(welcome);
    document.querySelector("body").appendChild(content);
}

export default mainPage