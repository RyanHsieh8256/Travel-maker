<?php
    $dbname = "g3";
    $user = "g3-1";
    $password = "cfd104_g3@hihi";
    $host = "cfd104g5.asuscomm.com";
    $dsn = "mysql:host=$host;port=3306;dbname=$dbname;charset=utf8";

	$options = array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION, PDO::ATTR_CASE=>PDO::CASE_NATURAL);
	
	//建立pdo物件
	$pdo = new PDO($dsn, $user, $password, $options);	

    try{
        $sql = "select * from gro";
        $groData = $pdo -> prepare($sql);
        $groData -> execute();

        if($groData -> rowCount() == 0){
            echo "not found";
        }else{
            $data = $groData -> fetchAll(PDO::FETCH_ASSOC);

            echo json_encode($data);
        }
    }catch(PDOExcaption $e){
        echo $e->getMessage();
    }
?>