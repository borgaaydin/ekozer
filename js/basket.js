/**
 * Created by borga on 08/05/17.
 */
$(document).ready(function() {
    $('select').niceSelect();

    $(".basket-special-slider").slick({
        arrows: true,
        variableWidth: true,
        infinite: false,
        dots: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    });

    $(".accordion").accordion({
        collapsible: true,
        active: false,
        heightStyle: "content"
    });

    $(".warning-accordion").accordion({
        collapsible: true,
        active: false,
        header: ".head"

    });

    $(".ozel-kampanya").accordion({
        collapsible: true,
        active: false,
        header: ".head",
        heightStyle: "content"
    });

    $(".basket-special-accordion").accordion({
        collapsible: true,
        active: false,
        header: ".basket-special-button",
        heightStyle: "content"
    });

    $(".basket-right").Stickyfill();

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