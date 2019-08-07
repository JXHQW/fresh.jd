$(function(){
    $(".preview-wrap-imgmin").on("")
    $(".preview-wrap-imgmin-item").hover(function(){
        $(this).addClass("bordermin").siblings().removeClass("bordermin");
        let index = $(this).index();
        $($(".preview-wrap-item")[index]).removeClass("none").siblings().addClass("none");
        
    },function(){})
    $(".preview-wrap-item").mousemove(function(){
        enlarge(this);
    });
    
})