var btnShowMenu = document.getElementById('show-menu');
var socialNetwork =  document.getElementById('social-network');
btnShowMenu.onclick = function() {
    var menu = document.getElementById('menu');
    console.log("test");
    if( menu.style.display!=="none"){
        menu.style.display="none";
        socialNetwork.style.display="none";

    }
    else{
        menu.style.display="block";
        socialNetwork.style.display="inline-block";
    }
};





