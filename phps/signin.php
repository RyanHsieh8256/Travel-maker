<?php
try{
  require_once("connectdatabase.php");
  $sql = "select memNo ,memName ,memEmail ,memPhone ,memBirth ,memIcon ,memCreateDate ,memState from `member` where memEmail=:memEmail and memPsw=:memPsw"; 

  $sql = "INSERT INTO `member`(`memName`, `memEmail`, `memPhone`, `memBirth`, `memIcon`, `memPsw`, `memCreateDate`, `memState`) VALUES (':memName',':memEmail',':memPhone','1990-01-01','memIcon-006.jpg','111',':memCreateDate','正常')";
  $member = $pdo->prepare($sql);
  $member->bindValue(":memEmail", $_POST["memEmail"]);
  $member->bindValue(":memPsw", $_POST["memPsw"]);
  $member->execute();

  if($member->rowCount()==0){ 
	  echo "exist";
  }else{ 
    $memRow = $member->fetch(PDO::FETCH_ASSOC);
    $result = [
      "memNo" => $memRow["memNo"],
      "memEmail" => $memRow["memEmail"], 
      "memName" => $memRow["memName"],
      "memPhone" => $memRow["memPhone"],
      "memBirth" => $memRow["memBirth"], 
      "memIcon" => $memRow["memIcon"],
      "memCreateDate" => $memRow["memCreateDate"],
      "memState" => $memRow["memState"]
    ];

    echo json_encode($result); 
  }
}catch(PDOException $e){
  echo $e->getMessage();
}
?>