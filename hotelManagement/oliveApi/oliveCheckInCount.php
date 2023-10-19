<?php
// Database configuration
$servername = "localhost"; // Replace with your MySQL server address
$username = "root"; // Replace with your MySQL username
$password = "Jai@1104"; // Replace with your MySQL password
$database = "hotelmanagement"; // Replace with your MySQL database name

// Create a database connection
$conn = new mysqli($servername, $username, $password, $database);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$date = date('Y-m-d');
// Define the SQL query (e.g., select all records from a table)
$sql = "SELECT COUNT(*) as count FROM hotelmanagement.all_entry where check_in_date='2023-08-07'"; // Replace with your table name

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
