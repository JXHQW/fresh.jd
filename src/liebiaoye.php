<?php
// 连接数据库
$con = mysqli_connect("localhost","root","root","webregister");
// 读取json数据内容
# 读取JSON文件的内容
$json = file_get_contents("liebiaoye.json");
# 把JSON数据转换为数组
$data = json_decode($json,true);


# 把数据注入到数据中orderType
for($i = 0;$i < count($data);$i++)
{
  $commit = $data[$i]["commit"];
  $src = $data[$i]["src"];
  $price = $data[$i]["price"];
  $tag = $data[$i]["tag"];
  $ljg = $data[$i]["ljg"];
  $title = $data[$i]["title"];
  $shop = $data[$i]["shop"];
  $icons = $data[$i]["icons"];
  $sql = "INSERT INTO `datalist` (`gid`, `commit`, `src`, `price`, `tag`, `ljg`, `title`, `shop`, `icons`) VALUES ('$i', '$commit', '$src', '$price', '$tag', '$ljg', '$title', '$shop', '$icons')";
  echo $sql;
  mysqli_query($con,$sql);
};
?>