<?php
$con = mysqli_connect("localhost","root","root","webregister");

$index = $_REQUEST["index"];
$src   = $_REQUEST["src"];
$title   = $_REQUEST["title"];
$price   = $_REQUEST["price"];


$insetSql = "INSERT INTO `cart` (`cartid`, `gid`, `src`, `title`,`price`,`num`)
 VALUES (NULL, '$index', '$src', '$title','$price',1)";

$result = mysqli_query($con, $insetSql);
?>