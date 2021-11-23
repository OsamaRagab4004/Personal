<?php

if(isset($_POST['submit'])) {

    if($_POST['secretKey'] == "YKg+9n2*hz?k?^WGAeqUh9mB&v*38rcS2UGcp&5Mgn?XW#s28jTwNW2") {
        $name = filter_var($_POST['nameOfsender'],FILTER_SANITIZE_STRING);
        $email = filter_var($_POST['emailOfsender'],FILTER_SANITIZE_EMAIL);
        $message = filter_var($_POST['messageOfsender'],FILTER_SANITIZE_STRING);
        $message = "The Email Of Sender: " . $email."The Name of Sender: ".$name."    "."The Message:  ".$message;
        
        //echo $name."<br>".$email."<br>".$message;

        $mailSent = mail("osamaragab4004@gmail.com","MESSAGE FROM PERSONAL WEBSITE!!",
        $message,"From: Osama@Abdellatif.com");

        if($mailSent) {
            header("Location:index.php?msg_done");
            exit();
        } else {
            header("Location: index.php?msg_fail");
            exit();
        }


    } else {
        header("Location: index.php");
        exit();
    }


} else {
        header("Location: index.php");
        exit();
}