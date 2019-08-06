<?php
// 连接数据库
echo 111;
$db = mysqli_connect("localhost","root","root","webregister");
// 读取json数据内容
$json = file_get_contents("liebiaoye.json");
// 转为json数据
$data = json_decode($json,true);

for($i=0; $i < count($data);$i++){
    $commit = $data[$i]["commit"];
    $src = $data[$i]["src"];
    $price = $data[$i]["price"];
    $tag = $data[$i]["tag"];
    $ljg = $data[$i]["ljg"];
    $title = $data[$i]["title"];
    $shop = $data[$i]["shop"];
    $icons = $data[$i]["icons"];
    $sql = "INSERT INTO `datalist` (`commit`, `src`, `price`, `tag`, `ljg`, `title`, `shop`, `icons`, `gid`) VALUES ('$commit ', '$src', '$price', '$tag', '$ljg ', '$title', '$shop', '$icons', '$i')";
    mysqli_query($db,$sql);
};
?>