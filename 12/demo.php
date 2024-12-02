<?php
    session_start();
    if (!isset($_SESSION['counter']))
        $_SESSION['counter'] = 0;
    $_SESSION['counter']++;
    echo $_SESSION['counter'];
    echo "<br>";
    echo password_hash("almafa123", PASSWORD_DEFAULT);
?>