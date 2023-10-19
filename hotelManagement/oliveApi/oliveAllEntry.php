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

// Define the SQL query (e.g., select all records from a table)
$sql = "SELECT * FROM all_entry"; // Replace with your table name

// Execute the query
$result = $conn->query($sql);

// Check if any rows were returned
if ($result->num_rows > 0) {
    // Initialize an array to store the results
    $data = array();

    // Fetch each row and add it to the results array
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }

    // Set response headers to indicate JSON content
    header('Content-Type: application/json');

    // Output the results as JSON
    echo json_encode($data);
} else {
    // If no rows were returned, set a 404 response code
    http_response_code(404);
    echo json_encode(array("message" => "No records found."));
}

// Close the database connection
$conn->close();
?>
