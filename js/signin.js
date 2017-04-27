$(document).ready(function(){
    var uyeSifre = $("#uyeSifre");
    var change = "";
    $(".uyeSifre .eye-closed").click(function(){
        change = "password";
        $(this).hide();
        var rep = $("<input type='" + change + "' />")
            .attr("id", uyeSifre.attr("id"))
            .attr("name", uyeSifre.attr("name"))
            .attr('class', uyeSifre.attr('class'))
            .val(uyeSifre.val())
            .insertBefore(uyeSifre);
        uyeSifre.remove();
        uyeSifre = rep;
        $(".uyeSifre .eye").show();
    }).insertAfter(uyeSifre);
    $(".uyeSifre .eye").click(function(){
        change = "text";
        $(this).hide();
        var rep = $("<input type='" + change + "' />")
            .attr("id", uyeSifre.attr("id"))
            .attr("name", uyeSifre.attr("name"))
            .attr('class', uyeSifre.attr('class'))
            .val(uyeSifre.val())
            .insertBefore(uyeSifre);
        uyeSifre.remove();
        uyeSifre = rep;
        $(".uyeSifre .eye-closed").show();
    }).insertAfter(uyeSifre);
});