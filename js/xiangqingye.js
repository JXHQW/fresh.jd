$(function(){
    $(".logo").click(()=>{
        window.open("http://localhost:8888/fresh.jd/fresh.jd/html/logo.html")
    });
    $(".register").click(()=>{
        window.open("http://localhost:8888/fresh.jd/fresh.jd/html/register.html")
    });

    $(".preview-wrap-imgmin").on("")
    $(".preview-wrap-imgmin-item").hover(function(){
        $(this).addClass("bordermin").siblings().removeClass("bordermin");
        let index = $(this).index();
        $($(".preview-wrap-item")[index]).removeClass("none").siblings().addClass("none");
        
    },function(){});
    $(".preview-wrap-item").mousemove(function(){
        // enlarge(this);
    });
    
})