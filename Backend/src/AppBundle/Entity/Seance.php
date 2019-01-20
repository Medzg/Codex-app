<?php

namespace AppBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;

/**
 * Seance
 *
 * @ORM\Table(name="seance")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\SeanceRepository")
 */
class Seance
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="nbSalle", type="integer")
     */
    private $nbSalle;



    /**
     * @var string
     *
     * @ORM\Column(name="nbSalleRes", type="integer")
     */
    private $nbSalleRes;

    /**
     * @var string
     *
     * @ORM\Column(name="JourSeance", type="string", length=255)
     */


    private $JourSeance;

    /**
     * @return string
     */
    public function getNbHeur()
    {
        return $this->NbHeur;
    }

    /**
     * @param string $NbHeur
     */
    public function setNbHeur($NbHeur)
    {
        $this->NbHeur = $NbHeur;
    }



    /**
     * @var string
     *
     * @ORM\Column(name="nbHeur", type="integer")
     */


    private $NbHeur;

    /**
     * @return string
     */



    public function getJourSeance()
    {
        return $this->JourSeance;
    }

    /**
     * @param string $JourSeance
     */
    public function setJourSeance($JourSeance)
    {
        $this->JourSeance = $JourSeance;
    }

    /**
     * @var string
     *
     * @ORM\Column(name="nbResp", type="string", length=255)
     */
    private $nbResp;

    /**
     * @ORM\OneToMany(targetEntity="AppBundle\Entity\SCin",mappedBy="sID",orphanRemoval=true)
     */

    private $scin;

    public function __construct()
    {
        $this->scin = new ArrayCollection();
    }

    /**
     * @return string
     */
    public function getNbSalleRes()
    {
        return $this->nbSalleRes;
    }

    /**
     * @param string $nbSalleRes
     */
    public function setNbSalleRes($nbSalleRes)
    {
        $this->nbSalleRes = $nbSalleRes;
    }


    /**
     * Get id
     *
     * @return int
     */


    public function getId()
    {
        return $this->id;
    }

    /**
     * Set nbSalle
     *
     * @param string $nbSalle
     *
     * @return Seance
     */
    public function setNbSalle($nbSalle)
    {
        $this->nbSalle = $nbSalle;

        return $this;
    }

    /**
     * Get nbSalle
     *
     * @return int
     */
    public function getNbSalle()
    {
        return $this->nbSalle;
    }

    /**
     * Set nbResp
     *
     * @param string $nbResp
     *
     * @return Seance
     */
    public function setNbResp($nbResp)
    {
        $this->nbResp = $nbResp;

        return $this;
    }

    /**
     * Get nbResp
     *
     * @return string
     */
    public function getNbResp()
    {
        return $this->nbResp;
    }
}

