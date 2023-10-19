<?php
// Database configuration
$servername = "localhost";
$username = "root";
$password = "Jai@1104";
$dbname = "hotelmoondatabase";

// Create a database connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$date = date('Y-m-d');
$sql = "SELECT COUNT(*) as count FROM $dbname.all_entry WHERE check_in_date='2018-07-22'";

// Execute the query
$result = $conn->query($sql);

// Check if the query was successful
if ($result) {
    // Fetch the result as an associative array
    $row = $result->fetch_assoc();
    
    // Access the count value
    $count = $row['count'];
    
    // Output the count
    echo $count;
} else {
    // Handle the case where the query fails
    echo "Error executing the query: " . $conn->error;
}

// Close the database connection
$conn->close();
?>
