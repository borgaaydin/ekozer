$(function() {
    $(".product_detail_slider").slick({
        arrows: true,
        variableWidth: true,
        infinite: false,
        dots: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
    });


    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });

    $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        focusOnSelect: true,
        vertical: true,
        arrows: false
    });
});