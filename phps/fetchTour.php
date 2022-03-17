<?php
    $conn = mysqli_connect('cfd104g5.asuscomm.com','g3-1','cfd104_g3@hihi','g3');

    

    // 分成2種情況，找會員的行程與該城市的行程
    switch($_GET) {
        case !empty($_GET['mem']):
            $thing = $_GET['mem'];
            $sql = mysqli_query($conn,"select * from journey WHERE memNo = $thing");
            break;
        
        case !empty($_GET['city']):
            $thing = $_GET['city'];
            $sql = mysqli_query($conn, "select DISTINCT j3.journeyName,j3.journeyImg, j3.journeyNo from `city` c join spot s on c.cityNo = s.cityNo join journeyspot j2 on j2.spotNo = s.spotNo join journey j3 on j3.journeyNo = j2.journeyNo where c.cityNo = $thing and j3.journeyState = '公開'");
            break;     
    }

    


    $result = mysqli_fetch_all($sql, MYSQLI_ASSOC);

    echo json_encode($result);
?>