/*
 
 JAVASCRIPT DOCUMENT - BDHARVA.COM
 Author: Benjamin Harvatine (bdharva.com)
 Updated: Friday, June 28, 2013
 
 */

$(document).ready(function(){
    resizeElements();
});

$(window).load(function(){
    slideshow();
});

window.onresize = function(event) {
    resizeElements();
}

$("li img").click(function() {
    $('html, body').animate({
        scrollTop: $('html, body').offset().top
    }, 1000);
});

$("#to_about").click(function() {
    $('html, body').animate({
        scrollTop: $(".about").offset().top - 60
    }, 1000);
});

$("#to_work").click(function() {
    $('html, body').animate({
        scrollTop: $(".work").offset().top - 60
    }, 1000);
});

$("#to_contact").click(function() {
    $('html, body').animate({
        scrollTop: $(".contact").offset().top - 60
    }, 1000);
});

$("body").scroll( function() {
    var value = $('body').scrollTop();
    if (value > $('.intro').height && value < $('.intro').height + $('.about').height){
        document.getElementById("to_about").className = "active";
        document.getElementById("to_work").className = "";
        document.getElementById("to_contact").className = "";
    }
});

function slideshow(){
    $(".picwrapper > img:gt(0)").hide();
    setInterval(function() {
        $('.picwrapper > img:first')
        .fadeOut(2000)
        .next()
        .fadeIn(2000)
        .end()
        .appendTo('.picwrapper');
    },  4000);
}