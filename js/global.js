/**
 * Created by borga on 06/06/2017.
 */
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
