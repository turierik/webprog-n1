<?php
    // Három number input: a, b, c
    // ax^2 + bx + c = 0 megoldásait add meg :)

    if ($_GET){
        $a = floatval($_GET['a'] ?? 0);
        $b = floatval($_GET['b'] ?? 0);
        $c = floatval($_GET['c'] ?? 0);

        $d = $b*$b - 4*$a*$c;
        if ($d >= 0){
            $x1 = (-$b + sqrt($d)) / (2*$a);
            $x2 = (-$b - sqrt($d)) / (2*$a);
        } else {
            $x1 = -$b/(2*$a) . ' + ' . sqrt(-$d) / (2*$a) . 'i';
            $x2 = -$b/(2*$a) . ' - ' . sqrt(-$d) / (2*$a) . 'i';
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
    <form action="2.php" method="GET">
        a = <input type="number" name="a"><br>
        b = <input type="number" name="b"><br>
        c = <input type="number" name="c"><br>
        <button type="submit">Solve me!</button>
    </form>
    <?php if ($_GET) : ?>
    x<sub>1</sub> = <?= $x1 ?><br>
    x<sub>2</sub> = <?= $x2 ?>
    <?php endif; ?>
</body>
</html>