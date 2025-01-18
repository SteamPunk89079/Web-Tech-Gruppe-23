<?php
$json_data = file_get_contents("php://input");

$credentials = json_decode($json_data, true);

if ($credentials === null) {
    echo json_encode(["status" => "error", "message" => "Invalid JSON input."]);
    exit;
}
$file_path = "users.json";
if (!file_exists($file_path)) {
    echo json_encode(["status" => "error", "message" => "User data not found."]);
    exit;
}
$user_data = json_decode(file_get_contents($file_path), true);
if ($user_data === null) {
    echo json_encode(["status" => "error", "message" => "Failed to read user data."]);
    exit;
}
$is_valid = false;
foreach ($user_data as $user) {
    if ($user["username"] === $credentials["username"] && $user["password"] === $credentials["password"]) {
        $is_valid = true;
        break;
    }
}
if ($is_valid) {
    echo json_encode(["status" => "success", "message" => "Login successful."]);
} else {
    echo json_encode(["status" => "error", "message" => "Invalid username or password."]);
}
?>
