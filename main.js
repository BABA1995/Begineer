$(document).ready(function(){
    
    $("#myform").submit(function(){
        var search = $("#books").val();
        if(search == ""){
            alert("pls enter something in the field");

        }
        else{
            var url = '';
            var img ='';
            var title = '';
            var author = '';

            $.get("https://www.googleapis.com/books/v1/volumes?=" + search, function(response){
                console.log(response);
            })
        }
    })
    
    return false;


})