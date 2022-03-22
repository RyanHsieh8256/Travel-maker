<?php
    require_once("./connectdatabase.php");

    try{
        // $sql = "select * from group_ ";
        $sql = "SELECT group_.*,groupdetail_title.quota FROM `group_` join `groupdetail_title` on group_.groNo = groupdetail_title.groNo;";

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