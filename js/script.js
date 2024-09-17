const height = window.innerHeight;
const banner = document.getElementById("div-banner");
const sections = document.querySelectorAll(".section");

banner.style.height = height+"px";

if(window.innerWidth > "1290"){
    for(let i = 0; i < sections.length; i++){
        sections[i].style.height = height+"px";
    }
}