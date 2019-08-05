<?php
/* 接受前端提交的参数   用户名 & 密码 & 手机号码 & 邮箱*/
/* 检查用户名和手机号码是否被使用 如果被使用就返回错误信息 提醒用户*/
/* 如果满足注册的条件 那么就把当前的账户保存到数据库里面 */
// INSERT INTO `register` (`username`, `password`, `iphone`, `email`) VALUES ('wuyifan', '12341234', '13767898922', '2323@qq.com');
/* 先连接数据库  参数一*/
// echo "连接成功";
$db = mysqli_connect("localhost","root","root","webregister");

print_r($db);


$username = $_REQUEST["username"];
$password = $_REQUEST["password"];
$phone =  $_REQUEST["phone"];
$element =  $_REQUEST["element"];
// $sql = "INSERT INTO `register` (`$username`, `password`, `iphone`, `email`) VALUES ('wuyifan', '12341234', '13767898922', '2323@qq.com')";
// $result = mysqli_query($db,$sql);

$sql = "INSERT INTO `register` (`username`, `password`, `iphone`, `email`) VALUES ('$username', '$password', '$phone','$element')";
$result = mysqli_query($db, $sql);


/* 返回JSON数据给客户端 */
/* 规范：{"status":"success","msg":"注册成功","data":""} */
$data = array("status"=>"", "msg"=>"", "data"=>"");
if($result)
{
  $data["sta tus"] = "success";
  $data["msg"] = "恭喜你，注册成功！";
}else{
  $data["status"] = "error";
  $data["msg"] = "抱歉，用户名或者手机号码已经被注册了！";
}
echo json_encode($data,true);

?>