<?php
session_start();

// Connect to database
$conn = mysqli_connect("localhost", "root", "", "medquest-users");
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Check if form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data and prevent undefined variable warnings
    $firstName = isset($_POST['FirstName']) ? $_POST['FirstName'] : '';
    $lastName = isset($_POST['LastName']) ? $_POST['LastName'] : '';
    $dob = isset($_POST['DOB']) ? $_POST['DOB'] : '';
    $gender = isset($_POST['Gender']) ? $_POST['Gender'] : '';
    $email = isset($_POST['Email']) ? $_POST['Email'] : '';
    $faculty = isset($_POST['Faculty']) ? $_POST['Faculty'] : '';
    $university = isset($_POST['University']) ? $_POST['University'] : '';
    $city = isset($_POST['City']) ? $_POST['City'] : '';
    $country = isset($_POST['Country']) ? $_POST['Country'] : '';
    $academicYear = isset($_POST['CurrentAcademicYear']) ? $_POST['CurrentAcademicYear'] : '';
    $code = isset($_POST['code']) ? $_POST['code'] : '';
    $username = isset($_POST['username']) ? $_POST['username'] : '';
    $password = isset($_POST['password']) ? $_POST['password'] : '';

    // Ensure required fields are not empty
    if (empty($firstName) || empty($lastName) || empty($email) || empty($username) || empty($password)) {
        die("Error: All required fields must be filled out.");
    }

    // Hash password for security
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Create SQL query
    $sql = "INSERT INTO users (FirstName, LastName, DOB, Gender, Email, Faculty, University, City, Country, CurrentAcademicYear, code, username, password) 
            VALUES ('$firstName', '$lastName', '$dob', '$gender', '$email', '$faculty', '$university', '$city', '$country', '$academicYear', '$code', '$username', '$hashed_password')";

    // Execute query
    if (mysqli_query($conn, $sql)) {
        echo "Registration successful!";
    } else {
        echo "Error: " . mysqli_error($conn);
    }
} else {
    die("Error: Form not submitted.");
}

// Close connection
mysqli_close($conn);
?>
