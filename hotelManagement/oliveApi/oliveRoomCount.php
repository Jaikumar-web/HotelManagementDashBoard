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
$sql = "SELECT * FROM room"; // Replace with your table name

// Execute the query
$result = $conn->query($sql);

// Check if any rows were returned
if ($result->num_rows > 0) {
    // Initialize an array to store the results
    $data = array();

    // Fetch each row and add it to the results array
    while ($row = $result->fetch_assoc()) {
        $room_number = array("101","102","103","104","105","106","107","201","202","203","204","205","206","207","301","302","303","304","305","306","307","308","309","310","311","312","314","315","401","402","403","404","405","406","407","408","409","410","411","412","414","415","501","502","503","504","505","506","507");
        $room_value = array();
        array_push($room_value, $row["101"], $row["102"], $row["103"], $row["104"], $row["105"], $row["106"], $row["107"], $row["201"], $row["202"], $row["203"], $row["204"], $row["205"], $row["206"], $row["207"], $row["301"], $row["302"], $row["303"], $row["304"], $row["305"], $row["306"], $row["307"], $row["308"], $row["309"], $row["310"], $row["311"], $row["312"], $row["314"], $row["315"], $row["401"], $row["402"], $row["403"], $row["404"], $row["405"], $row["406"], $row["407"], $row["408"], $row["409"], $row["410"], $row["411"], $row["412"], $row["414"], $row["415"], $row["501"], $row["502"], $row["503"], $row["504"], $row["505"], $row["506"], $row["507"]);
        $resultCheck = array();
        $count = 0;
        foreach ($room_value as $value) {
            if ($value == '1'){
                $count++;
            }
        }
    }

    // Set response headers to indicate JSON content
    header('Content-Type: application/json');

    // Output the results as JSON
    echo json_encode($count);
} else {
    // If no rows were returned, set a 404 response code
    http_response_code(404);
    echo json_encode(array("message" => "No records found."));
}

// Close the database connection
$conn->close();
?>
