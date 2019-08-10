$(function () {
    let gid = Cookie.getItem("gid");
    $.ajax({
        type: "post",
        url: "../src/xqy_id.php",
        data:`gid=${gid}`,
        dataType: "json",
        success: function (response) {
           let html = response.map((item)=>{
               return ` <!-- 图片left -->
               <div class="preview-wrap clear ">
                       <div class="move-view "></div>
                   <div class="preview-wrap-img">
                       <div class="preview-wrap-item"><img src=${item.src} alt=""></div>
                   </div>
                   <div class="preview-wrap-imgmin">
                       <div class="preview-wrap-imgmin-item bordermin">
                       <img src=${item.src} alt=""></div>
                   </div>
               </div>
               <!-- you -->
               <div class="czrq magnifier-view"></div>
               
               <div class="itemInfo-wrap clear">
                   <div class="sku-name">
                       <div><a href="#">${item.tag}</a></div>
                       ${item.title}
                   </div>
   
                   <div class="news">
                       8月尖货，清凉钜惠
                       <a href="#">精品食材，满减满折，爆款直降</a>
                   </div>
   
                   <div class="summary summary-first">
                       <div class="summary-price J-summary-price">
                           <div class="jdj">京 东 价</div>
                           <div class="jdj_price">￥${item.price} <a href="#">降价通知</a></div>
   
                       </div>
                       <div class="summary1">
                           <div class="cx jdj">促&nbsp;&nbsp;&nbsp; 销</div>
                           <div class="summary1-item">
                               <div class="item-border">跨自营/店铺满折</div>
                               <div class="item-hl">满2件，总价打7.70折 详情 >></div>
                           </div>
                       </div>
                       <div class="summary1">
                           <div class="cx jdj"></div>
                           <div class="summary1-item">
                               <div class="item-border">满减</div>
                               <div class="item-hl">49元选5件，每个商品最多购买5件 详情 >></div>
                           </div>
                       </div>
                       <div class="pickOneTip">
                           <div class="sprite-tips"></div> “跨自营/店铺满折” “满减” 仅可在购物车任选其一</div>
                   </div>
                   <div class="summary-botm clear">
                       <div class="summary-stock clear">
                           <div class="summary-stock-left">配送至</div>
                           <div class="summary-stock-right">
                               <ul>
                                   <li>有货</li>
                                   <li>支持</li>
                                   <li>京准送</li>
                                   <li>211限时达</li>
                                   <li>自提</li>
                               </ul>
                           </div>
                       </div>
                       <div class="summary-stock2">由 <span>京东</span>  发货, 并提供售后服务. 23:10前下单，预计明天(08月08日)送达</div>
                       <div class="summary-stock3"><div class="jdj">重 &nbsp; 量</div> <div class="kg">0.3kg</div></div>
                       <div class="summary-stock4"></div>
                       <div class="choose-amount ">
                           <input type="text" class="text buy-num" value="1">
                           <a href="javascript:;" class="btn-reduce disabled">-</a>
                           <a href="javascript:;" class="btn-add">+</a>
                       </div>
                       <div class="InitCartUrl">加入购物车</div>
                   </div>
               </div>`
           })
           $(".main").html(html);
        }
    });




    $(".logo").click(() => {
        window.open("http://localhost:8888/fresh.jd/fresh.jd/html/logo.html")
    });
    $(".register").click(() => {
        window.open("http://localhost:8888/fresh.jd/fresh.jd/html/register.html")
    });

    $(".preview-wrap-imgmin").on("")
    $(".preview-wrap-imgmin-item").hover(function () {
        $(this).addClass("bordermin").siblings().removeClass("bordermin");
        let index = $(this).index();
        $($(".preview-wrap-item")[index]).removeClass("none").siblings().addClass("none");
    }, function () { });

})