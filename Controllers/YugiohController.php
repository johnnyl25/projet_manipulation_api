<?php

require('Models/Yugioh.php');


if(isset($_GET['url'])) {
    $url = $_GET['url'];
}

require('Views/YugiohView.php');