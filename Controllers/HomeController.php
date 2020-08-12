<?php

require('Models/Home.php');


if(isset($_GET['url'])) {
    $url = $_GET['url'];
}

require('Views/HomeView.php');