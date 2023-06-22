<?php
require_once '_init.php';

// Get GitHub Personal token
if (isset($_GET['token'])) {
    echo json_encode([
        'token' => ''
    ]);
}