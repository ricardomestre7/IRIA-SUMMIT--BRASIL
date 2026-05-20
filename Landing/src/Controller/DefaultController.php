<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\Response;
use Twig\Environment; // Don't forget to import the Twig\Environment class.

class DefaultController extends AbstractController
{
    private $loader;

    public function __construct(Environment $twig)
    {
        $this->loader = $twig->getLoader();
    }

    #[Route('/', name: 'home')]
    public function index(): Response
    {
        return $this->render('index.html.twig');
    }

    #[Route('/{route}', name: 'react_app', requirements: ['route' => 'projeto|fases|programa|oradores|parceiros|institucional|press|faqs|bilhetes|login|dashboard|participantes|credenciamento|agenda-interna|oradores-admin|parceiros-admin|lumina-exames|certificados|networking|leads|financeiro|admin'])]
    public function reactApp(): Response
    {
        return $this->render('react_app.html.twig');
    }

    #[Route('/{path}', requirements: ['path' => '.+'])]
    public function root(string $path): Response
    {
        if ($this->loader->exists($path.'.html.twig')) {
            if ($path == '/' || $path == 'home' || $path == 'index') {
                return $this->render('index.html.twig');
            }
            return $this->render($path.'.html.twig');
        }
        throw $this->createNotFoundException();
    }
}
