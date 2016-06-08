$(document).ready(function(){


var btn = $('button')

var img = $('img')


  btn.click(function(){
    img.removeClass().addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
      $(this).removeClass();
    })
  })




});
