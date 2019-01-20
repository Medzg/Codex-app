<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Reservation
 *
 * @ORM\Table(name="reservation")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\ReservationRepository")
 */
class Reservation
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
     * @ORM\Column(name="Seance", type="string", length=255)
     */
    private $seance;

    /**
     * @var string
     *
     * @ORM\Column(name="cin", type="string", length=255)
     */
    private $cin;

    /**
     * @var string
     *
     * @ORM\Column(name="heureDeResrva", type="string", length=255)
     */
    private $heureDeResrva;


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
     * Set seance
     *
     * @param string $seance
     *
     * @return Reservation
     */
    public function setSeance($seance)
    {
        $this->seance = $seance;

        return $this;
    }

    /**
     * Get seance
     *
     * @return string
     */
    public function getSeance()
    {
        return $this->seance;
    }

    /**
     * Set cin
     *
     * @param string $cin
     *
     * @return Reservation
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

    /**
     * Set heureDeResrva
     *
     * @param string $heureDeResrva
     *
     * @return Reservation
     */
    public function setHeureDeResrva($heureDeResrva)
    {
        $this->heureDeResrva = $heureDeResrva;

        return $this;
    }

    /**
     * Get heureDeResrva
     *
     * @return string
     */
    public function getHeureDeResrva()
    {
        return $this->heureDeResrva;
    }
}

