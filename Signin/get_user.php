<?php
session_start();
header('Content-Type: application/json');

$conn = mysqli_connect("localhost", "root", "", "medquest-users");

if (!$conn) {
    echo json_encode(["status" => "error", "message" => "Database connection failed"]);
    exit();
}

if (!isset($_SESSION['user_id'])) {
    echo json_encode(["status" => "error", "message" => "User not logged in"]);
    exit();
}

$user_id = $_SESSION['user_id'];

$sql = "SELECT username, CONCAT(FirstName, ' ', LastName) AS full_name, Email, Faculty, University, City, Country 
        FROM users WHERE id = ?";
$stmt = mysqli_prepare($conn, $sql);
mysqli_stmt_bind_param($stmt, "i", $user_id);
mysqli_stmt_execute($stmt);
$result = mysqli_stmt_get_result($stmt);

if ($row = mysqli_fetch_assoc($result)) {
    echo json_encode([
        "status" => "success",
        "username" => $row['username'],
        "full_name" => $row['full_name'],
        "email" => $row['Email'],
        "faculty" => $row['Faculty'],
        "university" => $row['University'],
        "city" => $row['City'],
        "country" => $row['Country']
    ]);
} else {
    echo json_encode(["status" => "error", "message" => "User not found"]);
}

mysqli_stmt_close($stmt);
mysqli_close($conn);
?>
