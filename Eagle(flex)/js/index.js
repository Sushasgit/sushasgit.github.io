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

var obj = document.getElementsByClassName('our-advantages__headline-num');
for (var i=0; i<obj.length; i++){
    var num = parseInt(obj[i].innerText);
    animateValue(obj[i],0, num, 3000);
}


var buttonsArrow = document.getElementsByClassName('arrow');
console.log(buttonsArrow);
var p = document.getElementsByClassName('service-preview__text');
for(var i=0; i < buttonsArrow.length; i++){
    buttonsArrow[i].onclick= function () {
        var p = this.parentNode.parentNode.parentNode;
         p.classList.toggle("active");

    }
}