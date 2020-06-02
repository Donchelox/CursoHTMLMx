$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 50){
        $('.fixed-top').removeClass("scroll-header");
    } else{
        $('.fixed-top').addClass("scroll-header");
    }
    });