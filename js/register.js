$(function () {
    let boan1 = false;
    let boan2 = false;
    let boan3 = false;
    let boan4 = false;
    // 传输的数据
    let iphonetxt1 = "";
    let usernametxt1 = "";
    let passwodtxt1 = "";
    let elementtxt1 = "";
    // 手机输入框
    let iphone = $(".iphone2");
    // 验证按钮
    var iphoneBtn = $(".iphoneBtn");
    /* 1开头 第二位3-9 后面全都是数字   11位 */
    let regPhone = /^1[3-9]\d{9}$/;
    // 时间
    function formatterDateTime() {
        var date = new Date()
        var month = date.getMonth() + 1
        var datetime = date.getFullYear()
            + ""// "年"
            + (month >= 10 ? month : "0" + month)
            + ""// "月"
            + (date.getDate() < 10 ? "0" + date.getDate() : date
                .getDate())
            + ""
            + (date.getHours() < 10 ? "0" + date.getHours() : date
                .getHours())
            + ""
            + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date
                .getMinutes())
            + ""
            + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date
                .getSeconds());
        return datetime;
    }
    // 随机生成的验证码
    var numCode = parseInt(Math.random() * 10000)
    iphoneBtn.click(function () {
        var text = $.trim(iphone.val());
        if (text.length != 0 && regPhone.test(text)) {
            $(".green").css("display", "block");
            $(".red").css("display", "none")
            $(".codeText").css("display", "block");
            $(".iphoneBtn").css("display", "none");
            iphonetxt1 = text
            // 获取验证码按钮点击事件
            $(".receive").click(function () {
                if (text.length != 0 && regPhone.test(text)) {
                    console.log(numCode);

                    // 倒计时
                    var num = 60
                    var time = setInterval(function () {
                        num--
                        if (num <= 0) {
                            $(".receive").attr("value", "重新获取")
                            clearInterval(num)
                        } else {
                            $(".receive").attr("value", "重试" + num + "S")
                        }
                    }, 1000);
                    $.ajax({
                        type: 'post',
                        url: 'http://route.showapi.com/28-1',
                        dataType: 'json',
                        data: {
                            "showapi_timestamp": formatterDateTime(),
                            "showapi_appid": '101761', //这里需要改成自己的appid
                            "showapi_sign": '445029e00826466ca261fc81c8839cda',  //这里需要改成自己的应用的密钥secret
                            "mobile": text,
                            "content": `{"code":${numCode},"minute":"3","comName":"小猪养殖公司"}`,
                            // "content":"{\"name\":\"某某\",\"code\":\"123456\",\"minute\":\"3\",\"comName\":\"最牛公司\"}",
                            "tNum": "T150606060601",
                            "big_msg": ""
                        },
                        error: function (XmlHttpRequest, textStatus, errorThrown) {
                            alert("操作失败!");
                        },
                        success: function (result) {
                            // console.log(result) //console变量在ie低版本下不能用
                            // alert(result.showapi_res_code)
                        }
                    });
                } else {
                    alert("手机号码不正确")
                }
            });
        } else {
            $(".green").css("display", "none")
            $(".red").css("display", "block")
        }
    });
    let codeTextword = $('.codeTextword');
    $(".nextBtn").click(function () {
        var textCode = $.trim(codeTextword.val());
        if (textCode != numCode) {
            alert("验证码错误 请重新输入")
        } else {
            // 否则跳转到哪里
            $(".main").css("display","none");
            $(".main2").css("display","block")
        }
    });

    // 用户名
    let usernameText = $(".usernameText");
    let regUsername = /^[A-Za-z]{6,8}$/;
    // 设置密码
    let passwordText = $(".userPasswordtext");

    let regPassword = /^[a-zA-Z0-9]{6,16}$/;
    // 确认密码
    let password2Text = $(".userPassword2text");
    // 邮箱
    let useremailtext = $(".useremailtext");
    let regEmail = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    // 用户名失去聚焦事件
    usernameText.focus(function () {
        $(".usernamedef").css("display", "block");
    });
    passwordText.focus(function () {
        $(".userPassworddef").css("display", "block");
    });
    password2Text.focus(function () {
        $(".userPassword2def").css("display", "block");
    });
    useremailtext.focus(function () {
        $(".useremaildef").css("display", "block");
    });

    usernameText.blur(function (e) {
        var text = $.trim(usernameText.val());
        if (text.length != 0 && regUsername.test(text)) {
            $(".usernamedef").css("display", "block");
            $(".usernamedef").html("用户名格式正确");
            $(".usernamedef").addClass("gen").removeClass("red2");
            boan1 = true;
            usernametxt1 = text;
            
        } else if(text.length!=0){
            $(".usernamedef").html("用户名格式不通过");
            $(".usernamedef").addClass("red2").removeClass("gen");
            boan1 = false;
        }
    });
    passwordText.blur(function (e) {

        var text = $.trim(passwordText.val());

        if (text.length != 0 && regPassword.test(text)) {
            $(".userPassworddef").css("display", "block");
            $(".userPassworddef").html("密码格式正确");
            $(".userPassworddef").addClass("gen").removeClass("red2");
            boan2 = true;
            passwodtxt1 = text;
        } else if(text.length!=0){
            $(".userPassworddef").css("display", "block");
            $(".userPassworddef").html("请重新输入密码");
            $(".userPassworddef").addClass("red2");
            boan2 = false;
        }
    });
    // 确认密码
    password2Text.blur(function (e) {
        var text = $.trim(passwordText.val());

        var text2 = $.trim(password2Text.val());
        if (text2.length != 0 && text2 == text) {
            $(".userPassword2def").css("display", "block");
            $(".userPassword2def").html("两次密码一致");
            $(".userPassword2def").addClass("gen").removeClass("red2");
            boan3 = true;
        } else if(text2.length!=0){
            boan3 = false;
            $(".userPassword2def").css("display", "block");
            $(".userPassword2def").html("两次密码不一致,请重新输入密码");
            $(".userPassword2def").addClass("red2").removeClass("gen");;
        }
    });
    // 邮箱useremailtext
    useremailtext.blur(function (e) {
        var text = $.trim(useremailtext.val());
        if (text.length != 0 && regEmail.test(text)) {
            $(".useremaildef").css("display", "block");
            $(".useremaildef").html("邮箱通过");
            $(".useremaildef").addClass("gen").removeClass("red2");
            boan4 = true;
            elementtxt1 = text
        } else if(text.length!=0){
            $(".useremaildef").css("display", "block");
            $(".useremaildef").html("邮箱格式不正确，请查看后重新输入");
            $(".useremaildef").removeClass("gen").addClass("red2");
            boan4 = false;
        }
    });
    // 立即注册按钮
    let oBtn = $(".oBtn");
    oBtn.click(function(){
        console.log("何启维",elementtxt1);
        
        if(boan1 && boan2 && boan3 && boan4)
        {
            // console.log(elementtxt1,passwodtxt1,usernametxt1,iphonetxt1);
            
            $.ajax({
                type: "post",
                url: "../src/register.php",
                data:`username=${usernametxt1}&password=${passwodtxt1}&phone=${iphonetxt1}&element=${elementtxt1}`,
                success: function(response) {
                    console.log("213131231",response);
                }
            });
            
        }else{
            console.log("失败")
        }
    });    
   
})