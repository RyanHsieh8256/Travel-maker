<?php
	$host = "cfd104g5.asuscomm.com";
	$dbname = "g3";
	$user = "g3-1";
	$password = "cfd104_g3@hihi";

	$dsn = "mysql:host=$host;port=3306;dbname=$dbname;charset=utf8";

	$options = array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION, PDO::ATTR_CASE=>PDO::CASE_NATURAL);
	
	$pdo = new PDO($dsn, $user, $password, $options);

//老師資料庫
	// $dbname = "books";
	// $user = "root";
	// $password = "Cfd10423";

	// $dsn = "mysql:host=localhost;port=3306;dbname=$dbname;charset=utf8";

	// $options = array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION, PDO::ATTR_CASE=>PDO::CASE_NATURAL);
	
	// $pdo = new PDO($dsn, $user, $password, $options);	
		
?>