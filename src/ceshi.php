<?php
$con = mysqli_connect("localhost","root","root","webregister");


$page = $_REQUEST["page"] * 60;

// $typeOrder = $_REQUEST["orderType"];

$sql = "SELECT * FROM `datalist` order by `gid` limit $page , 60";



$result = mysqli_query($con,$sql);

$data = array("status" => "success", "msg" => "23请求成功", "data" => mysqli_fetch_all($result, MYSQLI_ASSOC));
echo json_encode($data, true);
?>