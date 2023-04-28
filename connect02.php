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
$logname = isset($_POST["logname"]) ? $_POST["logname"] : "";
$logemail = isset($_POST["logemail"]) ? $_POST["logemail"] : "";
$logpass = isset($_POST["logpass"]) ? $_POST["logpass"] : "";

// Check if required values are empty
if (empty($logname) || empty($logemail) || empty($logpass)) {
  die("Error: Required field(s) are empty.");
}

// Insert the data into the database
$sql = "INSERT INTO userlogin(fullname,email,password) VALUES('$logname', '$logemail','$logpass')";

if (mysqli_query($conn, $sql)) {
  echo"<script>alert('Registration Successful!')</script>";
  echo"<script>window.open('prodpage.html')</script>";
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

// Close the database connection
mysqli_close($conn);

?>
