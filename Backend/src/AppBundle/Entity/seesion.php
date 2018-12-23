<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * seesion
 *
 * @ORM\Table(name="seesion")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\seesionRepository")
 */
class seesion
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
     * @ORM\Column(name="type", type="string", length=255)
     */
    private $type;

    /**
     * @var string
     *
     * @ORM\Column(name="dateD", type="string", length=255)
     */
    private $dateD;

    /**
     * @var string
     *
     * @ORM\Column(name="dateF", type="string", length=255)
     */
    private $dateF;


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
     * Set type
     *
     * @param string $type
     *
     * @return seesion
     */
    public function setType($type)
    {
        $this->type = $type;

        return $this;
    }

    /**
     * Get type
     *
     * @return string
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * Set dateD
     *
     * @param string $dateD
     *
     * @return seesion
     */
    public function setDateD($dateD)
    {
        $this->dateD = $dateD;

        return $this;
    }

    /**
     * Get dateD
     *
     * @return string
     */
    public function getDateD()
    {
        return $this->dateD;
    }

    /**
     * Set dateF
     *
     * @param string $dateF
     *
     * @return seesion
     */
    public function setDateF($dateF)
    {
        $this->dateF = $dateF;

        return $this;
    }

    /**
     * Get dateF
     *
     * @return string
     */
    public function getDateF()
    {
        return $this->dateF;
    }
}

