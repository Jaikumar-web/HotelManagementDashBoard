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

// Define the SQL query (e.g., select all records from a table)
$sql = "SELECT * FROM room"; // Replace with your table name

// Execute the query
$result = $conn->query($sql);

// Check if any rows were returned
if ($result->num_rows > 0) {
    // Initialize an array to store the results
    $data = array();

    // Fetch each row and add it to the results array
    while ($row = $result->fetch_assoc()) {
        $room_number = array("zeroZeroOne","zeroZeroTwo","zeroZeroThree","oneZeroOne","oneZeroTwo","oneZeroThree","oneZeroFour","oneZeroFive","oneZeroSix","twoZeroOne","twoZeroTwo","twoZeroThree","twoZeroFour","twoZeroFive","twoZeroSix","threeZeroOne","threeZeroTwo");
        $room_value = array();
        array_push($room_value, $row["001"], $row["002"], $row["003"], $row["101"], $row["102"], $row["103"], $row["104"], $row["105"], $row["106"], $row["201"], $row["202"], $row["203"], $row["204"], $row["205"], $row["206"], $row["301"], $row["302"]);
        $resultCheck = array();

        for ($i = 0; $i < count($room_number); $i++) {
            $resultCheck[$room_number[$i]] = $room_value[$i];
        }
    }

    // Set response headers to indicate JSON content
    header('Content-Type: application/json');

    // Output the results as JSON
    echo json_encode($resultCheck);
} else {
    // If no rows were returned, set a 404 response code
    http_response_code(404);
    echo json_encode(array("message" => "No records found."));
}

// Close the database connection
$conn->close();
?>
