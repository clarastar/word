<?php
header('Content-Type: application/json;charset=UTF-8');

$output = [];

$output[] = ['label'=>'1号','value'=>5];
$output[] = ['label'=>'2号','value'=>20];
$output[] = ['label'=>'3号','value'=>5];
$output[] = ['label'=>'4号','value'=>4];
$output[] = ['label'=>'5号','value'=>4];
$output[] = ['label'=>'6号','value'=>10];
$output[] = ['label'=>'7号','value'=>20];
$output[] = ['label'=>'8号','value'=>5];
$output[] = ['label'=>'9号','value'=>20];
$output[] = ['label'=>'10号','value'=>5];

$output[] = ['label'=>'11号','value'=>4];
$output[] = ['label'=>'12号','value'=>4];
$output[] = ['label'=>'13号','value'=>10];
$output[] = ['label'=>'14号','value'=>20];
$output[] = ['label'=>'15号','value'=>5];
$output[] = ['label'=>'16号','value'=>20];
$output[] = ['label'=>'17号','value'=>5];
$output[] = ['label'=>'18号','value'=>4];
$output[] = ['label'=>'19号','value'=>4];
$output[] = ['label'=>'20号','value'=>10];

$output[] = ['label'=>'21号','value'=>20];
$output[] = ['label'=>'22号','value'=>5];
$output[] = ['label'=>'23号','value'=>20];
$output[] = ['label'=>'24号','value'=>5];
$output[] = ['label'=>'25号','value'=>4];
$output[] = ['label'=>'26号','value'=>4];
$output[] = ['label'=>'27号','value'=>10];
$output[] = ['label'=>'28号','value'=>20];
$output[] = ['label'=>'29号','value'=>10];
$output[] = ['label'=>'30号','value'=>20];

echo json_encode($output);