<?php
session_start();

// Check if user is logged in
if (!isset($_SESSION['user_id'])) {
    header("Location: index.html"); // Redirect to login page if not logged in
    exit();
}

echo "Welcome, " . htmlspecialchars($_SESSION['username']) . "!";
?>

<a href="logout.php">Logout</a>
