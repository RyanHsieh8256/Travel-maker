<?php
	$dbname = "g3";
	$user = "g3-1";
	$password = "cfd104_g3@hihi";
    $host = "cfd104g5.asuscomm.com";
    $dsn = "mysql:host=$host;port=3306;dbname=$dbname;charset=utf8";

	$options = array(PDO::ATTR_ERRMODE =>PDO::ERRMODE_EXCEPTION, PDO::ATTR_CASE =>PDO::CASE_NATURAL);
	
	//建立pdo物件
	$pdo = new PDO($dsn, $user, $password, $options);

    try{
        $sql = "select * from ticketspot";
        $ticketspot = $pdo->prepare($sql);
        $ticketspot->execute();


        if($ticketspot->rowCount() == 0){
            echo "not found";
        }else{
            $memRow = $ticketspot->fetchAll(PDO::FETCH_ASSOC);

            echo json_encode($memRow);

        };

    }catch(PDOExcaption $e){
        echo $e->getMessage();
    };

?>

