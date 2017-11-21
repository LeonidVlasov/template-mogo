"use strict";

$(document).ready(function () {
     $(".nav__link").click(function () {
         $('html, body').animate({
             scrollTop: $($(this).attr('href')).offset().top
         }, 3000);
         return false;
     });

    $('.top-slider').slick({
        speed: 1000,
        infinite: true,
        autoplay: true,
        dots: false,
        arrows: false,
    });

    $('.quote__container').slick({
        autoplay: true,
        speed: 1000,
        responsive: [{
            breakpoint: 420,
                settings: {
                    arrows: false,
                }
            }
        ]
    });

    $('.quote__container--fade').slick({
        fade: true,
        autoplay: true,
        speed: 1000,
    });

    $(".toggle").click(function () {
        $(".down").toggleClass('downstart');
        $(".fades").toggleClass("fadestart");
        $(".up").toggleClass("upstart");
        $(".nav").toggleClass('nav--active');
    });

    $(".nav__link").click(function () {
        $(".toggle").click();
    });
});
