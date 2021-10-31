// scrolling
$(document).ready(function(){
    $(window).scroll(function(){
        var scrolling =$(this).scrollTop();
        if(scrolling > 400){
            $(".arrow").fadeIn();
        }else{
            $(".arrow").fadeOut();
        }


        if(scrolling > 100){
            $(".menu-bg").addClass("menu-fix");
        }else{
            $(".menu-bg").removeClass("menu-fix");

        }
    });
});

// click arrow
$(".arrow").click(function(){
    $("body,html").animate({
        scrollTop:"0px",
    },1500);
});