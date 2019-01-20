<?php
/**
 * Created by PhpStorm.
 * User: medzg
 * Date: 03/12/18
 * Time: 8:35 PM
 */


namespace AppBundle\Controller;
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 100000');
header('Access-Control-Allow-Headers:  Content-Type, Authorization, X-Requested-With');


use AppBundle\Entity\Grade;
use AppBundle\Entity\Professeur;
use AppBundle\Entity\Reservation;
use AppBundle\Entity\SCin;
use AppBundle\Entity\Seance;
use AppBundle\Entity\Test;
use AppBundle\Entity\User;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Doctrine;
use AppBundle\Entity\seesion;


class HomeController extends Controller{

    /**
     *
     * @Route("/api/login",name="Login")
     * @Method({"POST"})
     *
     * @return JsonResponse
     */
    public function HomeAction(Request $request){



      $Var = $request->getContent();
      $Data = json_decode($Var);

        $em = $this->getDoctrine()->getManager();
        $res = $em->getRepository(User::class)->findOneBy(["username"=>$Data->username,"password"=>$Data->password]);


       if ($res == NULL) {
            $response = array(
                'code'=>"0",
                'message'=>"Check your login and password"

            );

            return new JsonResponse($response,200);
        }
        elseif($res->getType()=='A'){
            $response = array(
                'code'=>"1",
                 'username'=>$Data->username,
                  'Token'=>md5(uniqid(mt_rand(),true))

            );

            return new JsonResponse($response,200);
        }
        else{
            $response = array(
                'code'=>"2",
                'username'=>$Data->username,
                'Token'=>md5(uniqid(mt_rand(),true))

            );

            return new JsonResponse($response,200);
        }



    }

    /**
     *
     * @Route ("api/users",name="users")
     * @Method({"GET"})
     */

    public function ListAction(){

        $em = $this->getDoctrine()->getManager();
        $users = $em->getRepository(User::class)->findAll();
        if(!count($users)){
            $response = array(
                'code'=> "0",
                "Message"=>"no user found"
            );
            return new JsonResponse($response,Response::HTTP_NOT_FOUND);
        }

        $data = $this->get('jms_serializer')->serialize($users,'json');
        $response = array(
            'code' => '1',
            'result'=>json_decode($data),
        );
        return new JsonResponse($response,200);


    }

    /**
     * @Route("api/create",name="create")
     * @Method({"POST"})
     */

    public function  CreateAction(Request $request){

        $var = $request->getContent();
        $data = json_decode($var);
        $em = $this->getDoctrine()->getManager();
        $check = $em->getRepository(User::class)->findOneBy(["cin"=>$data->cin]);
        if($check == null){
            /**
             * $account User
             */
            $account = new User();
            $account->setCin($data->cin);
            $account->setUsername($data->username);
            $account->setPassword($data->password);
            $account->setType($data->type);
            $em->persist($account);
            $em->flush();
            $response = array(
                'code'=>'1',
                'message'=> 'ajout avec succsse'
            );
            return new JsonResponse($response,200);

        }
        else{
            $response = array('code'=>'0',
                'message'=>'this accoutn already existed'
                );
            return new JsonResponse($response,200);

        }



    }

    /**
     * @Route ("api/update",name="update")
     * @Method({"POST"})
     */

    public function  UpdateAction(Request $request){

        $var = $request->getContent();
        $data = json_decode($var);
        $em = $this->getDoctrine()->getManager();
        /**
         * $account User
         */
        $account = $em->getRepository(User::class)->findOneBy(["cin"=>$data->cin]);
        if($account != null){

            $account->setUsername($data->username);
            $account->setPassword($data->password);
            $account->setType($data->type);
            $em->persist($account);
            $em->flush();
            $response = array(
                'code'=>'1',
                'message'=>'user update'
            );

            return new JsonResponse($response,200);
        }
        else{

            $response = array('code'=>'0',
                'messsage'=>'error updating');
            return new JsonResponse($response,200);

        }



    }

    /**
     * @Route ("api/delete",name="delete")
     * @Method({"DELETE"})
     */


