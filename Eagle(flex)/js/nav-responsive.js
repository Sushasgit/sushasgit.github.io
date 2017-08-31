var buttonMenu = document.getElementById('menu-icon');
console.log(buttonMenu);
buttonMenu.onclick = function () {
    var containerLinks = document.getElementById('container-links');
    console.log(containerLinks);
if (containerLinks.style.display==="block"){
    containerLinks.style.display="none"
}else{
    containerLinks.style.display="block"
}
}