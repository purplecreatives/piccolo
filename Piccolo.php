<?php

/**
 * Created by PhpStorm.
 * User: Zesa
 * Date: 12/15/2016
 * Time: 4:04 PM
 */
class Piccolo
{

    public $fileextension;
    public $mime;
    public $base64_image;
    public $uploaddirectory;

    private $postvariablename;


    private function __construct($options = array()){

        //Get configurations
        $postvariablename = $this->postvariablename = $options['postvariablename'];
        $this->uploaddirectory = $options['uploaddirectory'];

        //Get http payload
        $payload = file_get_contents('php://input');
        $data = json_decode($payload);

        //Get file content
        $raw_base64_image = $data->$postvariablename;

        $index_colon = strpos($raw_base64_image, ':') + 1;
        $index_semicolon = strpos($raw_base64_image, ';') + 1;
        $index_comma = strpos($raw_base64_image, ',') + 1;

        //Get MIME
        $this->mime = substr($raw_base64_image, $index_colon, $index_semicolon - $index_colon);

        //Get base64 image text
        $this->base64_image = substr($raw_base64_image, $index_comma);

        //Get file extension from mime
        $this->fileextension = mime_content_type($this->mime);

    }


    public function save($filename_no_extension){

        $im = imagecreatefromstring($this->base64_image);
        $path = $this->uploaddirectory.'/'.$filename_no_extension.$this->fileextension;

        if($im !== false){

            $status = imagepng($im, $path);
            imagedestroy($im);
            return $status;

        }else{

            return false;

        }

    }


    public static function init($postvariablename = 'file'){

        $postvariablename = ($postvariablename) ? $postvariablename : 'file';
        return new Piccolo($postvariablename);

    }

}