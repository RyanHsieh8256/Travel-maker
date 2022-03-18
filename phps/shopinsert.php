<?php
require_once("./connectdatabase.php"); // 開發用

$cart = json_decode($_GET["cart"]);
try {

 foreach($cart as $key => $val) {
 
  $shopMemNo = "memNo";
  $shopOrdDate = "OrdDate";
  $shopOrdSum = "OrdSum";
  $shopTicketSpotNo = "ticketSpotNo";
  $shopFullFarePrice = "fullFarePrice";
  $shopHalfFarePrice = "halfFarePrice";
  $shopConTicketPrice = "conTicketPrice";
  $shopFullFareQuan = "fullFareQuan";
  $shopHalfFareQuan = "halfFareQuan";
  $shopConTicketQuan = "conTicketQuan";
  $shopOrdNo = "OrdNo";

  $sql = "INSERT INTO `ord`(`memNo`, `ordDate`, `ordSum`) VALUES ($shopMemNo,$shopOrdDate,$shopOrdSum)";

  $sql = "INSERT INTO `orddetail`(`ordNo`, `ticketSpotNo`, `fullFarePrice`, `fullFareQuan`, `halfFarePrice`, `halfFareQuan`, `conTicketPrice`, `conTicketQuan`) VALUES ($shopOrdNo,$shopTicketSpotNo,$shopFullFarePrice,$shopFullFareQuan,$shopHalfFarePrice,$shopHalfFareQuan,$shopConTicketPrice,$shopConTicketQuan)";

 
  $allTable = $pdo->prepare($sql);
  $allTable->execute();
 };
    // insert 1 records into ord
    // // insert many records into ord    
 
 // $allTable = $pdo->query($sql);
 // $Rows = $allTable->fetchAll(PDO::FETCH_ASSOC);
 // echo json_encode($Rows);
} catch (PDOException $e) {
 echo "錯誤原因 : ", $e->getMessage(), "<br>";
 echo "錯誤行號 : ", $e->getLine(), "<br>";
 // echo "系統錯誤, 請通知系統維護人員<br>";
};

?>