    public function  DeleteAction(Request $request){

        $var = $request->getContent();
        $data = json_decode($var);
        $em = $this->getDoctrine()->getManager();
        $account = $em->getRepository(User::class)->find($data->id);
        if(empty($account)){
            $response = array(
                'code '=>-1,
                'Message'=>'no user found'
            );
            return new JsonResponse($response,404);
        }

        $em->remove($account);
        $em->flush();
        $response=array(
            'code'=>0,
            'message'=>'post deleted !'
        );
        return new JsonResponse($response,200);



    }
    /**
     * @Route ("api/getOne",name="delete")
     * @Method({"POST"})
     */
    public function GetOneAction(Request $request){
        $Var = $request->getContent();
        $Data = json_decode($Var);

        $em = $this->getDoctrine()->getManager();
        $res = $em->getRepository(User::class)->findOneBy(["username"=>$Data->username]);

        $data = $this->get('jms_serializer')->serialize($res,'json');
        $response= array(
            'code'=>1,
            'message'=>$data
        );
        return new JsonResponse($response,200);





    }

    /**
     * @Route("api/createSes",name="creates")
     * @Method({"POST"})
     */
    public function CreateSes(Request $request){
        $Var = $request->getContent();
        $Data = json_decode($Var);

        $em = $this->getDoctrine()->getManager();
        $event = new seesion();
        $event->setType($Data->type);
        $event->setDateD($Data->DateD);
        $event->setDateF($Data->DateF);
        $em->persist($event);
        $em->flush();

        $response = array(
            'code'=>'1',
            'message'=>'seesion created'
        );
        return new JsonResponse($response,200);

    }
    /**
     *@Route("api/getSes",name="getSes")
     * @Method({"GET"})
     */
    public function GetSessionAction(){
        $em = $this->getDoctrine()->getManager();
        $ses = $em->getRepository(seesion::class)->findAll();
        $type = '';
        foreach ($ses as $s){
            $type = $s->getType();
        }
        if(!$ses){
            $response = array(
                'code'=>'0',
                "message"=>"pas session"
            );
            return new JsonResponse($response,200);
        }
        else{

            
        
        $response= array(
            'code'=> 1,
            'message'=>$type
        );
        return new JsonResponse($response,200);
        }

    }
    /**
     * @Route("api/createSeas",name="createSeance")
     * @Method({"POST"})
     */
    public function CreateSeanceAction(Request $request){

        $Var = $request->getContent();
        $Data = json_decode($Var);

        $em = $this->getDoctrine()->getManager();

        $sean = new Seance();
        $sean->setNbResp($Data->nbRes);
        $sean->setNbSalle($Data->nbSalle);
        $sean->setJourSeance($Data->JourS);
        $em->persist($sean);
        $em->flush();
        $cins = $Data->cin;
        $req = $em->getRepository(Seance::class)->findOneBy(["JourSeance"=>$Data->JourS]);
        if($req){
         $id = $req->getId();
         foreach ($cins as $cin){
             $x = new SCin();
             $x->setCin($cin);
             $x->setSID($id);
             $x->setSID($id);
             $em->persist($x);
             $em->flush();
            }
        }
        $response= array(
            'code'=> 1,
            'message'=>"works"
        );


        return new JsonResponse($response,200);

    }

    /**
     * @Route("api/getSea",name="getSeance")
     * @Method({"POST"})
     */
    public function GetSeanceAction(Request $request){

        $Var = $request->getContent();
        $Data = json_decode($Var);

        $em = $this->getDoctrine()->getManager();
        $req = $em->getRepository(Seance::class)->findOneBy(["JourSeance"=>$Data->JourS]);
        if ($req){
            $nbsr= $req->getNbSalleRes();
            $nbs = $req->getNbSalle();
            if($nbsr <$nbs){
            $response = array(
                'code'=>'1',
                'message'=>'seance existe'
            );
            return new JsonResponse($response,200);
        }
        else{
            $response = array(
                'code'=>'2',
                'message'=>'tout seasnce reserver'
            );
            return new JsonResponse($response,200);

        }
        }
        else{
            $response = array(
                'code'=>'0',
                'message'=>'seance does not exisite'
        );
            return new JsonResponse($response,200);

        }

    }

    /**
     * @Route("api/createReserv",name="createReserv")
     * @Method({"POST"})
     */
    public function CreateReservationAction (Request $request)

