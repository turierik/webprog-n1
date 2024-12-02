<?php
    session_start();
    if (isset($_SESSION['user_id'])){
        header("location: index.php");
        exit();
    }
    $fail = false;
    if ($_POST){
        $user = $_POST['user'] ?? '';
        $users = json_decode(file_get_contents('users.json'), true);
        $matches = array_filter($users, fn($u) => $u['username'] == $user);
        if (count($matches) > 0){
            $keys = array_keys($matches);
            $firsthit = $matches[$keys[0]];
            $pass = $_POST['pass'] ?? '';
            if (password_verify($pass, $firsthit['password'])){
                // do login
                $_SESSION['user_id'] = $keys[0];
                header("location: index.php");
                exit();
            } else $fail = true;
        } else $fail = true;
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>
    <?php if ($fail): ?>
        <span style="color: red; font-size: 2em;">LOGIN FAILED BRUH!</span>
    <?php endif; ?>
    <form action="login.php" method="POST">
        Username: <input type="text" name="user"><br>
        Password: <input type="password" name="pass"><br>
        <button type="submit">Login</button>
    </form>
</body>
</html>