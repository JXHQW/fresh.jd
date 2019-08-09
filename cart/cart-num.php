<?php
$con = mysqli_connect("localhost","root","root","webregister");
$num = $_REQUEST["num"];
$gid = $_REQUEST["gid"];
$sql = "UPDATE `cart` SET `num` = '$num' WHERE `cart`.`gid` = $gid";

$result = mysqli_query($con, $sql);
echo $result;
// $data = array("status" => "success", "msg" => "23请求成功", "data" => mysqli_fetch_all($result, MYSQLI_ASSOC));
// // echo $data;
// echo json_encode($data, true);
?>