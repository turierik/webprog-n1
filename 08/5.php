<?php
    $errors = ['FelrobbantProcessorException', 'FalseIsEmptyString', 'UserOutOfMoneyException', 'FloatingPointError'];

    echo "<ul>";
    foreach($errors as $error){
        echo "<li>$error</li>";
    }
    echo "</ul>";
?>

Alternatívan:

<ul>
    <?php foreach($errors as $error): ?>
        <li><?= $error ?></li>
    <?php endforeach ?>
</ul>