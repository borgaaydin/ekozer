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

    $(".accordion").accordion({
        collapsible: true,
        active: false,
        heightStyle: "content"
    });

    var display = false;
    $( ".logged-nav-button" ).click(function() {
        display = !display;
        if ( display === true ) {
            $( ".logged-nav" ).addClass("open");
        } else if ( display === false ) {
            $( ".logged-nav" ).removeClass("open");
            $(".accordion").accordion( "option", "active", false );
        }
    });
});