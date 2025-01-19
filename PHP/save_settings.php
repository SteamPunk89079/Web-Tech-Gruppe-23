<?php
$json_data = file_get_contents("php:input");

$new_data = json_decode($json_data, true);


if ($new_data === null) {
    echo json_encode(["status" => "error", "message" => "Invalid JSON input."]);
    exit;
}

$file_path = "settings.json";

if (file_exists($file_path)) {
    $existing_data = file_get_contents($file_path);
    $data_array = json_decode($existing_data, true);

    if ($data_array === null) {
        $data_array = [];
    }
} else {
    $data_array = [];
}

$data_array = array_merge($data_array, $new_data);

file_put_contents($file_path, json_encode($data_array, JSON_PRETTY_PRINT));

echo json_encode(["status" => "success", "message" => "Settings saved successfully."]);

?>