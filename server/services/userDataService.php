<?php

namespace Services;

use Pimple\Container;
use Pimple\ServiceProviderInterface;

Class userDataService implements ServiceProviderInterface {

    public function register(Container $app) {
        $app["userdata"] = new userDataService();
    }

    public function saveUserData($name, $mail){
        //var_dump($mail);
    }
}
