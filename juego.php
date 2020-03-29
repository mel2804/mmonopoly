<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Documento sin título</title>
		<script src="js/juego.js"></script>
        <link rel="stylesheet" type="text/css" href="css/juego.css">
    </head>
	<body>
    	<div class="contenedorImagen alinearHorizontal">
        	<img src="img/a1.jpg" id='imagen'>
        </div>
        <div class="contenedorPalabra alinearHorizontal" id="contenedorPalabra">
        	<div id="palabraSecreta" class="palabraSecreta centrarDiv"></div>
            <div id="botonJugar" class="botonJugar centrarDiv borderBox letraNegrita centrarTexto borderRadius-5 cursorPointer">Jugar de Nuevo</div>
            <div class="contenedorNoIntentos centrarTexto">
        		<div class="tituloNoIntentos">
            		Numero de Intentos
            	</div>
            	<div class="noIntentos centrarDiv borderBox" id='noIntentos'>
            		6
            	</div>	
        	</div>
        </div>
        <div class="contenedorLetras centrarDiv borderBox letraNegrita" id="contenedorLetras">
        </div>
	</body>
</html>
