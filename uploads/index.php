<?php
/**
 * Created by PhpStorm.
 * User: Zesa
 * Date: 12/12/2016
 * Time: 2:35 PM
 */
require '../Piccolo.php';
require '../Response.php';

$piccolo = Piccolo::init('/xampp/htdocs/piccolo/uploads');
$status = $piccolo->save('sample');

echo json_encode(new Response($status, $piccolo));