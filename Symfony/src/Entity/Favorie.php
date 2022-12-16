<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\FavorieRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: FavorieRepository::class)]
#[ApiResource(/*security: 'is_granted("ROLE_ADMIN")'*/)]
    
class Favorie
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'favories')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Article $IdArticle = null;

    #[ORM\ManyToOne(inversedBy: 'favories')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $IdUser = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getIdArticle(): ?Article
    {
        return $this->IdArticle;
    }

    public function setIdArticle(?Article $IdArticle): self
    {
        $this->IdArticle = $IdArticle;

        return $this;
    }

    public function getIdUser(): ?User
    {
        return $this->IdUser;
    }

    public function setIdUser(?User $IdUser): self
    {
        $this->IdUser = $IdUser;

        return $this;
    }
}
