<?php
    require_once("./connectdatabase.php");
    try{
        $sql = "select * from g3.groupdetail_title where groNo=:id";
        

        $groData = $pdo -> prepare($sql);
        $groData->bindValue(":id", $_GET["id"]);
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