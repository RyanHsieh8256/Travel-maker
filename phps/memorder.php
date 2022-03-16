<?php
try{
  require_once("connectdatabase.php");
  $sql = "SELECT * FROM (`ord` join `orddetail` on ord.ordNo = orddetail.ordNo)
  INNER join ticketSpot on ticketSpot.ticketSpotNo = orddetail.ticketSpotNo WHERE ord.memNo=:memNo;"; 
  $orderData = $pdo->prepare($sql);
  $orderData->bindValue(":memNo", $_POST["memNo"]);
  $orderData->execute();

  if($orderData->rowCount()==0){ 
    echo "noData";
  }else{ 
    $result = $orderData->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($result);
  }
}catch(PDOException $e){
  echo $e->getMessage();
}
?>