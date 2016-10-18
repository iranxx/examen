
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>examen</title>
	 <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	 <link rel="stylesheet" href="estilo.css" >
</head>
<body>

<section class="preguntas">
	<article>
		
<?php

include ('conecta.php');
$Con=new conexion();

$Con->preguntas();

?>
	</article>


	
	<article class="calificacion">
	<button class="califica">Califica</button>
	<h2 class="calificacion"></h2>
</article>
</section>
	

	<script type="text/javascript" src="jquery.js"></script>
    <script type="text/javascript" src="codigo.js"></script>
</body>
</html>