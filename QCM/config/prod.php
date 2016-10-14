<?php

$app['log.level'] = Monolog\Logger::ERROR;
$app['db.options'] = array(
  "driver" => "pdo_mysql",
  "user" => "root",
  "password" => "root",
  "dbname" => "neoqcm",
  "host" => "127.0.0.1",
);
