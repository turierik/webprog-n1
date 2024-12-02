<?php
    $filter = $_GET['filter'] ?? '';

    $pdo = new PDO('sqlite:database.sqlite');

    $q = $pdo -> prepare('SELECT * FROM dogs WHERE name LIKE :name');
    $q -> execute([ 'name' => '%'.$filter.'%']);
    $result = $q -> fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($result, JSON_PRETTY_PRINT);
?>