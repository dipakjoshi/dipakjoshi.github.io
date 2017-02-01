$(window).scroll(function(){
  if($(document).scrollTop() > 50 ){
    $('ul').addClass('shrink');
  }
  else{
    $('ul').removeClass('shrink');
  }
})
