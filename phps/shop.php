<?php
    require_once("./connectdatabase.php");
    try{
        
        $sql = "select * from ticketspot join underimg_test on ticketspot.ticketSpotNo = underimg_test.ticketSpotNo join city on ticketSpot.cityNo =  city.cityNo";
        
        $ticketspot = $pdo->prepare($sql);
        $ticketspot->execute();

        if($ticketspot->rowCount() == 0){
            echo "not found";
        }else{
            $memRow = $ticketspot->fetchAll(PDO::FETCH_ASSOC);

            echo json_encode($memRow);

        };

    }catch(PDOExcaption $e){
        echo $e->getMessage();
    };

?>