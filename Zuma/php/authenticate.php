<?php

$user='admin';
$passwd='qwerty';


$userInput = $_POST["username"];
$passwdInput = $_POST["password"];

if ( ($user == $userInput) && ($passwd == $passwdInput) ) {
    echo "Welcome";
} else {
    echo("Username or password is false");

}

