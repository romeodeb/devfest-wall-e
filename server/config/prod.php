<?php

$app['log.level'] = Monolog\Logger::ERROR;

$app['db.options'] = array(
  "driver" => "pdo_mysql",
  'charset'  => 'utf8',
  "user" => "root",
  "password" => "root",
  "dbname" => "devfest",
  "host" => "127.0.0.1",
);

//IP à changer pour commander le Wall-E ou Zumo
$app['robot.ip'] = '192.168.1.100';
$app['robot.port'] = 8888;
