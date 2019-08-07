$(function () {
    
    let getList = () => {
        $.ajax({
            type: "post",
            url: "../src/ceshi.php",
            data: "page=0",
            dataType: "json",
            success: function(response) {
                console.log(response);
                // [2] 根据数据渲染页面
                var res = response.data.map(item => {
                    return `<li class="gl-item">
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
                                        <a href="#" class="p-o-btn addcart">
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
    getList();



    $.ajax({
            type: "post",
            url: "../src/list.php",
            dataType: "json",
            success: function (response) {
                // console.log(response);
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
    })



});
