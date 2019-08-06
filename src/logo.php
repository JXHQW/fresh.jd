<?php

// 连接数据库
$db = mysqli_connect("localhost","root","root","webregister");
// 接受用户名
$username = $_REQUEST["username"];
// 接受密码
$password  = $_REQUEST["password"];

$sql = "SELECT * FROM register WHERE username = '$username'";
// 执行登录语句
$result = mysqli_query($db,$sql);

$data = array("status" => "", "msg" => "", "data" => "");
if(mysqli_num_rows($result) == "0")
{
  $data["status"] = "error";
  $data["msg"] = "登录失败：该用户不存在";
}else{
    /* 检查密码是否正确 */
    if(mysqli_fetch_array($result)["password"] != $password)
    {
      $data["status"] = "error";
      $data["msg"] = "登录失败：密码不正确！";
      echo "登录失败密码错误不存在";
    }else{
      $data["status"] = "success";
      $data["msg"] = "恭喜你，登录成功！";
      echo "恭喜你终于登录成功了";
    }
  };
//   echo json_encode($data, true);
?>