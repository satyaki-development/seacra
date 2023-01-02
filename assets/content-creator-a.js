
  
   $('.video').parent().click(function () {
  if($(this).children(".video").get(1).paused){  $(this).children(".video").get(1).play();   $(this).children(".playpause").fadeOut();
    }else{       $(this).children(".video").get(1).pause();
  $(this).children(".playpause").fadeIn();
    }
});