function contact(){
    var content = document.createElement("div");
    var contactInfo = document.createElement("div");
    // var contactForm = document.createElement("form");
    var contactTitle = document.createElement("p");
    var nameSection = document.createElement("div");
    var emailSection = document.createElement("div");
    var messageSection = document.createElement("div");
    var name = document.createElement("p");
    var email = document.createElement("p");
    var message = document.createElement("p");
    var nameInput = document.createElement("input");
    var emailInput = document.createElement("input");
    var messageInput = document.createElement("textarea");

    content.id = "content";
    document.querySelector("body").style.height = "100%";
    document.querySelector("html").style.height = "100%";
    content.style.backgroundColor = "rgb(51, 51, 51)";
    content.style.backgroundImage = `url("../img/coffee6.jpg")`;
    content.style.backgroundRepeat = "no-repeat";
    content.style.backgroundSize = "cover";
    content.style.height ="100%";
    content.style.width = "100%";
    content.style.display = "flex";
    content.style.justifyContent = "center";
    content.style.alignItems = "center";

    contactInfo.style.height = "600px";
    contactInfo.style.width = "900px";
    contactInfo.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    contactInfo.style.display = "flex";
    contactInfo.style.justifyContent = "space-around";
    contactInfo.style.alignItems = "center";
    contactInfo.style.flexDirection = "column";
    contactInfo.style.color = "white";
    contactInfo.style.fontFamily = "Oswald";
    contactInfo.style.padding = "50px";
    contactInfo.style.fontSize = "25px";

    contactTitle.innerHTML = "Contact Us";
    contactTitle.style.fontSize = "50px";
    contactTitle.style.color = "white";

    name.innerHTML = "Your name:";
    email.innerHTML = "Your email:";
    message.innerHTML = "Message:";

    name.style.marginRight = "25px";
    nameSection.style.display = "flex";
    nameInput.style.width = "300px";

    email.style.marginRight = "30px";
    emailSection.style.display = "flex";
    emailInput.style.width = "300px";

    message.style.marginRight = "50px";
    messageSection.style.display = "flex";
    messageInput.style.width = "310px";
    messageInput.style.height = "150px";

    nameSection.appendChild(name);
    nameSection.appendChild(nameInput);
    emailSection.appendChild(email);
    emailSection.appendChild(emailInput);
    messageSection.appendChild(message);
    messageSection.appendChild(messageInput);
    contactInfo.appendChild(contactTitle);
    contactInfo.appendChild(nameSection);
    contactInfo.appendChild(emailSection);
    contactInfo.appendChild(messageSection);
    content.appendChild(contactInfo);
    document.querySelector("body").appendChild(content);
}

export default contact;

