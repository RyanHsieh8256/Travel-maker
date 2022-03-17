<?php
try{
    require_once("./connectdatabase.php");
    $memName = $_POST["memName"];
    $memPsw = $_POST["memPsw"];
    $memNo = $_POST["memNo"];
    $sql = "UPDATE `member` SET `memName`='$memName',`memPsw`='$memPsw' WHERE `memNo`='$memNo';"; 
    $member = $pdo->exec($sql);
    // $member->bindValue(":memNo", $_POST["memNo"]);
    // $member->bindValue(":memName", $_POST["memName"]);
    // $member->bindValue(":memPsw", $_POST["memPsw"]);
    // $member->execute();
    echo "ok";
    
  }catch(PDOException $e){
    echo $e->getMessage();
  }



?>