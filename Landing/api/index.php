<?php

/**
 * Entrada Vercel (serverless): o tráfego é encaminhado aqui por vercel.json.
 * O bootstrap é o mesmo de public/index.php.
 */
use App\Kernel;

require_once dirname(__DIR__).'/vendor/autoload_runtime.php';

return function (array $context) {
    return new Kernel($context['APP_ENV'], (bool) $context['APP_DEBUG']);
};
