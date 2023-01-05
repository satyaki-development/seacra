   $('.sh_video2').parent().click(function () {
     if($(this).children(".sh_video2").get(0).paused){  $(this).children(".sh_video2").get(0).play();   $(this).children(".playpause2").fadeOut();
       }else{       $(this).children(".sh_video2").get(0).pause();
     $(this).children(".playpause2").fadeIn();
       }
   }); 