/**
 * Created by borga on 15/05/2017.
 */

$(document).ready(function() {
    $(".leftAccordion").accordion({
        collapsible: true,
        active: false,
        heightStyle: "content"
    });

    var eskiSifre = $("#eskiSifre");
    var change = "";
    $(".eskiSifre .eye-closed").click(function(){
        change = "password";
        $(this).hide();
        var rep = $("<input type='" + change + "' />")
            .attr("id", eskiSifre.attr("id"))
            .attr("name", eskiSifre.attr("name"))
            .attr('class', eskiSifre.attr('class'))
            .val(eskiSifre.val())
            .insertBefore(eskiSifre);
        eskiSifre.remove();
        eskiSifre = rep;
        $(".eskiSifre .eye").show();
    }).insertAfter(eskiSifre);
    $(".eskiSifre .eye").click(function(){
        change = "text";
        $(this).hide();
        var rep = $("<input type='" + change + "' />")
            .attr("id", eskiSifre.attr("id"))
            .attr("name", eskiSifre.attr("name"))
            .attr('class', eskiSifre.attr('class'))
            .val(eskiSifre.val())
            .insertBefore(eskiSifre);
        eskiSifre.remove();
        eskiSifre = rep;
        $(".eskiSifre .eye-closed").show();
    }).insertAfter(eskiSifre);



    var yeniSifre = $("#yeniSifre");
    var change = "";
    $(".yeniSifre .eye-closed").click(function(){
        change = "password";
        $(this).hide();
        var rep = $("<input type='" + change + "' />")
            .attr("id", yeniSifre.attr("id"))
            .attr("name", yeniSifre.attr("name"))
            .attr('class', yeniSifre.attr('class'))
            .val(yeniSifre.val())
            .insertBefore(yeniSifre);
        yeniSifre.remove();
        yeniSifre = rep;
        $(".yeniSifre .eye").show();
    }).insertAfter(yeniSifre);
    $(".yeniSifre .eye").click(function(){
        change = "text";
        $(this).hide();
        var rep = $("<input type='" + change + "' />")
            .attr("id", yeniSifre.attr("id"))
            .attr("name", yeniSifre.attr("name"))
            .attr('class', yeniSifre.attr('class'))
            .val(yeniSifre.val())
            .insertBefore(yeniSifre);
        yeniSifre.remove();
        yeniSifre = rep;
        $(".yeniSifre .eye-closed").show();
    }).insertAfter(yeniSifre);
});
