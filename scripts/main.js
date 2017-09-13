$(document).ready(function(){

     //Part 1

     $("#btnOne").click(function(){
        alert("The paragraph was clicked.");
    });


    //Part 2
    function replace(html){
        $(".update-html").html(html);
    }

    $("#btnTwo").click(function() {
        replace("<h3>Hello World!</h3>");
       
    });

    //Part 3
    function update(val){
        $("#text-update").val(val);
    }

    $("#btnThree").click(function(){
        update("Hello World");
    });  

    //Part 4

    $("#btnCopyHtml").click(function(){
        var copiedHtml = $(".copy-html").html();
        $(".paste-html").html(copiedHtml);         
    });  

    //Part 5
    $("#btnCopyValues").click(function(){
        var copiedValue = $("#copy-text").val();
        $("#paste-text").val(copiedValue);   
    });
});
