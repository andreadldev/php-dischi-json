<?php 
$disc_list = file_get_contents("dischi.json");
$disc_list = json_decode($disc_list, true);
var_dump($disc_list);
?>