<?php
    function fact($n){
        if ($n == 0 || $n == 1) return 1;
        return $n * fact($n - 1);
    }

    function fact_for($n){
        $res = 1;
        for ($i = 1; $i <= $n; $i++)
            $res *= $i;
        return $res;
    }

    echo fact(5) . " " . fact_for(5);
?>