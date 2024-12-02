<?php
    session_start();
    if (!isset($_SESSION['user_id'])){
        header("location: login.php");
        exit();
    }
    $users = json_decode(file_get_contents('users.json'), true);
    $user = $users[$_SESSION['user_id']];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Index</title>
</head>
<body>
    <h1>Szia, <?= $user['username']?>!
    <a href="logout.php">Kijelentkezés</a>
</body>
</html>