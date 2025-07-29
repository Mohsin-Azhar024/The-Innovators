<?php

if(isset($_POST['submit'])&& !empty($_POST['name']) && !empty($_POST['password'])){
    session_start();

    $found = false;

    $server = "localhost";
    $user = "root";
    $password = "";
    $database = "theinnovators";

    $conn = mysqli_connect($server, $user, $password, $database);

    if(!$conn){
        die("The connection not established due to ". mysqli_connect_error());
    }

    else{
        // echo "The connection established successfully";
    }


    $username = $_POST['name'];
    $pwd = $_POST['password'];

    $sql = "SELECT `name` FROM signup WHERE name = '$username' AND password = '$pwd'";
    $result = mysqli_query($conn, $sql);

    if(mysqli_num_rows($result) > 0){
        while($rows = mysqli_fetch_assoc($result)){
            $found = true;
            $_SESSION['valid'] = true;
            $_SESSION['name'] = $rows["name"];

            if(isset($_POST['remember'])){
                setcookie('name', $username, time()+(30*24*60*60));
                setcookie('pass', $pwd, time()+(30*24*60*60));
            }

            header("location: index.html");
        }
    }

    else{
        // echo "invalid Username or Password";
    }

}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    <title>login form</title>

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
        <p class="lead">Welcome to The Innovators, Your Password or Username may Invalid , try again.</p>
        <hr class="my-4">
        <p class = "para">Click on the Home button to navigate to Home page of website and you should have to sign in first from footer.</p>
        <a class="btn btn-danger btn-lg btn" href="index.html" role="button">Home</a>
    </div>
<script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>
</body>
</html>