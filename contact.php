<?php

if(isset($_POST['name'])){

$server = "localhost";
$username = "root";
$password = "";
$database = "theinnovators";

$conn = mysqli_connect($server, $username, $password, $database);

if(!$conn){
    die("There's an error in coonection ". mysqli_connect_error());
}

else{
    echo "The connection established successfully";
}

$name = "";
$gmail = "";
$phone = "";
$address = "";
$course = "";
$package = "";

$name = $_POST["name"];
$gmail = $_POST['mail'];
$phone = $_POST['phone'];
$address = $_POST['address'];
$course = $_POST['course'];
$package = $_POST['package'];


$sql = "INSERT INTO `contact` (`name`, `email`, `phone`, `address`, `course`, `package`) VALUES ('$name', '$gmail', '$phone', '$address', '$course', '$package')";

$result = mysqli_query($conn, $sql);

if(!$result){
    die("The data not inserted bcz ". mysqli_query_error());
}

else{
    echo "The record inserted successfully ";    
}

$conn->close();

header("location: index.html");

}

?>