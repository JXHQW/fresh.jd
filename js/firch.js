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
            $(".tab_head ").html(html);
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
            $(".tab_body").html(html);
            // 移入移出事件
            $(".tab_head").on("mouseenter", ".tab_head_item", function () {
                var index = $(this).index();
                $($(".tab_body_item")[index]).css("display", "block").siblings().css("display", "none");
            });
            $(".fresh_fs_nav_tab").mouseleave(function () {
                $(".tab_body_item").css("display", "none");
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

});