<?php 
$disc_list = file_get_contents("dischi.json");
$disc_list = json_decode($disc_list, true);

$json_string = json_encode($disc_list);
header("Content-Type: application/json");
echo $json_string;
?>