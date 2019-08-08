<?php
$con = mysqli_connect("localhost","root","root","webregister");

$page = $_REQUEST["page"] * 60;

$orderType = $_REQUEST["orderType"];

if($orderType == 0)
{
    $sql = "SELECT * FROM `datalist` order by `gid` limit $page , 60";
}else if($orderType == 1)
{
    $sql = "SELECT * FROM `datalist` ORDER BY `datalist`.`price` ASC limit $page , 60";
}else if($orderType == 2)
{
    $sql = "SELECT * FROM `datalist` ORDER BY `datalist`.`price` DESC limit $page , 60";
};
// $typeOrder = $_REQUEST["orderType"];
$result = mysqli_query($con,$sql);

$data = array("status" => "success", "msg" => "23请求成功", "data" => mysqli_fetch_all($result, MYSQLI_ASSOC));
echo json_encode($data, true);
?>