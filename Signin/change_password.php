<?php
session_start();
header('Content-Type: application/json');

// Database connection
$conn = mysqli_connect("localhost", "root", "", "medquest-users");
if (!$conn) {
    echo json_encode(["status" => "error", "message" => "Database connection failed"]);
    exit();
}

// Check if user is logged in
if (!isset($_SESSION['user_id'])) {
    echo json_encode(["status" => "error", "message" => "User not logged in"]);
    exit();
}

// Get user ID
$user_id = $_SESSION['user_id'];

// Get JSON input
$data = json_decode(file_get_contents("php://input"), true);
$currentPassword = $data['currentPassword'] ?? '';
$newPassword = $data['newPassword'] ?? '';

// Validate input
if (empty($currentPassword) || empty($newPassword)) {
    echo json_encode(["status" => "error", "message" => "All fields are required"]);
    exit();
}

// Get user's current password from database
$sql = "SELECT password FROM users WHERE id = ?";
$stmt = mysqli_prepare($conn, $sql);
mysqli_stmt_bind_param($stmt, "i", $user_id);
mysqli_stmt_execute($stmt);
$result = mysqli_stmt_get_result($stmt);

if ($row = mysqli_fetch_assoc($result)) {
    // Verify current password
    if (!password_verify($currentPassword, $row['password'])) {
        echo json_encode(["status" => "error", "message" => "Current password is incorrect"]);
        exit();
    }

    // Hash new password
    $hashedPassword = password_hash($newPassword, PASSWORD_DEFAULT);

    // Update password in database
    $updateSql = "UPDATE users SET password = ? WHERE id = ?";
    $updateStmt = mysqli_prepare($conn, $updateSql);
    mysqli_stmt_bind_param($updateStmt, "si", $hashedPassword, $user_id);
    
    if (mysqli_stmt_execute($updateStmt)) {
        echo json_encode(["status" => "success", "message" => "Password updated successfully"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Failed to update password"]);
    }

    mysqli_stmt_close($updateStmt);
} else {
    echo json_encode(["status" => "error", "message" => "User not found"]);
}

mysqli_stmt_close($stmt);
mysqli_close($conn);
?>
