/**
 * Created by borga on 01/05/17.
 */
$(function() {
    $(".category_slider").slick({
        arrows: true,
        variableWidth: true,
        infinite: false,
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
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

    $('select').niceSelect();

    $(".three-grid-list-button").click(function() {
        $(".category-products").removeClass("four-grid");
        $(".category-products").removeClass("line-grid");

        $(".category-products").addClass("three-grid");

        $(".listing-options>div").each(function(){
            $(this).removeClass("active");
        });
        $(this).addClass("active");
    });

    $(".line-list-button").click(function() {
        $(".category-products").removeClass("four-grid");
        $(".category-products").removeClass("three-grid");

        $(".category-products").addClass("line-grid");

        $(".listing-options>div").each(function(){
            $(this).removeClass("active");
        });
        $(this).addClass("active");
    });

    $(".four-grid-list-button").click(function() {
        $(".category-products").removeClass("line-grid");
        $(".category-products").removeClass("three-grid");

        $(".category-products").addClass("four-grid");

        $(".listing-options>div").each(function(){
            $(this).removeClass("active");
        });
        $(this).addClass("active");
    });

    // to open modal
     $('#categoryRequestModal').modal('show')


});
