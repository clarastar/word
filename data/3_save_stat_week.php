<?php
header('Content-Type: application/json;charset=UTF-8');

$output = [];

$output[] = ['label'=>'周一','value'=>5];
$output[] = ['label'=>'周二','value'=>20];
$output[] = ['label'=>'周三','value'=>5];
$output[] = ['label'=>'周四','value'=>4];
$output[] = ['label'=>'周五','value'=>4];
$output[] = ['label'=>'周六','value'=>10];
$output[] = ['label'=>'周日','value'=>20];

echo json_encode($output);