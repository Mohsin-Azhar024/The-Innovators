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
$dob = "";
$password = "";

$name = $_POST["name"];
$gmail = $_POST['email'];
$dob = $_POST['dob'];
$password = $_POST['password'];



$sql = "INSERT INTO `signup` (`name`, `email`, `DOB`, `password`) VALUES ('$name', '$gmail', '$dob', '$password');";

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