import header from "./header";
import mainPage from "./mainPage";
import menu from "./menu";
import contact from "./contact";

header();
mainPage();
document.querySelector("#menu").addEventListener("click",function(e){
    document.querySelector("#content").remove();
    menu();
});

document.querySelector("#home").addEventListener("click",function(e){
    document.querySelector("#content").remove();
    mainPage();
});

document.querySelector("#contact").addEventListener("click",function(e){
    document.querySelector("#content").remove();
    contact();
});

console.log("test");

