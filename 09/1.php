<?php
    $x = intval($_GET['x'] ?? 0);
    $x2 = $x * $x;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="1.php" method="GET">
        <input type="number" name="x" value="<?= $x ?>">
        <button type="submit">Square me!</button>
    </form>
    <?php if ( isset($_GET['x']) ): ?>
        x négyzete: <?= $x2 ?>
    <?php endif; ?>
</body>
</html>