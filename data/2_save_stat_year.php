<?php
header('Content-Type: application/json;charset=UTF-8');

$output = [];

$output[] = ['label'=>'8月','value'=>25];
$output[] = ['label'=>'9月','value'=>20];
$output[] = ['label'=>'10月','value'=>55];
$output[] = ['label'=>'11月','value'=>40];
$output[] = ['label'=>'12月','value'=>45];
$output[] = ['label'=>'1月','value'=>10];
$output[] = ['label'=>'2月','value'=>20];
$output[] = ['label'=>'3月','value'=>0];
$output[] = ['label'=>'4月','value'=>6];
$output[] = ['label'=>'5月','value'=>85];
$output[] = ['label'=>'6月','value'=>25];
$output[] = ['label'=>'7月','value'=>40];

echo json_encode($output);