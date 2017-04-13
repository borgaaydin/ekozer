/**
 * Created by borga on 10/04/17.
 */

$(function() {
    $(".main_slider").slick({
        arrows: true,
        variableWidth: true,
        infinite: false,
        dots: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2
    });

    $(".product_slider").slick({
        arrows: true,
        variableWidth: true,
        infinite: false,
        dots: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
    });


});