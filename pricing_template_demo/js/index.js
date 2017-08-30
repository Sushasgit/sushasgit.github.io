'use strict';

$(document).ready(function () {

    $('.types-plans__btn').on('click',function () {
        var thisSectionColor = $(this).css('border-color');
        headersColorChange(thisSectionColor);
        console.log(thisSectionColor);
    })
    $("#menu-icon").on('click',function () {
        $(".top-menu").toggle();

    });
});

var headersColorChange = function(color) {
    $('.main-subtitles').css('background-color', color);
};







