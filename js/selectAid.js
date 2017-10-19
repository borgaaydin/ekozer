/**
 * Created by borga on 12/07/2017.
 */
$(window).load(function(){
    $( ".nice-select" ).keypress(function(e) {
        var list = $(this).find("ul.list");
        var items = $(this).find("ul.list li").slice(1);
        var pressedKey = e.key.toLowerCase();

        list.scrollTop(0);

        items.each(function(index, obj) {
            var position = $(this).position().top;
            var thisKey = $(this).text().toLowerCase().charAt(0);

            // console.log(position);
            // console.log(thisKey);
            // console.log(pressedKey);

            if(thisKey == pressedKey) {
                list.scrollTop(position);
                return false;
            }
        });
    });
});