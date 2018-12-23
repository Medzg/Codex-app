<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use AppBundle\Entity\Seance;

/**
 * SCin
 *
 * @ORM\Table(name="s_cin")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\SCinRepository")
 */
class SCin
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
     * @var int
     * @ORM\Column(name="SID", type="integer")
     *
     *
     */
    private $sID;

    /**
     * @var string
     * @ORM\Column(name="cin", type="string", length=255)
     */
    private $cin;

    /**
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\Seance",inversedBy="scin")
     * @ORM\JoinColumn(name="Seance_id", referencedColumnName="id")
     */
    private $IDS;

    /**
     * @return mixed
     */
    public function getIDS()
    {
        return $this->IDS;
    }

    /**
     * @param mixed $IDS
     */
    public function setIDS($IDS)
    {
        $this->IDS = $IDS;
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
     * Set sID
     *
     * @param integer $sID
     *
     * @return SCin
     */
    public function setSID($sID)
    {
        $this->sID = $sID;

        return $this;
    }

    /**
     * Get sID
     *
     * @return int
     */
    public function getSID()
    {
        return $this->sID;
    }

    /**
     * Set cin
     *
     * @param string $cin
     *
     * @return SCin
     */
    public function setCin($cin)
    {
        $this->cin = $cin;

        return $this;
    }

    /**
     * Get cin
     *
     * @return string
     */
    public function getCin()
    {
        return $this->cin;
    }
}

