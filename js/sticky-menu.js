$(function(){
  
  $(window).on('scroll', function(){
    if ($(window).scrollTop()){
      $('nav').addClass('nav-black');
    }
    else {
      $('nav').removeClass('nav-black');
    }
  })
  
});