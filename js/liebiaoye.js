$(function () {
    let orderType = 0;
    let getList = (page) => {
        $.ajax({
            type: "post",
            url: "../src/ceshi.php",
            data: `page=${page}&orderType=${orderType}`,
            dataType: "json",
            success: function(response) {
                console.log(response);
                // [2] 根据数据渲染页面
                var res = response.data.map((item,idx) => {
                    return `<li class="gl-item" data-index = ${idx}>
                                <div class="gl-i-wrap">
                                    <div class="p-img">
                                        <a href="#">
                                            <img src=${item.src} alt="">
                                        </a> 
                                    </div>
                                    <div class="p-price">￥${item.price}</div>
                                    <div class="p-name p-name-type-2">
                                        <span class="p-tag">${item.tag}</span>
                                        ${item.title}
                                    </div>
                    
                                    <div class="p-commit">
                                        <strong>
                                            <a class="J_comment" href="#">${item.commit}+</a>
                                            条评价
                                        </strong>
                                    </div>
                    
                                    <div class="p-shop">
                                        <span class="J_im_icon">
                                            <a class="curr-shop hd-shopname" href="#">${item.shop}</a>
                                        </span>
                                    </div>
                    
                                    <div class="p-icons">
                                        <i class="goods-icons J-picon-tips J-picon-fix">${item.icons}</i>
                                    </div>
                                    <div class="p-operate">
                                        <a href="javascript:void(0);" class="p-o-btn addcart">
                                            <i></i>
                                            加入购物车
                                        </a>
                                    </div>
                                </div>
                            </li>`
                    }).join(""); 
                    $(".gl-warp ").html(res);
            }
        });
    };
    getList(0);

    $.ajax({
            type: "post",
            url: "../src/list.php",
            dataType: "json",
            success: function (response) {
                console.log(response);
                let pageSize = response.data.count;
                var res = '';
                for(var i = 0; i<pageSize;i++){
                    $(".page").append(`<a href="javascript:;">${i + 1}</a>`);
                }
                $(".page").children("a").eq(0).addClass("active"); 
            }
    });

    $(".page").on("click","a",function(){
        var index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        getList(index);
    });
    // 排序
    $(".f-sort").on("click","a",function(){
        $(this).addClass("redbackground").siblings().removeClass("redbackground");
        let index = $(this).index();
        orderType = index;
        getList(0);
    });
    let num = 0;
    $(".gl-warp").on("click",".p-operate",function(){
        $(".gouwuchenum").html(num);
        let item = $(this).parent().parent();
        let index = item.attr("data-index");
        num++
        let src   = item.find(".p-img img")[0].src;
        let title = item.find(".p-name-type-2").text();
        let price = item.find(".p-price").text().slice(1) * 1;
        
        $.ajax({
            type: "post",
            url: "../cart/cart-list.php",
            data:`index=${index}&src=${src}&title=${title}&price=${price}`,
            // dataType: "json",
            success: function (response) {
                console.log(response);
            }
        });
    });
    $(".gl-warp").on("click",".p-img",function(){
       let index = $(this).parent().parent().data("index");
        Cookie.setItem("gid",index);
        window.open("http://localhost:8888/fresh.jd/fresh.jd/html/xiangqingye.html");
    })
});
