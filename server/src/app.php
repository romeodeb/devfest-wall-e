<?php


use Silex\Provider\DoctrineServiceProvider;
use Silex\Provider\MonologServiceProvider;
use Silex\Provider\ServiceControllerServiceProvider;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Services\userDataService;

//accepting JSON
$app->before(function (Request $request) {
    if (0 === strpos($request->headers->get('Content-Type'), 'application/json')) {
        $data = json_decode($request->getContent(), true);
        $request->request->replace(is_array($data) ? $data : array());
    }
});

$app->register(new ServiceControllerServiceProvider());

$app->register(new DoctrineServiceProvider(), array(
  "db.options" => $app["db.options"]
));

$app->register(new MonologServiceProvider(), array(
    "monolog.logfile" => "../storage/logs/prod.log",
    "monolog.level" => $app["log.level"],
    "monolog.name" => "application"
));

$app->register(new userDataService());

$app->error(function (\Exception $e, $code) use ($app) {
   // $app['monolog']->addError($e->getMessage());
   // $app['monolog']->addError($e->getTraceAsString());
    return new JsonResponse(array("statusCode" => $code, "message" => $e->getMessage(), "stacktrace" => $e->getTraceAsString()));
});
return $app;

