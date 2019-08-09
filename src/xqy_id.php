<?php
$con = mysqli_connect("localhost","root","root","webregister");
$gid = $_REQUEST["gid"];
// 查询数据库gid为gid的数据
$sql = "SELECT * FROM datalist WHERE gid = '$gid'";
// 执行
$result = mysqli_query($con, $sql);
$data = mysqli_fetch_all($result,MYSQLI_ASSOC);

echo json_encode($data, true);
?>