<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use function Symfony\Component\String\u;

class ControllerMain {

    #[Route('/')]
    public function homepage() : Response
    {
        return new Response(' Api sur : http://127.0.0.1:8000/api ');
    }
}
?>