$(function(){
let btn = $(".logo-btn");
let username = "";
let password = ""
btn.click(function(){
let pasword = $(".pasword .usertxt").val();
let name = $(".name .usertxt").val();
username = name;
password = pasword;
$.ajax({
    type: "post",
    url: "../src/logo.php",
    data:`username=${username}&password=${password}`,
    success: function(response) {
        if(response == "恭喜你，登录成功！")
        {
            // 跳转到首页
            window.location.href = "http://localhost:8888/fresh.jd/fresh.jd/firsh.html"
        }else{
            $(".msg-err").css("display","block")
        }
    }
});
});
});