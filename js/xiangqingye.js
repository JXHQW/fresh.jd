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
    console.log(111);
    
    var magnifierConfig = {
        magnifier: ".preview-wrap", //最外层的大容器
        width: 400, //承载容器宽
        height: 400, //承载容器高
        moveWidth: null, //如果设置了移动盒子的宽度，则不计算缩放比例
        zoom: 10 //缩放比例
    };
    var _magnifier = magnifier(magnifierConfig);
})