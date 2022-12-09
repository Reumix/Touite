<?php

namespace App\Controller;

use App\Entity\ArticleApi;
use App\Entity\CategorieApi;
use App\Entity\FavorieApi;
use App\Entity\UtilisateurApi;

use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\Persistence\ManagerRegistry;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class ArticleController extends AbstractController
{
    #[Route('/article', name: 'app_api')]

    public function CreateArticle(ManagerRegistry $doctrine): Response
    {
        $entityManager = $doctrine->getManager();

        $article = new ArticleApi();
        $article->setTitre('L histoire du caca');   
        $article->setDescription(('le caca c est rigolo'));
        $article->setIdCategorie('1');
        $article->setIdAdministrateur('0');

        // tell Doctrine you want to (eventually) save the Product (no queries yet)
        $entityManager->persist($article);

        // actually executes the queries (i.e. the INSERT query)
        $entityManager->flush();

        return new JsonResponse($article);
    }

    #[Route('/article/{id}', name: 'article_show')]

    public function API_Article_recherche_id(ManagerRegistry $doctrine, int $id): Response
    {
        $article = $doctrine->getRepository(Article::class)->find($id);
        if (!$article) {
            throw $this->createNotFoundException(
                'No product found for id '.$id
            );
        }
        $Article = [
            'Id' => $article->getId(),
            'Titre' => $article->getTitre(),
            'Description' => $article->getDescription(),
            'Id_Categorie' => $article->getIdCategorie(),
            'Id_Administrateur' => $article->getIdAdministrateur(),
        ];
        return new JsonResponse($Article);
    }
}
