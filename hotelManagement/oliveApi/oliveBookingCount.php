<?php
// Database configuration
$servername = "localhost";
$username = "root";
$password = "Jai@1104";
$dbname = "hotelmanagement";

// Create a database connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$date = date('Y-m-d');
// Define the SQL query (e.g., select all records from a table)
$sql = "SELECT COUNT(*) as count FROM $dbname.all_entry WHERE check_in_date='2023-08-07'"; // Replace with your table name

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
    // If no rows were returned, set a 404 response code
    http_response_code(404);
    echo json_encode(array("message" => "No records found."));
}

// Close the database connection
$conn->close();
?>
