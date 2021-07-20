<?php
require_once('mysql.class.php');

///////////////////////////////////////
//Configuration 
$db_settings = array(
	'DB_HOST'   => '127.0.0.1', // db server ip
	'DB_NAME'   => 'project', // database name
	'DB_USER'   => 'CS380B', // user id
	'DB_PWD'    => 'CS380B', // user password
	'DB_PORT'   => 3306, // db port
);
$_debug = false;  // true: just for debuging my php code with existed data, not from the form in booknow.html.
$_store = "db";   //'db': store data into database;  'file': store data into file
$ROOT_DIR = 'http://140.138.77.213/~s1073320/s1073320_HW2';


////////////////////////////////////////
//create db object
if ($_store == "db")
{
	$conn = new CMySQL();
	$conn->connnect($db_settings['DB_HOST'],$db_settings['DB_USER'],$db_settings['DB_PWD'],$db_settings['DB_NAME']);
}


