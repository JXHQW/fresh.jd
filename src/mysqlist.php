<?php
# 先连接数据库
$con = mysqli_connect("localhost","root","root","dataBanner");
if (!$con) 
{ 
    die("连接错误: " . mysqli_connect_error()); 
} 
# 读取JSON文件的内容
$json = file_get_contents("idata3.json");
# 把JSON数据转换为数组
$data = json_decode($json,true);

# 把数据注入到数据中
for($i = 0;$i < count($data);$i++)
{
  $title = $data[$i]["title"];
  $src = $data[$i]["src"];
  $sale_price = $data[$i]["sale_price"];
  $active_type = $data[$i]["active_type"];
  $sql = "INSERT INTO `goods` (`title`, `src`, `original_price`, `sale_price`, `active_type`) VALUES ( '$title', '$src', '$original_price', '$sale_price', '$active_type')";
  mysqli_query($con,$sql);
}
?>