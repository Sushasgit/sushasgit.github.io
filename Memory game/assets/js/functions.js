function shuffleArray(imgArray) {
    for(var j, x, i = imgArray.length; i; j = parseInt(Math.random() * i), x = imgArray[--i], imgArray[i] = imgArray[j], imgArray[j] = x){

    };
    return imgArray;
}

function createCards(userCount, imgArray) {
    var gameDiv = document.getElementById('game_area');
    gameDiv.innerText='';
    if (userCount == 4){
        imgArray.length=16;
    }
    for (var i=0; i<userCount; i++){
        var createCont = document.createElement('div');
        createCont.classList.add('container-img');
        for (var j=0; j<userCount; j++){
            var createSec = document.createElement('section');
            createSec.classList.add('hidden');
            createCont.appendChild(createSec);
        }
        gameDiv.appendChild(createCont);
    }
}

function createImg(imgArray){
    var table = document.querySelectorAll('section');
    for(var i=0; i<table.length; i++){
        var imgCreate = document.createElement('img');
        imgCreate.style.textAlign='center';
        imgCreate.style.width='100'+'%';
        imgCreate.setAttribute('src',imgArray[i].url);
        table[i].setAttribute('data-name',imgArray[i].name);
        table[i].appendChild(imgCreate);
    }
}

function showCards(card) {
    card.classList.remove("hidden");
    card.style.backgroundImage="none";
    card.classList.add("show");

}

function hidePiecs(card) {
    card.classList.add("hidden");
    card.style.backgroundImage="url('assets/img/3.png')";
    card.classList.remove("show");


    return undefined;
}