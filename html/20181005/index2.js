$(document).ready(function(){
    $("#hide").click(function(){
        $("#js-div").hide();
        console.log();
    });
    $("#show").click(function(){
        $("#js-div").show();
        console.log();
    });
    $("#toggle").click(function(){
        $("#js-div").toggle();
    });
});