
function regist() 
{
  var reg ={
 name : document.getElementById("uname").value,
 npass : document.getElementById("passwrd").value,
 cpass : document.getElementById("cpasswrd").value
  }


localStorage.setItem('name',reg.name);
localStorage.setItem('npass',reg.npass);
localStorage.setItem('cpass',reg.cpass);
window.location.href('login.html');


  /* localStorage.setItem('text' , name);
    localStorage.setItem('password' , npass);
    localStorage.setItem('pass' , cpass);
    console.log(name);
    console.log(cpass);
    console.log(npass); */
}


