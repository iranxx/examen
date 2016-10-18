<?php

$link=mysql_connect('localhost','root','');
mysql_select_db('examen');

class conexion{
	function preguntas(){
		$host="localhost";
		$user="root";
		$pw="";
		$db="examen";

		$con=mysql_connect($host, $user, $pw) or die("no se pudo conectar a la base de datos");
		mysql_select_db($db,$con) or die ("no se encontro con la base de datos");
		$query="SELECT * FROM preguntas,respuestas WHERE respuestas.id_pregunta=preguntas.id;";

		$resultado=mysql_query($query);

		
		}

}





}

?>
