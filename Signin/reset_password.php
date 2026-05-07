<?php
header("Content-Type: application/json");
require "config.php"; // Ensure you have a database connection file

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $username = trim($_POST["username"]);
    $newPassword = trim($_POST["newPassword"]);

    if (empty($username) || empty($newPassword)) {
        echo json_encode(["status" => "error", "message" => "All fields are required."]);
        exit;
    }

    $hashedPassword = password_hash($newPassword, PASSWORD_DEFAULT);

    // Check if the email exists
    $stmt = $conn->prepare("SELECT id FROM users WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        $stmt->close();

        // Update the password
        $updateStmt = $conn->prepare("UPDATE users SET password = ? WHERE username = ?");
        $updateStmt->bind_param("ss", $hashedPassword, $username);
        
        if ($updateStmt->execute()) {
            echo json_encode(["status" => "success", "message" => "Password reset successfully."]);
        } else {
            echo json_encode(["status" => "error", "message" => "Database error. Try again later."]);
        }
        $updateStmt->close();
    } else {
        echo json_encode(["status" => "error", "message" => "username not found."]);
    }

    $conn->close();
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request."]);
}
?>
