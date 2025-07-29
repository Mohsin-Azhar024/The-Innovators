<?php

session_start();

if(!isset($_SESSION['name'])){
    header("logout.php");
    // exit();
}


if(isset($_POST['logout'])){
    session_unset();
    session_destroy();
    header("logout.php");
    // exit();
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    <title>logout form</title>

    <style>
        body{
            padding: 5% 5%;
            background: black;
        }

        .display-4{
            color: #DD0038;
            font-weight: bold;
        }

        .jumbotron{
            background-color: #1F1F1F;
        }

        .lead{
            color: white;
        }

        .para{
            color: white;
        }

        .btn{
            color: black;
        }

        .btn:hover{
            background: #a31438;
        }
    </style>

</head>
<body>
    <div class="jumbotron">
        <h1 class="display-4">The Innovators!</h1>
        <p class="lead">Welcome to The Innovators, You are logged out and your session has been expired.</p>
        <hr class="my-4">
        <p class = "para">Click on the Home button to navigate to Home page of website and go to footer if you wanna again login.</p>
        <a class="btn btn-danger btn-lg btn" href="index.html" role="button">Home</a>
    </div>
<script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>
</body>
</html>