<?php
// 连接数据库
$db = mysqli_connect("localhost","root","root","webregister");
// 读取json数据内容
$json = file_get_contents("liebiaoye.json");
// 
$data = json_decode($json,true);
for($i=0;$i < count($data);$i++){

}
$sql = "INSERT INTO `datalist` (`commit`, `src`, `price`, `tag`, `ljg`, `title`, `shop`, `icons`) VALUES ('1', '1', '1', '1', '1', '1', '1', '1')";
print_r($data)
?>