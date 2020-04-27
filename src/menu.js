function menu(){
    // document.querySelector("body").appendChild(content);
    var content = document.createElement("div");
    var coffeeCup = document.createElement("div");
    var cinammonRoll = document.createElement("div");
    var muffin = document.createElement("div");
    
    var coffeeImg = document.createElement("img");
    coffeeImg.src = "../img/coffeeCup.png";
    coffeeImg.style.width = "400px";
    var rollImg = document.createElement("img");
    rollImg.src = "../img/cinammonRoll.png";
    rollImg.style.width = "400px";
    rollImg.style.marginTop = "20px";
    var muffinImg = document.createElement("img");
    muffinImg.src = "../img/muffin.png";
    muffinImg.style.width = "350px";

    content.id = "content";
    content.style.backgroundImage = `url("../img/coffee3.jpg")`;
    content.style.backgroundRepeat = "no-repeat";
    content.style.backgroundSize = "cover";
    content.style.height ="100%";
    content.style.width = "100%";
    content.style.display = "flex";
    content.style.justifyContent = "space-around";
    content.style.alignItems = "center";

    coffeeCup.style.width = "350px";
    coffeeCup.style.height = "350px";
    coffeeCup.style.top = "200px";
    coffeeCup.style.color = "white";
    coffeeCup.innerHTML = "A cup of coffee";
    coffeeCup.style.padding = "40px";
    coffeeCup.style.textAlign = "center";
    coffeeCup.style.fontSize = "40px";
    coffeeCup.style.fontFamily = "Oswald";
    coffeeCup.style.letterSpacing = "1px";
    coffeeCup.style.backgroundColor = "rgba(0, 0, 0, 0.527)";
    coffeeCup.appendChild(coffeeImg);

    cinammonRoll.style.width = "350px";
    cinammonRoll.style.height = "350px";
    cinammonRoll.style.top = "200px";
    cinammonRoll.style.color = "white";
    cinammonRoll.innerHTML = "Cinammon Rolls";
    cinammonRoll.style.padding = "40px";
    cinammonRoll.style.textAlign = "center";
    cinammonRoll.style.fontSize = "40px";
    cinammonRoll.style.fontFamily = "Oswald";
    cinammonRoll.style.letterSpacing = "1px";
    cinammonRoll.style.backgroundColor = "rgba(0, 0, 0, 0.527)";
    cinammonRoll.appendChild(rollImg);

    muffin.style.width = "350px";
    muffin.style.height = "350px";
    muffin.style.top = "200px";
    muffin.style.color = "white";
    muffin.innerHTML = "Muffins";
    muffin.style.padding = "40px";
    muffin.style.textAlign = "center";
    muffin.style.fontSize = "40px";
    muffin.style.fontFamily = "Oswald";
    muffin.style.letterSpacing = "1px";
    muffin.style.backgroundColor = "rgba(0, 0, 0, 0.527)";
    muffin.appendChild(muffinImg);

    content.appendChild(coffeeCup);
    content.appendChild(cinammonRoll);
    content.appendChild(muffin);

    document.querySelector("body").appendChild(content);
}

export default menu;