$(function () {

    $($(".settleup")[1]).hover(() => {
        $(".headerqrcode_qc").stop().fadeIn();
    }, () => {
        $(".headerqrcode_qc").stop().fadeOut();
    })
    $(".active2").hover(function () {
        $(this).css({ "color": "#00c65d" });
    }, function () {
        $(this).css({ "color": "#222" });
    });
    $.ajax({
        type: "post",
        url: "./src/fenlei.json",
        dataType: "json",
        success(text) {
            let html = text.map((item, idx) => {
                var html3 = item.name.map((item, idx) => {
                    return ` <a class="item_children_item first" href="#">${item}</a>`
                }).join("");
                // 拿到数据里的li数组
                return `<div class="tab_head_item">
                                    <div class="tab_head_item_inner item${idx + 1}">
                                        <i class="item_icon"></i>
                                        <a class="item_title">
                                            ${item.title}
                                        </a>
                                        <div class="item_children">
                                            ${html3}
                                        </div>
                                    </div>
                                </div>`
            });
            $(".fresh_fs_nav_tab .tab_head ").html(html);
        }
    });
    $.ajax({
        type: "post",
        url: "./src/data1.json",
        dataType: "json",
        success(text) {
            let html = text.map((item, idx) => {

                let html2 = text[idx].map((item, se) => {
                    let html3 = item.name.map((item2, idx) => {
                        return `<a class="cate_con_lk" href="#">${item2}</a>`
                    }).join(" ");
                    return `<dl class="cate_item item1">
                                <dt class="cate_tit">
                                    <a class="cate_tit_lk" href="">
                                        ${item.title}
                                        <i class="cate_tit_arrow"> > </i>
                                    </a>
                                </dt>
                                <dd class="cate_con">
                                    ${html3}
                                </dd>
                            </dl>`
                }).join("");
                return `<div class="tab_body_item">
                            <div class="fresh_fs_nav_cate cate">
                                ${html2}
                            </div>
                        </div>`
            }).join("");
            $(".fresh_fs_nav .fresh_fs_nav_tab .tab_body").html(html);
            // 移入移出事件
            $(".tab_head").on("mouseenter", ".tab_head_item", function () {
                var index = $(this).index();
                $($(".fresh_fs_nav .fresh_fs_nav_tab .tab_body .tab_body_item")[index]).css("display", "block").siblings().css("display", "none");
            });
            $(".fresh_fs_nav_tab").mouseleave(function () {
                $(".fresh_fs_nav .fresh_fs_nav_tab .tab_body .tab_body_item").css("display", "none");
            });
        }
    });
    /* 轮播图 */

    $.ajax({
        type: "post",
        url: "./src/banner.json",
        dataType: "json",
        success(text) {
            let html = text.map((item, idx) => {
                return ` <li class="bannerList"> <img src=${item} alt=""></li>`
            }).join("");
            $(".banner").html(html);
            /* 轮播图 */
            let banner = $(".banner");
            let bannerList = $(".banner").children();
            let width = bannerList.width();
            let num = 0;
            //  下一张
            function next() {
                num++
                if (num >= bannerList.length) {
                    banner.stop().animate({ left: -width * num }, 100);
                    banner.css({ "left": "0px" });
                    num = 1;
                }
                for (let i = 0; i < bannerList.length; i++) {
                    banner.stop().animate({ left: - width * num }, 200);
                }
            };
            // 上一张
            function prevs() {
                num--
                if (num < 0) {
                    // banner.stop().animate({ right: -width * num }, 100);
                    banner.css("left", -((bannerList.length - 1) * width) + "px");
                    num = bannerList.length - 2;
                }

                banner.animate({ left: - (width * num) }, 200)
            }
            let bannerTime = setInterval(() => {
                next();
            }, 2000);
            $(".banner_lef").click(() => {
                clearInterval(bannerTime);
                next();
            })
            $(".banner_right").click(() => {
                clearInterval(bannerTime);
                prevs();
            });
            $(".banner").mouseenter(() => {
                clearInterval(bannerTime);
            });
        }
    });
    // main右侧
    var arr = ["精挑细选100分营养美味", "0元试吃 全新上线 抓紧尝鲜", "一键立享 用心做顿好饭"]
    let as = arr.map((item) => {
        return ` <a class="fresh_fs_toutiao_item" href="#">${item}</a>`
    });
    $(".fresh_fs_toutiao_list").html(as);
// 食品安全
    $.ajax({
        type: "post",
        url: "./src/main_bottom.json",
        dataType: "json",
        success(text) {
            let html = text.map((item, idx) => {
                return `<li class="mod_service_item item1">
                            <i class="mod_iconfont "><img src=${item.src} alt=""></i>
                            <div class="mod_service_inner">
                                <p class="mod_service_title">${item.title}</p>
                                <span class="mod_service_desc">${item.name}</span>
                            </div>
                        </li>`
            });
            $(".mod_service").append(html);
        }
    });
    // 特色购请求
    $.ajax({
        type: "post",
        url: "./src/tesegouList.json",
        dataType: "json",
        success(text) {

            let html = text.map((item, idx) => {
                
                return `<div class="goods_item">
                            <div class="goods_item_pic">
                                <img class="goods_item_img" src=${item.src} alt="">
                            </div>
                            <div class="goods_item_priceg">
                                <p class="goods_item_price">${item.price}</p>
                                <p class="goods_item_g">${item.weight}</p>
                            </div>
                            <div class="goods_item_info .clear">
                                <p class="goods_item_promote">${item.title}</p>
                                <div class="goods_item_line"></div>
                                <p class="goods_item_name">${item.name}</p>
                                <p class="goods_item_desc"></p>
                            </div>
                        </div>`
            }).join("");
            $(".fresh_top100_goods").html(html);
        }
    });
    // 特色购更多优选List
    $.ajax({
        type: "post",
        url: "./src/tesegouListgengduo.json",
        dataType: "json",
        success(text) {
            let html = text[0].map((item, idx) => {
                return `<li class="goods_item">
                            <a class="goods_item_link" href="#">
                                <img class="goods_item_img" src=${item.src} alt="">
                                <div class="goods_item_info">
                                    <p class="goods_item_name">${item.title}</p>
                                    <p class="goods_item_desc">${item.name}</p>
                                    <p class="goods_item_seebtn">去看看 > </p>
                                </div>
                            </a>
                        </li>`
            });
            $(".fresh_unique_dong .fresh_dong_goods").append(html);
        }
    });
    // 0元试吃
    $.ajax({
        type: "post",
        url: "./src/tesegouListgengduo.json",
        dataType: "json",
        success(text) {
            let html = text[1].map((item, idx) => {
                return `<div class="fresh_trial_head">
                            <h4 class="fresh_trial_head_title icon-fresh_unique_trial_icon">${item.title2}
                                <p class="fresh_mod_iconfont"><img src="./img/free.png" alt=""></p>
                            </h4>
                            <a class="fresh_unique_btn" href="">
                                ${item.name}
                                <i>></i>
                            </a>
                        </div>
                        <div class="fresh_trial_goods">
                            <a class="goods_item" href="">
                                <div class="goods_item_info">
                                    <p class="goods_item_name">${item.title}</p>
                                    <p class="goods_item_data">${item.item1} <em> ${item.item2} </em>${item.item3}</p>
                                    <p class="goods_item_data">${item.ele1}<em> ${item.ele2} </em>${item.ele3}</p>
                                    <p class="goods_item_btn">立即报名 ></p>
                                </div>
                                <div class="goods_item_pic">
                                    <img class="goods_item_img" src=${item.src} alt="">
                                </div>
                            </a>
                        </div>`
            });
            $(".fresh_unique_trial").append(html);
        }
    });
    // 新品特惠
    $.ajax({
        type: "post",
        url: "./src/tesegouListgengduo.json",
        dataType: "json",
        success(text) {
            let html = text[2].map((item, idx) => {
                let html2 = item.src.map((item,idx)=>{
                    return `<div class="goods_item">
                            <p class="goods_item_tag">新鲜上市</p>
                            <img class="goods_item_img" src=${item} alt="">
                        </div>`
                }).join("");
                
                return `
                            <a class="fresh_new_text" href="#">
                                <p class="fresh_new_text_name">${item.title}</p>
                                <p class="fresh_new_text_desc">${item.name}</p>
                                <p class="fresh_new_text_btn">${item.more} </p>
                            </a>
                            <a class="fresh_new_goods goods clear" href="">
                                ${html2}
                            </a>
                       `
            });
            $(".fresh_new_body").append(html); 
        }
    });
    // 身临食感 title
    $.ajax({
        type: "post",
        url: "./src/tesegouListgengduo.json",
        dataType: "json",
        success(text) {
            let html = text[3].map((item, idx) => {
                let html2 = item.title.map((item)=>{
                    return `<div class="tab_head_item">
                                    ${item}
                            </div>`
                })
                $(".fresh_slim_body .fresh_slim_tab .tab_head").append(html2);
            });
            $(".fresh_slim_body .fresh_slim_tab").append(html);    
            // 点击效果 + 排他
             $(".tab_head").on("click",".tab_head_item",function(){
                $(this).addClass("active").siblings().removeClass("active");
             })
        }
    });
    // 身临食惠 商品list
    $.ajax({
        type: "post",
        url: "./src/idata3.json",
        dataType: "json",
        success(text) {
            let html = text.map((item,idx)=>{
                let html2 = item.map((self)=>{
                    return`<li class="slider_item goods_item">
                            <div class="goods_item_inner">
                                <a class="goods_item_link" href="#">
                                    <img class="goods_item_img" src=${self.src} alt="">
                                    <p class="goods_item_name">${self.title}</p>
                                </a>
                                <div class="goods_item_row">
                                    <p class="goods_item_price">
                                            ￥${self.sale_price}
                                    </p>
                                <p class="goods_item_good">
                                    ${self.active_type}
                                </p>
                                </div>
                            </div>
                        </li>`
                });
                return`
                        <div class="tab_body_item">
                        <a class="fresh_slim_theme nolink" href="#">
                            <p class="fresh_slim_theme_title">精美礼品</p>
                            <p class="fresh_slim_theme_border"></p>
                            <div class="fresh_slim_theme_desc">啊啊啊啊啊</div>
                            <img class="fresh_slim_theme_img" src="./img/599e7853N7bbe1ce0.png" alt="">
                        </a>
                            <div class="slider fresh_slim_goods">
                                <div class="slider_list">
                                    <ul class="slider_wrapper clear">
                                        ${html2}
                                    </ul>
                                </div>
                            </div>`
            });
            $(".tab_body").append(html);
        }
    });

    // $.ajax({
    //     type: "post",
    //     url: "./src/title.json",
    //     dataType: "json",
    //     success(text) {
    //         let html = text.map((item, idx) => {
    //             return ` <a class="fresh_slim_theme nolink" href="#">
    //                         <p class="fresh_slim_theme_title">${item.title2}</p>
    //                         <p class="fresh_slim_theme_border"></p>
    //                         <div class="fresh_slim_theme_desc">${item.desc}</div>
    //                         <img class="fresh_slim_theme_img" src="./img/599e7853N7bbe1ce0.png" alt="">
    //                     </a>`
    //         });
    //         $(".tab_body_item").prepend(html);
    //     }
    // });
});