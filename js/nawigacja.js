$(document).ready(function() {
    $("p, h1, h2, h3, a, img").hide().fadeIn(2000);

    $('.start').on('click', function() {
        $('html, body').animate({
            scrollTop: $('#banner').offset().top -80
        }, 700);
    });

    $('.aboutme').on('click', function() {
        $('html, body').animate({
            scrollTop: $('#aboutme').offset().top -10
        }, 700);
    });

    $('.learning').on('click', function() {
        $('html, body').animate({
            scrollTop: $('#learning').offset().top -80
        }, 700);
    });

    $('.contact').on('click', function() {
        $('html, body').animate({
            scrollTop: $('#contact').offset().top -80
        }, 700);
    });

    $('audio').hide();

    $('.button-lesson').on('click', function(){
        $('audio').fadeIn(1000);
    });
});