<?php


$con = mysqli_connect("localhost","root","root","webregister");

# 查询数据库中商品的总数量
$sql = "SELECT * FROM datalist";
$result = mysqli_query($con, $sql);
$ListCount = mysqli_num_rows($result);

# 计算页码值(总共有多少页)
$count = 60;
$pageCount = ceil($ListCount / $count);

# JSON数据返回
$data = array("status"=>"success","msg"=>"获取成功","data"=>array("count"=> $pageCount));
echo json_encode($data, true);

?>