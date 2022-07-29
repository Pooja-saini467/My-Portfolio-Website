$(document).ready(function(){
  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });
  $(window).on('scroll load',function(){
    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');
  });
  //$('.about').magnificPopup({
    //delegate:'a',
    //type:'image',
    //gallery:{
     // enabled:true
    //}
  //});
});
let button = document.querySelector("body a");
button.addEventListener("click",()=>{
  alert("Success")
})

const dark = document.getElementById("dark");
const theme = document.querySelector("#theme-link");
dark.addEventListener("click", function() {
  if (theme.getAttribute("href") == "stylesheet.css") {
    theme.href = "style.css";
  } else {
    theme.href = "stylesheet.css";
  }
});

