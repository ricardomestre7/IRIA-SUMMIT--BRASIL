<?php

namespace App;

use Symfony\Bundle\FrameworkBundle\Kernel\MicroKernelTrait;
use Symfony\Component\HttpKernel\Kernel as BaseKernel;

class Kernel extends BaseKernel
{
    use MicroKernelTrait;

    public function getProjectDir(): string
    {
        return dirname(__DIR__);
    }

    public function getCacheDir(): string
    {
        if ($this->isVercelRuntime()) {
            $dir = sys_get_temp_dir().'/iri_sf_cache/'.$this->environment;
            if (!is_dir($dir)) {
                @mkdir($dir, 0775, true);
            }

            return $dir;
        }

        return parent::getCacheDir();
    }

    public function getLogDir(): string
    {
        if ($this->isVercelRuntime()) {
            $dir = sys_get_temp_dir().'/iri_sf_log';
            if (!is_dir($dir)) {
                @mkdir($dir, 0775, true);
            }

            return $dir;
        }

        return parent::getLogDir();
    }

    private function isVercelRuntime(): bool
    {
        return (bool) (getenv('VERCEL') ?: ($_SERVER['VERCEL'] ?? false));
    }
}
