<?php
    // 1. beolvasni a cuccokat
    $full_name = $_POST['full_name'] ?? '';
    $email = $_POST['email'] ?? '';
    $taj = $_POST['taj'] ?? '';
    $children = $_POST['children'] ?? '';
    $tos = filter_var($_POST['tos'] ?? false, FILTER_VALIDATE_BOOLEAN);

    // 2. hibakeresés
    $errors = [];
    if ($_POST){
        if ( $full_name === '' ){
            $errors['full_name'] = 'A nevet meg kell adni!';
        } else if ( count(explode(' ', $full_name)) < 2 ) {
            $errors['full_name'] = 'Legalább két szó kell!';
        }

        if ( $email === ''){
            $errors['email'] = 'Az e-mailt meg kell adni!';
        } else if ( !filter_var($email, FILTER_VALIDATE_EMAIL) ){
            $errors['email'] = 'Az e-mail nem valid!';
        }

        if ($taj === ''){
            $errors['taj'] = 'A TAJ-t meg kell adni!';
        } else if (  strlen($taj) !== 9 ){
            $errors['taj'] = 'A TAJ hossza 9 legyen!';
        } else if ( count(array_filter(str_split($taj), fn($x) => $x >= '0' && $x <= '9')) !== 9 ){
            $errors['taj'] = 'A TAJ szám 9 számjegy legyen!';
        }

        if ($children === ''){
            $errors['children'] = 'A gyerekek számát meg kell adni!';
        } else if ( filter_var($children, FILTER_VALIDATE_INT) === false ){
            $errors['children'] = 'A gyerekek száma egész kell legyen!';
        } else if (intval($children) < 0){
            $errors['children'] = 'A gyerekek száma nemnegatív kell legyen!';
        }

        if (!$tos){
            $errors['tos'] = 'El kell fogadni a ToS-t!';
        }
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="3.php" method="POST">
        Teljes név: <input type="text" name="full_name" value="<?= $full_name ?>"> <!-- legalább 2 szóból álljon -->
        <?= $errors['full_name'] ?? '' ?><br>
        
        E-mail: <input type="text" name="email" value="<?= $email ?>"> <!-- formailag valid email - filter_var -->
        <?= $errors['email'] ?? '' ?><br>

        TAJ szám: <input type="text" name="taj" value="<?= $taj ?>"> <!-- 9 számjegy, 0-9 -->
        <?= $errors['taj'] ?? '' ?><br>

        Gyerekek száma: <input type="text" name="children" value="<?= $children ?>"> <!-- egész szám, nemnegatív -->
        <?= $errors['children'] ?? '' ?><br>

        Elfogadom a ToS-t: <input type="checkbox" name="tos" <?= $tos ? 'checked' : '' ?>> <!-- be kell jelölni -->
        <?= $errors['tos'] ?? '' ?><br>

        <button type="submit">Küldés</button>
    </form>
    <?php if ($_POST && count($errors) === 0): ?>
        <b>YAY, JÓL TÖLTÖTTED KI!</b>
    <?php endif; ?>
</body>
</html>