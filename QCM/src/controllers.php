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

            return "test";
        })
        ->bind('homepage')
;

$app->post('/api/registration', function (Request $request) use ($app) {

            $app["userdata"]->saveUserData($request->get("username"), $request->get("mail"));

            $response["success"] = true;
            return new JsonResponse($response);
        })
        ->bind('registration');



$app->post('/robot', function (Request $request) use ($app) {

            $socket = fsockopen("192.168.1.1", 12345);

            if (!$socket)
                return "not ok";
            stream_set_blocking($socket, 0);
            stream_set_blocking(STDIN, 0);

            $key = $request->request->get("key");


//~ do {
            fwrite($socket, $key . "\n");
//            fwrite($socket, "S\n");

//~ }
            return $key;
        })
        ->bind('robot')
;
