!function(e){var t={};function n(l){if(t[l])return t[l].exports;var o=t[l]={i:l,l:!1,exports:{}};return e[l].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(l,o,function(t){return e[t]}.bind(null,o));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var l=function(){var e=document.querySelector("#content"),t=document.createElement("div"),n=document.createElement("p"),l=document.createElement("p");document.querySelector("body").style.height="100%",document.querySelector("html").style.height="100%",e.style.backgroundImage='url("../img/coffee2.jpg")',e.style.backgroundRepeat="no-repeat",e.style.backgroundSize="cover",e.style.height="100%",e.style.width="100%",t.style.height="350px",t.style.width="450px",t.style.backgroundColor="rgba(0, 0, 0, 0.527)",t.style.position="absolute",t.style.top="300px",t.style.left="200px",t.style.color="white",t.style.display="flex",t.style.fontSize="30px",t.style.flexDirection="column",t.style.justifyContent="center",t.style.alignItems="center",t.style.textAlign="center",t.style.fontFamily="Oswald",t.style.padding="0 25px",n.innerHTML="Bring your laptop over and enjoy a cup of coffee.",l.innerHTML="All coders are welcome!",l.style.marginTop="50px",t.appendChild(n),t.appendChild(l),e.appendChild(t),document.querySelector("body").appendChild(e)};(function(){var e=document.createElement("header"),t=document.createElement("img"),n=document.createElement("p"),l=document.createElement("div"),o=document.createElement("style"),r=document.createElement("div"),i=document.createElement("a"),c=document.createElement("a");i.id="menu",c.id="contact",l.style.display="flex",l.style.alignItems="center",l.style.marginLeft="10px",e.style.height="100px",e.style.backgroundColor="black",e.style.fontSize="70px",e.style.display="flex",e.style.alignItems="center",e.style.justifyContent="space-between",e.style.color="#cc9543",e.style.fontFamily="Norsebold",t.src="../img/odinIcon.png",t.width="80",o.textContent='@font-face{\n        font-family: "Norsebold";\n        src:url("../font/Norsebold.otf")\n    }',document.querySelector("body").appendChild(o),n.innerHTML="THE ODIN CAFE",n.style.marginLeft="10px",i.innerHTML="MENU",i.style.marginRight="30px",c.innerHTML="CONTACT",r.style.fontSize="50px",r.style.marginRight="40px",r.appendChild(i),r.appendChild(c),l.appendChild(t),l.appendChild(n),e.appendChild(l),e.appendChild(r),document.querySelector("body").appendChild(e)})(),l(),console.log("test")}]);