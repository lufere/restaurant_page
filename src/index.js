import header from "./header";
import mainPage from "./mainPage";
import menu from "./menu";
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

console.log("test");

