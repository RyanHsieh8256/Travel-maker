<?php
    require_once("./connectdatabase.php");

    try{
        $sql = "select gro.*, city.cityName, member.memName, member.memIcon from gro join city on gro.cityNo = city.cityNo join member on gro.memNo =  member.memNo";
        $groData = $pdo -> prepare($sql);
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