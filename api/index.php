<?php

use App\Kernel;

if (!isset($_SERVER['APP_ENV']) || $_SERVER['APP_ENV'] === '') {
    $_SERVER['APP_ENV'] = 'prod';
}

if (!isset($_SERVER['APP_DEBUG']) || $_SERVER['APP_DEBUG'] === '') {
    $_SERVER['APP_DEBUG'] = '0';
}

if (!isset($_SERVER['APP_SECRET']) || $_SERVER['APP_SECRET'] === '') {
    $_SERVER['APP_SECRET'] = hash('sha256', (string) ($_SERVER['VERCEL_PROJECT_ID'] ?? $_SERVER['VERCEL_URL'] ?? 'iria-summit-brasil'));
}

$_SERVER['APP_RUNTIME_OPTIONS'] = array_replace(
    $_SERVER['APP_RUNTIME_OPTIONS'] ?? [],
    [
        'disable_dotenv' => true,
    ]
);

require_once dirname(__DIR__).'/vendor/autoload_runtime.php';

return function (array $context) {
    return new Kernel($context['APP_ENV'], (bool) $context['APP_DEBUG']);
};
