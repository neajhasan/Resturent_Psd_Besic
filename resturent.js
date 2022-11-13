$(document).ready(function(){
    $(window).on('scroll', function(){
        var scroll = $(this).scrollTop();
           if( scroll > 500 ){
            $('.menubar').addClass('menu_bg');
           } else {
              $('.menubar').removeClass('menu_bg');
           }

         if(scroll > 600) {
            $('.back_to_top').show(1000);
        } else {
            $('.back_to_top').hide(1000);
         }
    });
    $('.back_to_top').on('click', function(){
        $('html, body').animate({scrollTop:0},1000)
    });
});