<?php
try{
  require_once("connectdatabase.php");
  $sql = "SELECT * FROM `groupdetail_title` WHERE memNo=:memNo"; 
  $groDate = $pdo->prepare($sql);
  $groDate->bindValue(":memNo", $_POST["memNo"]);
  $groDate->execute();

  if($groDate->rowCount()==0){ 
    echo "noData";
  }else{ 
    $result = $groDate->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($result);
  }
}catch(PDOException $e){
  echo $e->getMessage();
}
?>