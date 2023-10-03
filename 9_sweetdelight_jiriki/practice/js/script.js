$(function(){
    $("#toggle").on("click",function(){
        $(".toggle-list").fadeToggle();
    });

    var pagetop = $("#js-pagetop");
    pagetop.hide();
    $(window).scroll(function(){
        if($(this).scrollTop() > 500){
            pagetop.fadeIn();
        }else{
            pagetop.fadeOut();
        }
    });
    pagetop.click(function(){
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    $('ol li a').click(function(){
        var imgSrc= $(this).children().attr('src');
        $('.bigimg').children().attr('src',imgSrc);
        $('.modal').fadeIn();
        $('body,html').css('overflow-y','hidden');
        return false
    });

    $('body,html').click(function(){
        $('.modal').fadeOut();
        $('body,html').css('overflow-y','visible');
        return false
    });
});
