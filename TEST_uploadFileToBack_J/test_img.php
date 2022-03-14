<?php
// 參考網址:
// https://www.webtech.tw/info.php?tid=24
// 上傳圖片
echo $_FILES["file"]["name"];

echo $_FILES["file"]["tmp_name"];
//  memIcon-xxx.jpg
// 1/新增到DB
// 2/找到最後一筆編號
// 3 file pathInfo

//設定檔案上傳路徑，選擇指定資料夾
move_uploaded_file($_FILES["file"]["tmp_name"],"upload/".$_FILES["file"]["name"]);
    //限制圖片型別格式，大小
    // if ((($_FILES["file"]["type"] == "image/png")
    //     || ($_FILES["file"]["type"] == "image/jpeg")
    //  
    //     && ($_FILES["file"]["size"] < 400000)) {
    //         echo "yes";}
        // if ($_FILES["file"]["error"] > 0) {
        //     echo "Return Code: " . $_FILES["file"]["error"] . "<br />";
        // } else {
        //     echo "檔名: " . $_FILES["file"]["name"] . "<br />";
            // echo "檔案型別: " . $_FILES["file"]["type"] . "<br />";
            // echo "檔案大小: " . ($_FILES["file"]["size"] / 1024) . " Kb<br />";
            // echo "快取檔案: " . $_FILES["file"]["tmp_name"] . "<br />";
        // }
        //設定檔案上傳路徑，選擇指定資料夾

        //     if (file_exists("./back_img/manager_img" . $_FILES["file"]["name"])) {
        //         echo $_FILES["file"]["name"] . " already exists. ";
        //     } else {
        //         move_uploaded_file(
        //             $_FILES["file"]["tmp_name"],
        //             "./back_img/manager_img" . $_FILES["file"]["name"]
        //         );
        //         echo "儲存於: " . "./back_img/manager_img" . $_FILES["file"]["name"];//上傳成功後提示上傳資訊
        //     }
        // }
    // } else {
    //     echo "上傳失敗！";//上傳失敗後顯示錯誤資訊
    // }

    //連結資料庫
    // include('conn.php');

    // //定義變數，儲存檔案上傳路徑，之後將變數寫進資料庫相應欄位即可
    // $file = "../upload/" . $_FILES["file"]["name"];
    // $sql = "INSERT INTO 表名 (欄位名)
    //     VALUES
    //     ('$file')";

    // if (!mysql_query($sql)) {
    //     die('Error: ' . mysql_error());
    // }
    // echo "成功新增一條記錄";//成功傳入資料後顯示成功新增一條資料
    // require_once('./back_php/db_login.php');
    // $sql = "INSERT INTO `manager`(`mgrNo`, `mgrName`, `mgrAccount`, `mgrPsw`, `mgrAuz`, `mgrImg`) VALUES 
    // (3,Gogoro,'cfd104','123','root',:mgrImg)";
    // $member = $pdo->prepare($sql);
    // $member->bindValue(":mgrImg", $_FILES["file"]["name"]);
    // $member->execute();
?>