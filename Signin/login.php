<?php
session_start();
$conn = mysqli_connect("localhost", "root", "", "medquest-users");

if (!$conn) {
    die("Database connection failed: " . mysqli_connect_error());
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = trim($_POST['username']);
    $password = trim($_POST['password']);

    if (empty($username) || empty($password)) {
        die("Error: Fields cannot be empty!");
    }

    $sql = "SELECT id, username, password FROM users WHERE username = ?";
    $stmt = mysqli_prepare($conn, $sql);

    if ($stmt) {
        mysqli_stmt_bind_param($stmt, "s", $username);
        mysqli_stmt_execute($stmt);
        $result = mysqli_stmt_get_result($stmt);

        if ($row = mysqli_fetch_assoc($result)) {
            if (password_verify($password, $row['password'])) {
                // Store session variables
                $_SESSION['user_id'] = $row['id'];
                $_SESSION['username'] = $row['username'];

                // Redirect using JavaScript and PHP fallback
                echo '<script>
                    sessionStorage.setItem("loggedIn", "true");
                    sessionStorage.setItem("username", "' . $_SESSION['username'] . '");
                    window.location.href = "profile.html";
                </script>';
                exit();
            } else {
                echo "❌ Incorrect password!";
            }
        } else {
            echo "❌ Username not found!";
        }
        mysqli_stmt_close($stmt);
    } else {
        echo "❌ SQL Query failed!";
    }
}

mysqli_close($conn);
?>
