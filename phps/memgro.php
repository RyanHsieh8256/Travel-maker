<?php
try{
  require_once("connectdatabase.php");
  $sql = "SELECT `groNo`,`groName`,`groContent`,`groStartDate`,`groEndDate`,`groImg`,`groLimit-applyNum`as groApplyNum FROM `groupdetail_title` WHERE memName=:memName"; 
  $groDate = $pdo->prepare($sql);
  $groDate->bindValue(":memName", $_POST["memName"]);
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