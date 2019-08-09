$(function(){

    $.ajax({
        type: "post",
        url: "../cart/cart.php",
        // data:`index=${index}&src=${src}&title=${title}&price=${price}`,
        dataType: "json",
        success: function (response) {
            let html = response.data.map((item,idx)=>{
                return `
                        <div class="cart-item-list" data-gid=${item.gid}>
                            <!-- 单选框 -->
                            <div class="cart-item-check">
                                <input type="checkbox">
                            </div>
                            <!-- img title -->
                            <div class="cell p-goods">
                                <div class="p-img"><img src=${item.src} alt=""></div>
                                <div class="item-msg">
                                    <div class="p-name">${item.title}/</div>
                                </div>
                            </div>
                            <!-- 价格 -->
                            <div class="cell  p-price-new">
                                ￥<span class="p-price">${item.price}</span>
                            </div>
                            <!-- 数量 -->
                            <div class="cell p-quantity">
                                <div class="quantity-form">
                                    <div class="decrement">-</div>
                                    <input type="text" class="itxt-num" value="1">
                                    <div class="increment">+</div>
                                </div>
                            </div>
                            <!-- 价格 -->
                            <div class="cell p-sum">
                                ￥<span>26.80</span>
                            </div>
                            <div class="cart-remove">删除</div>
                        </div>
                    `;
            });
            $(".cart-list").append(html)
        }
    });

    // 全选状态
    $(".toggle-checkboxes_up").click(function(){
        if($(this).is(':checked'))
        {
            $(".cart-item-check input").attr("checked",true);
        }else{
            $(".cart-item-check input").attr("checked",false);
        }
    });
    function num() {
        $.ajax({
            type: "post",
            url: "../src/cart.php",
            data: `num=${num}`,
            dataType: "json",
            success: function(response) {
                console.log(response);
                
            }
        })
    }
    $(".cart-list").on("click",".increment",function(){
        let parent = $(this).parent();
        let num = parent.find("input").val();
        num++
        parent.find("input").val(num);
        num();
    });
})