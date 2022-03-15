<?php
    require_once("./connectdatabase.php");
    try{
        $sql = "select jc.memNo, j.journeyNo, journeyName, journeyImg, journeyInfo ,c.cityName from g3.journeycollect jc
        join g3.journey j on j.journeyNo = jc.journeyNo
        left join g3.journeyspot js on js.journeyNo = j.journeyNo
        left join g3.spot s on s.spotNo = js.spotNo
        left join g3.city c on c.cityNo = s.cityNo
        where jc.memNo=:memNo group by jc.memNo;";
        

        $groData = $pdo -> prepare($sql);
        $groData->bindValue(":memNo", $_GET["memNo"]);
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