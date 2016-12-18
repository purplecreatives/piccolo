<?php

/**
 * Created by PhpStorm.
 * User: Zesa
 * Date: 12/15/2016
 * Time: 4:04 PM
 */
class Piccolo
{

    public $base64_image;
    private $postvariablename;

    private function __construct($postvariablename){

        $this->postvariablename = $postvariablename;

        $payload = file_get_contents('php://input');
        $data = json_decode($payload);

        $this->base64_image = $data->$postvariablename;
        $index = strpos($this->base64_image, ',') + 1;
        $this->base64_image = substr($this->base64_image, $index);

    }

    public function save($filename){

        $im = imagecreatefromstring($this->base64_image);

        if($im !== false){

            imagedestroy($im);
            return true;

        }else{

            return false;

        }

    }

    public static function init($postvariablename = 'file'){

        $postvariablename = ($postvariablename) ? $postvariablename : 'file';
        return new Piccolo($postvariablename);

    }

}