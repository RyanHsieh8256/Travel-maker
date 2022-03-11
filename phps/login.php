<?php
//老師資料庫
// session_start();
// try{
//   require_once("connectdatabase.php");
//   $sql = "select * from `member` where memId=:memId and memPsw=:memPsw"; 
//   $member = $pdo->prepare($sql);
//   $member->bindValue(":memId", $_POST["memId"]);
//   $member->bindValue(":memPsw", $_POST["memPsw"]);
//   $member->execute();

//   if( $member->rowCount()==0){ 
// 	  echo "exist";
//   }else{ 
//     $memRow = $member->fetch(PDO::FETCH_ASSOC);
//     $_SESSION["memId"] = $memRow["memId"];
//     $_SESSION["memPsw"] = $memRow["memPsw"];
//     $_SESSION["memName"] = $memRow["memName"];

//     $result = ["memId" => $_SESSION["memId"], "memPsw" => $_SESSION["memPsw"],"memName" => $_SESSION["memName"]];

//     echo json_encode($result); 
//   }
// }catch(PDOException $e){
//   echo $e->getMessage();
// }

try{
  require_once("connectdatabase.php");
  $sql = "select memNo ,memName ,memEmail ,memPhone ,memBirth ,memIcon ,memCreateDate ,memState from `member` where memEmail=:memEmail and memPsw=:memPsw"; 
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