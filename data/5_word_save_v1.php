<?php
header('Content-Type: application/json;charset=UTF-8');
$conn = mysqli_connect('127.0.0.1', 'root', '', 'com', 3306);
$sql = "SET NAMES UTF8";
mysqli_query($conn,$sql);
$start = 0;	//从哪一行开始读取
$count = 10; //一次最多读取的行数
$sql = "SELECT * FROM com_word LIMIT $start,$count";
$result = mysqli_query($conn,$sql);

$output = [];
while(($p=mysqli_fetch_assoc($result))!==null){
	$output[] = $p;
}
echo json_encode($output);