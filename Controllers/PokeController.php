<?php

require('Models/Poke.php');


if(isset($_GET['url'])) {
    $url = $_GET['url'];
}

require('Views/PokeView.php');