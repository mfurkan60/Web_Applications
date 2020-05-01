$(window).scroll(function(){
    if($(document).scrollTop()>50){
        $('nav').addClass('scroll');
    }
    else{
        $('nav').removeClass('scroll');
    }
})