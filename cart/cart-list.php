<?php
$con = mysqli_connect("localhost","root","root","webregister");

$index = $_REQUEST["index"];
$src   = $_REQUEST["src"];
$title   = $_REQUEST["title"];
$price   = $_REQUEST["price"];

// print_r($index ,$src  )
// $sql = "SELECT * FROM `datalist` WHERE `gid` = $index";
// $result = mysqli_query($con,$sql);
// $row = mysqli_num_rows($result);

$insetSql = "INSERT INTO `cart` (`cartid`, `gid`, `src`, `title`,`price`,`num`)
 VALUES (NULL, '$index', '$src', '$title','$price',1)";

$result = mysqli_query($con, $insetSql);
// $row = mysqli_num_rows($result);

?>