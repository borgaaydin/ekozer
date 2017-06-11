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

    $('select').niceSelect();

    $('.main-button').on('inview', function(event, isInView) {
        if (isInView) {
            $('.sticky-price').hide();
            $('.copyright').removeClass("product-copyright");
        } else {
            $('.sticky-price').show();
            $('.copyright').addClass("product-copyright");
        }
    });

    $( "#yeni-favori-input" ).focus(function() {
        $(".validate-button").css("display", "flex");
    }).blur(function() {
        $(".validate-button").css("display", "none");
    });

    $(".favori-box").click(function(event){
        $(this).addClass("active");
        $(".favori-hover").css("display", "inline-block");
        event.stopPropagation();
    });

    // $(".product-detail-button a").click(function(event) {
    //     $(".basket-hovered").show();
    //     $(".header .basket-hovered ul").scrollTop(9999);
    //     event.stopPropagation();
    // });

    $('html').click(function() {
        $(".favori-box").removeClass("active");
        $(".favori-hover").css("display", 'none');
        $(".header .basket-hovered ul").scrollTop(0);
        $(".basket-hovered").removeAttr("style");
    });


});