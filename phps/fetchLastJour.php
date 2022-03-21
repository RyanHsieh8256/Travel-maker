<?php
   $conn = mysqli_connect('cfd104g5.asuscomm.com','g3-1','cfd104_g3@hihi','g3');

   $sql = mysqli_query($conn,"select `journeyNo` from `journey` order by `journeyNo` desc limit 0,1;");

   $result = mysqli_fetch_all($sql, MYSQLI_ASSOC);

   echo json_encode($result);

?>