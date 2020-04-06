function rgpage(){
    window.location.href= 'register.html';
}
function myPage(){
   var a= localStorage.getItem('name');
   var b= localStorage.getItem('cpass');
 
   var text= document.getElementById('text').value;
   var pass= document.getElementById('pass').value;

   if(text !== a || pass !== b){
       alert("enterred wromgng");
   }
   else{
       window.location.href='homepage.html';
   }


}
 