    {
        $Var = $request->getContent();
        $Data = json_decode($Var);

        $em = $this->getDoctrine()->getManager();

        $prof = $em->getRepository(Professeur::class)->findOneBy(["cin"=>$Data->cin]);
        $gradeP = $prof->getGrade();
        $grade = $em->getRepository(Grade::class)->findOneBy($gradeP);
        $seance = $em->getRepository(Seance::class)->findOneBy(["seance"=>$Data->seance]);



        if($prof->setHeurRes()< $grade->getHeure()) {
            if ($seance->getNbHeur() > 0) {
                $resv = new Reservation();
                $resv->setCin($Data->cin);
                $resv->setSeance($Data->seance);
                $resv->setHeureDeResrva($Data->heur);
                $em->persist($resv);
                $he = $prof->getHeurRes();
                $he = $he + 2;
                $prof->setHeurRes($he);

                $em->persist($prof);

                $he=$seance->getNbHeur();
                $he=$he-2;
                $seance->setNbHeur($he);
                $em->persist($seance);
                $em->flush();
                $response = array(
                    'code' => '1',
                    'message' => 'Reservation Terminer'
                );
                return new JsonResponse($response, 200);

            }
            else{
                $response = array(
                    'code' => '2',
                    'message' => 'Seance Complete'
                );
                return new JsonResponse($response, 200);

            }
        }
        else{
            $response = array(
                'code'=>'0',
                'message'=>'Professeur Terminer Tous les heure'
            );
            return new JsonResponse($response,200);


        }

    }
    /**
     * @Route("api/GetAllRes",name="GetAllRes")
     * @Method({"GET"})
     */
    public function GetAllReservationAction ()

    {
        $em = $this->getDoctrine()->getManager();
        $res = $em->getRepository(Reservation::class)->findAll();
        if($res!=null){


        $data = $this->get('jms_serializer')->serialize($res,'json');
        $response= array(
            'code'=>1,
            'message'=>json_decode($data)
        );
        return new JsonResponse($response,200);
        }
        else{
            $response= array(
                'code'=>0,
                'message'=>'pas resvervation'
            );
            return new JsonResponse($response,200);
        }

        }







    /**
     * @Route("api/GetByProf",name="GetByProf")
     * @Method({"POST"})
     */
    public function GetByProfAction (Request $request)

    {
        $Var = $request->getContent();
        $Data = json_decode($Var);

        $em = $this->getDoctrine()->getManager();
        $res = $em->getRepository(Reservation::class)->findBy(["cin"=>$Data->cin]);
        $data = $this->get('jms_serializer')->serialize($res,'json');
        if($data!=null){
        $response= array(
            'code'=>1,
            'message'=>json_decode($data)
        );
        return new JsonResponse($response,200);
        }
        else{

            $response= array(
                'code'=>0,
                'message'=>"Pas de professeur trouver avec cette cin"
            );
            return new JsonResponse($response,200);
        }



    }


    /**
     * @Route("api/GetBySeance",name="GetBySeance")
     * @Method({"POST"})
     */
    public function GetBySeanceAction (Request $request)

    {
        $Var = $request->getContent();
        $Data = json_decode($Var);

        $em = $this->getDoctrine()->getManager();
        $res = $em->getRepository(Reservation::class)->findBy(["seance"=>$Data->seance]);
        $data = $this->get('jms_serializer')->serialize($res,'json');
        if($data!=null){
            $response= array(
                'code'=>1,
                'message'=>json_decode($data)
            );
            return new JsonResponse($response,200);
        }
        else{

            $response= array(
                'code'=>0,
                'message'=>"Pas de professeur trouver avec cette cin"
            );
            return new JsonResponse($response,200);
        }



    }


    /**
     * @Route("api/DeleteReser",name="DeleteReser")
     * @Method({"POST"})
     */
    public function DeleteReserAction (Request $request)
    {
        $Var = $request->getContent();
        $Data = json_decode($Var);

        $em = $this->getDoctrine()->getManager();
        $res = $em->getRepository(Reservation::class)->findOneBy(["cin"=>$Data->cin]);

        if($res!=null){
          $em->remove($res);
          $em->flush();
            $response= array(
                'code'=>1,
                'message'=>'Object deleted'
            );
            return new JsonResponse($response,200);
        }
        else{

            $response= array(
                'code'=>0,
                'message'=>"pas de objet pour supprimer"
            );
            return new JsonResponse($response,200);
        }



    }


















}