$(function(){
    $.ajax({
        type: "post",
        url: "../src/liebiaoye.json",
        dataType: "json",
        success(text) {
            let html = text.map((item)=>{
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
                                <span class="skcolor_ljg">${item.ljg}</span>
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
            });
            $(".gl-warp ").append(html);
        }
    });
})