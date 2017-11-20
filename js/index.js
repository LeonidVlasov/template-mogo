"use strict";

$(document).ready(function () {
     $("a").click(function () {
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
        fade: true,
        // arrows: false,

        // speed: 1000,
        // infinite: true,
        // autoplay: true,
        // dots: false,
        // arrows: true,
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
