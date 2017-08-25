/**
 * Created by borga on 06/06/2017.
 */

$(function() {

    var display = false;
    var loggedNav = $(".logged-nav");
    $(document).click(function(e) {
        e.stopPropagation();

        display = loggedNav.accordion("option", "active");
        console.log("display : " + display);
        console.log("display : " + $(".logged-nav-button").is(e.target));
        console.log("display : " + loggedNav.is(e.target));
        console.log(e.target);
        if (!$(".logged-nav-button").is(e.target) && !loggedNav.is(e.target) && !$(".logged-nav-button > span").is(e.target)  && !$(".logged-nav-container").is(e.target) && (display === 0) ) {
            e.stopPropagation();
            loggedNav.accordion("option", "active", false);
        }
    });

    $(".logged-nav-container").click(function (e) {
        e.preventDefault();
        e.stopPropagation();
    })

});