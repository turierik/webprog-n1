<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Szia</h1>
    <?php
        $x = [1, 3, 5];
        print $x;
        print($x);
        echo $x;
        echo($x);
        print_r($x);

        for($i = 0; $i < count($x); $i++){
            echo $x[$i] . ", ";
        }

        foreach($x as $elem){
            echo $elem . ", ";
        }
        echo "<br>";
        echo implode(", ", $x);

        $car = [
            "model"  =>  "Opel",
            "year"   => 2018,
            "broken" => true
        ];
        print_r($car);

        echo "True = " . true;
        echo " False = " . false;

        $bool = true;
        echo $bool ? "true" : "false";

        $y = [2, 3, 6];
        $y[] = 7;
        print_r($y);

        $t = [-3, 1, 50, 12, 0, 9, -4, 7];
        $filtered = array_filter($t, fn($x) => $x % 2 === 0);
        echo "<br> Filtered:";
        print_r($filtered);
        echo "Count: " . count($filtered);

        $squared = array_map(fn($x) => $x * $x, $t);
        print_r($squared);

        echo "<h2>Filtered v2</h2>";

        $filtered2 = array_filter($t, function($x) use ($zero) {
            return $x % 2 === $zero;
        });
        print_r($filtered2);

        function is_even($n) {
            return $n % 2 === 0;
        }
        $filtered3 = array_filter($t, "is_even");
        print_r($filtered3);

        $vmi = 12;
        echo "font-size: {$vmi}pt";
        echo 'font-size: {$vmi}pt';

    ?>
</body>
</html>