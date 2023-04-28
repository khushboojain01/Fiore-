<?php

// Connect to the database
$servername = "localhost"; // Replace with your server name
$username = "root";// Replace with your database username
$password = ""; // Replace with your database password
$dbname = "florist"; // Replace with your database name

$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// Get the form data
$email = $_POST["email"];
$pass = $_POST["pass"];

// Insert the data into the database
$sql = "INSERT INTO users(email, password) VALUES ('$email', '$pass')";

if (mysqli_query($conn, $sql)) {
  echo"<script>alert('Login Successful!')</script>";
  echo"<script>window.open('prodpage.html')</script>";
} else {
echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

// Close the database connection
mysqli_close($conn);

?>