$(document).ready(function(){
    var bireyselSifreniz = $("#bireyselSifreniz");
    var change = "";
    $(".bireyselSifreniz .eye").click(function(){
        change = "password";
        $(this).hide();
        var rep = $("<input type='" + change + "' />")
            .attr("id", bireyselSifreniz.attr("id"))
            .attr("name", bireyselSifreniz.attr("name"))
            .attr('class', bireyselSifreniz.attr('class'))
            .val(bireyselSifreniz.val())
            .insertBefore(bireyselSifreniz);
        bireyselSifreniz.remove();
        bireyselSifreniz = rep;
        $(".bireyselSifreniz .eye-closed").show();
    }).insertAfter(bireyselSifreniz);
    $(".bireyselSifreniz .eye-closed").click(function(){
        change = "text";
        $(this).hide();
        var rep = $("<input type='" + change + "' />")
            .attr("id", bireyselSifreniz.attr("id"))
            .attr("name", bireyselSifreniz.attr("name"))
            .attr('class', bireyselSifreniz.attr('class'))
            .val(bireyselSifreniz.val())
            .insertBefore(bireyselSifreniz);
        bireyselSifreniz.remove();
        bireyselSifreniz = rep;
        $(".bireyselSifreniz .eye").show();
    }).insertAfter(bireyselSifreniz);
});