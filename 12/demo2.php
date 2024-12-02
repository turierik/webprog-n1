<?php
    $pdo = new PDO('sqlite:database.sqlite');

    $q = $pdo -> query('SELECT * FROM dogs');
    foreach ($q as $row){
        var_dump($row);
    }

    $q = $pdo -> prepare('SELECT * FROM dogs WHERE kgs > :w');
    $q -> execute(["w" => 0]);
    foreach ($q as $row){
        var_dump($row);
    }
?>