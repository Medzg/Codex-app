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


use AppBundle\Entity\Test;
use AppBundle\Entity\User;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Doctrine;


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
            return new JsonResponse($response,404);

        }



    }

    /**
     * @Route ("api/update",name="update")
     * @Method({"PUT"})
     */

    public function  UpdateAction(Request $request){

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

        $account->setCin($data->cin);
        $account->setUsername($data->username);
        $account->setPassword($data->password);
        $account->setType($data->type);
        $em->persist($account);
        if($em->flush()){
            $response = array(
                'code '=>1,
                'Message'=>'no user found'
            );
            return new JsonResponse($response,200);
        }
        else{
            $response = array(
                'code '=>0,
                'Message'=>'username or cin already used'
            );
            return new JsonResponse($response,404);
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
}