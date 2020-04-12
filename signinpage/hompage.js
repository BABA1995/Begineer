function bookSearch(){
    var search =document.getElementById('search').nodeValue;
    $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes?q="+search,
        dataType:"JSON",
        success: function(data){
           for(i=0; i<data.items.length; i++){
            document.getElementById('results').innerHTML="<h3>"+ data.items[i].volumeInfo.title + "<h3>"
           } 
         //  console.log(data)
        
        },
        type: 'GET'

    })
}
document.getElementById('button').addEventListener('click',bookSearch,false)