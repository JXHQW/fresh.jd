<?php
$db = mysqli_connect("localhost","root","root","webregister");
$db = mysqli_connect("localhost","root","root","webregister");
print_r(111);
# 查询数据库中商品的总数量
$sql = "SELECT * FROM datalist";
$result = mysqli_query($db, $sql);
$ListCount = mysqli_num_rows($result);
// 一页可以容纳多少条
$count = 60;
// 页数 200
$pageCount = ceil($ListCount/$count);
$data = array("status"=>"success","msg"=>"获取成功","data"=>array("count"=> $pageCount));
echo json_encode($data, true);
?>