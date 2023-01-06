  $('.sh_video1').parent().click(function () {
  if($(this).children(".sh_video1").get(0).paused){  $(this).children(".sh_video1").get(0).play();   $(this).children(".playpausebtn1").fadeOut();
    }else{       $(this).children(".sh_video1").get(0).pause();
  $(this).children(".playpausebtn1").fadeIn();
    }
}); 