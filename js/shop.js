$(function(){

   
    new Promise(function(resolve,reject){
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
                                        <input type="text" class="itxt-num" value=${item.num}>
                                        <div class="increment">+</div>
                                    </div>
                                </div>
                                <!-- 价格 -->
                                <div class="cell p-sum">
                                    ￥<span>${item.price * item.num}</span>
                                </div>
                                <div class="cart-remove">删除</div>
                            </div>
                        `;
                });
                $(".cart-list").append(html);
                resolve();
            }
        });

    }).then(function(){
        let price = 0;
        let num = 0;
        $(".cart-item-check input").click(function(){
            if($(this).is(':checked')){
                
                price += $(this).parent().siblings(".p-sum").children("span").text() *1;
                num ++;
            }if(!$(this).is(':checked'))
            {
                num--
                price -=$(this).parent().siblings(".p-sum").children("span").text() *1;
            }
            $(".totalPrice span").text(price);
            $(".foot-lf span").text(num);
        });
        num = 0
    })





    // 全选状态
    $(".toggle-checkboxes_up").click(function(){
        let nums = 0;
        let num = 0;
        if($(this).is(':checked'))
        {
            $(".cart-item-check input").attr("checked",true);
            for(var i = 0; i< $(".cart-item-list .p-sum span").length;i++)
            {
                nums+=$($(".cart-item-list .p-sum span")[i]).text()*1;
            }
            $(".totalPrice span").text(nums);
            $(".foot-lf span").text($(".cart-item-list .p-sum span").length);
        }else if(!$(this).is(':checked')){
            $(".cart-item-check input").attr("checked",false);
            $(".totalPrice span").text(0);
            $(".foot-lf span").text(0);
        };

    });

    // item勾选点击事件
    $(".cart-list").on("click",".cart-item-check input",function(){
        if($(this).is(':checked'))
        {

        }
    });

    
    // 数量改变
    let numChange = function(num,gid){
        $.ajax({
            type: "post",
            url: "../cart/cart-num.php",
            data: `num=${num}&gid=${gid}`,
            dataType: "json",
            success: function(response) {

            }
        })
    }
    // 数量++
    $(".cart-list").on("click",".increment",function(){
        // this的父标签
        let parent = $(this).parent();
        // 点击的那整个li
        let listitem = parent.parent().parent();
        // 传给后台的gid
        let gid    =  listitem.attr("data-gid")
        // 获取数量输入框里的值
        let num = parent.find("input").val();
        // 每次++
        num++
        // 修改input.value
        parent.find("input").val(num);
        // 调用方法发送网络请求
        numChange(num,gid);

        priceChange(listitem,num);
    });

// 数量--
$(".cart-list").on("click",".decrement",function(){
    let parent = $(this).parent();
    let listitem = parent.parent().parent();
    let gid    =  listitem.attr("data-gid")
    let num = parent.find("input").val();
    num--  ;

    parent.find("input").val(num);

    numChange(num,gid);
    priceChange(listitem,num);

});

let priceChange = function(listitem,num){
    let text = listitem.find(".p-price-new span").text();
    let price = num *text;
    listitem.find(".p-sum span").text(price);
};
// 删除功能
$(".cart-list").on("click",".cart-remove",function(){
    let listitem = $(this).parent();
    let gid = listitem.attr("data-gid");

    $.ajax({
        type: "post",
        url: "../cart/cart-remove.php",
        data: `gid=${gid}`,
        dataType: "json",
        success: function(response) {
            console.log(response);
        }
    });
    listitem.remove();
});

})