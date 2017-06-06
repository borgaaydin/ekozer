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
        dots: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
    });

    $(".accordion").accordion({
        collapsible: true,
        active: false,
        heightStyle: "content"
    });

    $('[data-toggle="tooltip"]').tooltip();

    $('.auth_button_container a').click(function() {
        $.blockUI({
            message: $('#loadingModal'),
            css: {
                width: '0',
                left:  "-10px"
            }
        });
        test();
    });
});