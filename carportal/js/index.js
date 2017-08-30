//Счетчики (отрабатывают при загрузке страницы, нужно поменять)
'use strict';
function animateValue(obj,start, end, duration) {
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
       var timer = setInterval(function() {
           current += increment;
           obj.innerText = current;
           if (current === end) {
               clearInterval(timer);
           }
       }, stepTime);
}

var obj = document.getElementsByClassName('container-count__num');
    for (var i=0; i<obj.length; i++){
        var num = parseInt(obj[i].innerText);
        animateValue(obj[i],0, num, 2000);
    }


//Моя стрелочка

var btnScroll= document.getElementById('btn-scroll-up');
var arrow= document.getElementById('arrow');
console.log(arrow)

console.log(btnScroll);
window.onscroll=function () {
    var scroll=document.body.scrollTop;
    console.log(scroll);
    if (scroll==0){
        btnScroll.style.display='none'
    }
     else if (scroll>2000) {
        arrow.style.fill="black";
    }
    else{
        btnScroll.style.display='block'
    }
};
btnScroll.onclick = function(){
    scrollTo(0,0)
};


$('#subscribe-btn').on("click",function () {
    $('#get-email').modal();
});



