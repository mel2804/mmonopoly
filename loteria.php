<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="css/estiloloteria.css">
	<script type="text/javascript" src="js/lote.js"></script>
	<title>Lotería/Casilla x</title>
</head>
<body onload="dibujar()">
	<section class="titulolot">
		<h1 class="lot">LOTERÍA</h1>
		<h3 class="instruccion">Ganale a la computadora para seguir avanzando, tu tablero está a la izquierda. Presiona iniciar</h3>
	</section>
	<section class="tablerol">
		<article class="tjugador">
		<section class="j1">
			<canvas id="imgj1" width="215%" height="195px" onclick="marcarj(this)">
				TU navegador no soporta canvas
			</canvas>
		</section>
		<section class="j2">
			<canvas id="imgj2" width="215%" height="195px" onclick="marcarj(this)">
				TU navegador no soporta canvas
			</canvas>
		</section>
		<section class="j3">
			<canvas id="imgj3" width="215%" height="195px" onclick="marcarj(this)">
				TU navegador no soporta canvas
			</canvas>
		</section>
		<section class="j4">
			<canvas id="imgj4" width="215%" height="195px" onclick="marcarj(this)">
				TU navegador no soporta canvas
			</canvas>
		</section>
		</article>
		<section class="tarjeta">
			<canvas id="imgtarjeta" width="215%" height="213px">
				TU navegador no soporta canvas
			</canvas>
			<button id="boton" name="inicio" onclick="setInterval(imgTarjeta,4000),inhabilita(),setInterval(marcarpc,1500)" >Iniciar</button>
		</section>
		<article class="tpc">
		<section class="p1">
			<canvas id="imgp1" width="215%" height="195px">
				TU navegador no soporta canvas
			</canvas>
		</section>
		<section class="p2">
			<canvas id="imgp2" width="215%" height="195px">
				TU navegador no soporta canvas
			</canvas>
		</section>
		<section class="p3">
			<canvas id="imgp3" width="215%" height="195px">
				TU navegador no soporta canvas
			</canvas>
		</section>
		<section class="p4">
			<canvas id="imgp4" width="215%" height="195px">
				TU navegador no soporta canvas
			</canvas>
		</section>
		</section>
	</section>
	
</body>
</html>