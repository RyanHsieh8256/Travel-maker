<?php
    $conn = mysqli_connect('cfd104g5.asuscomm.com','g3-1','cfd104_g3@hihi','g3');
    // $conn = mysqli_connect('localhost','root','ks2510','spot-test');

    $find = $_GET['find'];

    $sql = mysqli_query($conn, "select y.journeyName, j.journeyNo,journeySpotDay, j.sequence, s.spotName, s.spotNo, s.spotImg,s.spotInfo,s.spotLatitude,s.spotLongitude, c.cityName
    from journeyspot j 
    join journey y on j.journeyNo = y.journeyNo 
    join spot s on j.spotNo = s.spotNo
    join city c on c.cityNo = s.cityNo
    where j.journeyNo = $find");

    $result = mysqli_fetch_all($sql, MYSQLI_ASSOC);

    echo json_encode($result);
?>