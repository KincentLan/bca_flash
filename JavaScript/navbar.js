$(document).ready(function () {
    $(window).scroll(function () {
        var colorDivPos = $('#colored_div').offset().top;
        var colorDivHeight = $('#colored_div').height();
        var navPos = $('.nav').offset().top;
        var navHeight = $('.nav').height();
        var scroll = $(window).scrollTop();
        console.log('colorDivPos: ', colorDivPos);
        console.log('navPos: ', navPos);
        console.log('colorDivHeight: ', colorDivHeight);
        console.log('scroll', scroll);
        var elements = document.getElementsByClassName('changeColor');

        if(navPos < (colorDivPos + colorDivHeight)) {

        } else if (navPos > (colorDivPos + colorDivHeight)) {

        }
    })
});