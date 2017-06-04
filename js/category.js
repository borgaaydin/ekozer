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
    // $('#categoryRequestModal').modal('show')

    $(".regular-filter-list").each(function(){
        $(this).find("ul li").hide();
        x = 9;
        $(this).find('ul li:lt('+x+')').show();

        if($(this).find("ul li").length <= 9) {
            $(this).find(".filter-show-all-bottom").hide();
        }

        $(this).find(".showAll").click(function () {
            x = $(this).find("ul li").length;
            $(this).find('ul li:lt('+x+')').show();
        });
    });

    $('.showAll').click(function (event) {
        event.preventDefault();
        x= $(".regular-filter-list ul li").length;
        $('.regular-filter-list ul li:lt('+x+')').show();
    });



});
