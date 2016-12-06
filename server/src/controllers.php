<?php

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\HttpFoundation\ParameterBag;

$app->before(function (Request $request) {
    if (0 === strpos($request->headers->get('Content-Type'), 'application/json')) {
        $data = json_decode($request->getContent(), true);
        $request->request->replace(is_array($data) ? $data : array());
    }
});



$app->get('/', function () use ($app) {

            $dboptions = $app['db.options'];

            $mysqli = new mysqli($dboptions['host'], $dboptions['user'], $dboptions['password'], $dboptions['dbname']);
            if ($mysqli->connect_errno) {
                echo "Echec lors de la connexion à MySQL : " . $mysqli->connect_error;
                return '';
            }

            $res = $mysqli->query("SELECT * FROM score");
            $row = $res->fetch_assoc();
   
            return '';

        })
        ->bind('homepage')
;

/*
     Vérifie si un utilisateur existe
*/
$app->post('/checkuser', function (Request $request) use ($app) {

            $dboptions = $app['db.options'];

            $mysqli = new mysqli($dboptions['host'], $dboptions['user'], $dboptions['password'], $dboptions['dbname']);
            if ($mysqli->connect_errno) {
                echo "Echec lors de la connexion à MySQL : " . $mysqli->connect_error;
                return '';
            }

            $mail = $request->get("email");
            $mailParam = $mysqli->escape_string(strtolower($mail));

            $res = $mysqli->query("SELECT * FROM score WHERE mail LIKE '%$mailParam'");
            $row = $res->fetch_assoc();

            $res = empty($row);
            return new JsonResponse($res);

        })
        ->bind('checkuser')
;

$app->post('/api/registration', function (Request $request) use ($app) {

            $app["userdata"]->saveUserData($request->get("username"), $request->get("mail"));

            $response["success"] = true;
            return new JsonResponse($response);
        })
        ->bind('registration');


$app->get('/scores', function (Request $request) use ($app) {

            $dboptions = $app['db.options'];

            $mysqli = new mysqli($dboptions['host'], $dboptions['user'], $dboptions['password'], $dboptions['dbname']);
            if ($mysqli->connect_errno) {
                echo "Echec lors de la connexion à MySQL : " . $mysqli->connect_error;
                return '';
            }

            $res = $mysqli->query("SELECT * FROM score ORDER BY tempsrestant DESC");
            $rows = array();
            $position = 1;
            while ($row = $res->fetch_assoc()) {
                $row['position'] = $position;
                $rows[] = $row;
                $position++;
            }
           
            return new JsonResponse($rows);
        })
        ->bind('scores');

$app->get('/resetscore', function (Request $request) use ($app) {

    $backupdir = dirname(__FILE__).'/../storage';
    $backupfile = 'scores_backup_'.date('Y-m-d').'-'.uniqid().'.json';

    //BACKUP
    $dboptions = $app['db.options'];
    $mysqli = new mysqli($dboptions['host'], $dboptions['user'], $dboptions['password'], $dboptions['dbname']);
    $res = $mysqli->query("SELECT * FROM score ORDER BY tempsrestant DESC");
    $rows = array();
         
    while ($row = $res->fetch_assoc()) {
        $rows[] = $row;

    }

    $var = json_encode($rows);
    file_put_contents($backupdir.'/'.$backupfile, $var);

    //RESET
    $mysqli->query("DELETE FROM score WHERE 1");


    $return = 1;
    return new JsonResponse($return);

})
->bind('resetscore');

$app->post('/addscore', function (Request $request) use ($app) {

            $credentials = $request->get("credentials");
            $temps = $request->get("temps");
            $username = $credentials['username'];
            $mail = $credentials['mail'];
            $theme = $request->get('theme');
            $response = array();

            $dboptions = $app['db.options'];

            $mysqli = new mysqli($dboptions['host'], $dboptions['user'], $dboptions['password'], $dboptions['dbname']);
            if ($mysqli->connect_errno) {
                echo "Echec lors de la connexion à MySQL : " . $mysqli->connect_error;
                return '';
            }

            $mailParam = $mysqli->escape_string(strtolower($mail));
            $username = $mysqli->escape_string($username);
            $tempsrestantParam = $temps['minutes'] * 60 + $temps['seconds'];
            $theme = $mysqli->escape_string($theme);

            $res = $mysqli->query("SELECT * FROM score WHERE mail = '$mailParam'");
            $row = $res->fetch_assoc();

            if (empty($row)) {

                $mysqli->query("INSERT INTO score (username, mail, tempsrestant, theme) VALUES ('$username','$mailParam',$tempsrestantParam,'$theme')");
                $lastid = $mysqli->insert_id;

                $insertres = $mysqli->query("SELECT * FROM score WHERE id = $lastid");
                $response =  $insertres->fetch_assoc();

                //Calcul classement pour la personne
                $res2 = $mysqli->query("SELECT COUNT(*) as position FROM score WHERE tempsrestant >= $tempsrestantParam");
                $result2 =  $res2->fetch_assoc();
                $response['position'] = $result2['position'];

            }
            //Récupération score existant
            else {

                 $response =  $row;
                 $param = $response['tempsrestant'];
                 //Calcul classement pour la personne
                 $res2 = $mysqli->query("SELECT COUNT(*) as position FROM score WHERE tempsrestant >= $param");
                 $result2 =  $res2->fetch_assoc();
                 $response['position'] = $result2['position'];

            }

            return new JsonResponse($response);
        })
        ->bind('addscore');

$app->post('/robot', function (Request $request) use ($app) {

            $key = $request->request->get("key");
            $robotIp = $app['robot.ip'];
            $robotPort = $app['robot.port'];

            $socket = fsockopen($robotIp, $robotPort);

            if (!$socket)
                return "not ok";
            stream_set_blocking($socket, 0);
            stream_set_blocking(STDIN, 0);

            
            fwrite($socket, $key . "\n");

//~ do {
         
//            fwrite($socket, "S\n");

//~ }
            return $key;
        })
        ->bind('robot')
;

