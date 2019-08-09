<?php
$con = mysqli_connect("localhost","root","root","webregister");

$gid = $_REQUEST["gid"];

$sql = " DELETE FROM `cart` WHERE `gid` = '$gid'";

$result = mysqli_query($con, $sql);

echo $result;
?>