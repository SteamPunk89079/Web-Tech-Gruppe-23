<?php
$json_data = file_get_contents("php://input");

//INCOMING
$new_data = json_decode($json_data, true);

if ($new_data === null) {
    echo json_encode(["status" => "error", "message" => "Invalid JSON input."]);
    exit;
}

$file_path = "data.json";

if (file_exists($file_path)) {
    $existing_data = file_get_contents($file_path);
    $data_array = json_decode($existing_data, true);

    if ($data_array === null) {
        $data_array = [];
    }
} else {
    $data_array = [];
}

$data_array[] = $new_data;

$updated_json = json_encode($data_array, JSON_PRETTY_PRINT);

if (file_put_contents($file_path, $updated_json)) {
    echo json_encode(["status" => "success", "message" => "Data appended successfully."]);
} else {
    echo json_encode(["status" => "error", "message" => "Failed to save data."]);
}
?>
