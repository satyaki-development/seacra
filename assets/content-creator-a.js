
  
    $('.sh_video').parent().click(function () {
  if($(this).children(".sh_video").get(0).paused){  $(this).children(".sh_video").get(0).play();   $(this).children(".playpause").fadeOut();
    }else{       $(this).children(".sh_video").get(0).pause();
  $(this).children(".playpause").fadeIn();
    }
}); 