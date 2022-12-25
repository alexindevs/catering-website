<?php 
// Check if the form was submitted
if (isset($_POST['submit'])) {
    // Get the form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $number = $_POST['number'];
    $message = $_POST['message'];

echo "Thanks, ". $name . "!";
}