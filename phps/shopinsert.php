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

  // $sql = "INSERT INTO `ordinfo`(`PRD_NO`, `PRICE`, `AMOUNT`) VALUES ($prdNo,$prdPrice,$prdNum)";
  // $sql = "INSERT INTO `ord`(`CUS_NO`, `CUS_NAME`, `CUS_TEL`, `CUS_ADD`, `TIME`, `SHIPPING`, `TOTAL`, `PAY_STATE`, `STATE`, `COUPON`) VALUES ($prdNo,1,1,1,'2021/12/12',1,1,1,1,null)";
  $sql = "INSERT INTO `ord`(`memNo`, `ordDate`, `ordSum`) VALUES ($memNo,$ordDate,$ordSum)";
  $ordDate
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