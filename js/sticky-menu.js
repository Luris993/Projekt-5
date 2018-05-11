$(function(){
  $(window).scroll(function() {
     if($(window).scrollTop() >= 100) {
       $('nav').addClass('nav-black');
     }
    else {
      $('nav').removeClass('nav-black');
    }
  });
});