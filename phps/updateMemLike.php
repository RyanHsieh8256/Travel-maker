<?php
     $conn = mysqli_connect('cfd104g5.asuscomm.com','g3-1','cfd104_g3@hihi','g3');

     

    switch($_POST) {

        case !empty($_POST['like']):
            $datas = $_POST['like'];
            $array = json_decode($datas,true);

            foreach($array as $row) {
                $sql = "INSERT IGNORE INTO journeycollect(memNo, journeyNo) VALUES ('".$row["memNo"]."','".$row["journeyNo"]."')";
        
                mysqli_query($conn,$sql);
            }

            print_r($array);
            break;

        case !empty($_POST['unlike']):
            $datas = $_POST['unlike'];
            $array = json_decode($datas,true);


            foreach($array as $row) {
                $sql = "DELETE FROM journeycollect WHERE memNo = ".$row['memNo']." AND journeyNo = '".$row['journeyNo']."'";
        
                mysqli_query($conn,$sql);
            }

            break;
    }
    


?>