<?php
$con = mysqli_connect("localhost","root","root","webregister");
$sql = "SELECT * FROM `cart`";
$result = mysqli_query($con, $sql);
// echo $result;
$data = array("status" => "success", "msg" => "23请求成功", "data" => mysqli_fetch_all($result, MYSQLI_ASSOC));
echo json_encode($data, true);

?>