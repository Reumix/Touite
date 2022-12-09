<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use function Symfony\Component\String\u;

class Controller {

    #[Route('/')]
    public function homepage() : Response
    {
        return new Response(' Title : heheheha ');
    }

    // #[Route('/browse/{slug}')]
    // public function browse(string $slug = null) : Response
    // {
    //     if($slug){            
    //         $title = 'Genre : '.u(str_replace('-', ' ', $slug))->title(true);
    //     } else {
    //         $title = 'All Genres';
    //     }


    //     return new Response($title);
    // }

}

?>