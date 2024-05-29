let aboutMe =document.getElementsByClassName("about-me");
let main = document.getElementsByClassName("main");

let createTextContent = document.createElement("article");

function clickedAboutMe(){
   console.log(main[0].appendChild(createTextContent));
   createTextContent.textContent="MysticAlley is a platform blog by A K PATHAK";
}