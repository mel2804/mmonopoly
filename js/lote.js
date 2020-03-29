var rjugador1;
var rjugador2;
var rjugador3;
var rjugador4;
var rtarjeta;
var rpc1;
var rpc2;
var rpc3;
var rpc4;
var guardarj = []
var guardarp = []
var guardart = []

function ganaste() {
	localStorage.setItem("ganado",1);
	location.replace("index.php");
}

function perdiste() {
	localStorage.setItem("ganado",0);
	location.replace("index.php");
}

function cargarImg() {
	var listaimg = ["michi-burrito.jpg",
					"michi-chef.jpg",
					"michi-graduado.jpg",
					"michi-heroe.jpg",
					"michi-lector.jpg",
					"michi-pintor.jpg",
					"michi-potter.jpg",
					"michi-programador.jpg",
					"michi-sirena.jpg",
					"michi-unicornio.jpg",
					"pusheen-conductor.jpg"];
	var i = Math.floor(Math.random()*11);
	return listaimg[i];
}
function reparticionj() {
 	var cij=cargarImg();

 	for (var i = 0; i <guardarj.length; i++) {
 		if (cij==guardarj[i]) {
 			cij=cargarImg();
 			i=0;
 		}
 	}

 	guardarj.push(cij);
 	return cij;
}

function reparticionp() {
 	var cip=cargarImg();
 	
 	for (var i = 0; i <guardarp.length; i++) {
 		if (cip==guardarp[i]) {
 			cip=cargarImg();
 			i=0;
 		}
 	}
 	guardarp.push(cip);
 	return cip;
}

function reparticiont() {
 	var cit=cargarImg();
 	
 	for (var i = 0; i <guardart.length; i++) {
 		if (cit==guardart[i]) {
 			cit=cargarImg();
 			i=0;
 		}
 	}
 	guardart.push(cit);
 	return cit;
}


function dibujar() {
	var canvasj1 = document.getElementById("imgj1");
	var ctxj1 = canvasj1.getContext("2d");

	var imgj1 = new Image();
	imgj1.src = "img/"+reparticionj();
	rjugador1 = (imgj1.src).toString();
	ctxj1.drawImage(imgj1,0,0,canvasj1.width,canvasj1.height);
	imgj1.onload = function(){
  			ctxj1.drawImage(imgj1, 0, 0,canvasj1.width,canvasj1.height);
		}

	var canvasj2 = document.getElementById("imgj2");
	var ctxj2 = canvasj2.getContext("2d");

	var imgj2 = new Image();
	imgj2.src = "img/"+reparticionj();
	rjugador2 = (imgj2.src).toString();
	ctxj2.drawImage(imgj2,0,0,canvasj2.width,canvasj2.height);
	
	imgj2.onload = function(){
  		ctxj2.drawImage(imgj2, 0, 0,canvasj2.width,canvasj2.height);
	}
	
	var canvasj3 = document.getElementById("imgj3");
	var ctxj3 = canvasj3.getContext("2d");

	var imgj3 = new Image();
	imgj3.src = "img/"+reparticionj();
	rjugador3 = (imgj3.src).toString();
	ctxj3.drawImage(imgj3,0,0,canvasj3.width,canvasj3.height);
	
	imgj3.onload = function(){
  			ctxj3.drawImage(imgj3, 0, 0,canvasj3.width,canvasj3.height);
		}
	
	var canvasj4 = document.getElementById("imgj4");
	var ctxj4 = canvasj4.getContext("2d");

	var imgj4 = new Image();
	imgj4.src = "img/"+reparticionj();
	rjugador4 = (imgj4.src).toString();
	ctxj4.drawImage(imgj4,0,0,canvasj4.width,canvasj4.height);
	
	imgj4.onload = function(){
  			ctxj4.drawImage(imgj4, 0, 0,canvasj4.width,canvasj4.height);
		}

	var canvasp1 = document.getElementById("imgp1");
	var ctxp1 = canvasp1.getContext("2d");

	var imgp1 = new Image();
	imgp1.src = "img/"+reparticionp();
	rpc1 = (imgp1.src).toString();
	ctxp1.drawImage(imgp1,0,0,canvasp1.width,canvasp1.height);
	
	imgp1.onload = function(){
  			ctxp1.drawImage(imgp1, 0, 0,canvasp1.width,canvasp1.height);
		}

	var canvasp2 = document.getElementById("imgp2");
	var ctxp2 = canvasp2.getContext("2d");

	var imgp2 = new Image();
	imgp2.src = "img/"+reparticionp();
	rpc2 = (imgp2.src).toString();
	ctxp2.drawImage(imgp2,0,0,canvasp2.width,canvasp2.height);
	
	imgp2.onload = function(){
  			ctxp2.drawImage(imgp2, 0, 0,canvasp2.width,canvasp2.height);
		}

	var canvasp3 = document.getElementById("imgp3");
	var ctxp3 = canvasp3.getContext("2d");

	var imgp3 = new Image();
	imgp3.src = "img/"+reparticionp();
	rpc3 = (imgp3.src).toString();
	ctxp3.drawImage(imgp3,0,0,canvasp3.width,canvasp3.height);
	
	imgp3.onload = function(){
  			ctxp3.drawImage(imgp3, 0, 0,canvasp3.width,canvasp3.height);
		}

	var canvasp4 = document.getElementById("imgp4");
	var ctxp4 = canvasp4.getContext("2d");	

	var imgp4 = new Image();
	imgp4.src = "img/"+reparticionp();
	rpc4 = (imgp4.src).toString();
	ctxp4.drawImage(imgp4,0,0,canvasp4.width,canvasp4.height);
	
	imgp4.onload = function(){
  			ctxp4.drawImage(imgp4, 0, 0,canvasp4.width,canvasp4.height);
		}
}

function inhabilita() {
	document.getElementById("boton").disabled = true;
}

function imgTarjeta(){

	var canvasT = document.getElementById("imgtarjeta");
	var ctxT = canvasT.getContext("2d");

	var imgT = new Image();
	imgT.src = "img/"+reparticiont();
	rtarjeta = (imgT.src).toString();
	ctxT.drawImage(imgT,0,0,canvasT.width,canvasT.height);
	
	imgT.onload = function(){
  			ctxT.drawImage(imgT, 0, 0,canvasT.width,canvasT.height);
		}
	
}

function marcarpc() {

}

function marcarj(b) {
	var jug = (b.id).toString();
	switch (jug){
		case "imgj1":
			if (rjugador1==rtarjeta) {
				var canvasj1 = document.getElementById("imgj1");
				var ctxj1 = canvasj1.getContext("2d");

				var imgj1 = new Image();
				imgj1.src = "img/tache.jpg";
				rjugador1 = (imgj1.src).toString();
				ctxj1.drawImage(imgj1,0,0,canvasj1.width,canvasj1.height);
				imgj1.onload = function(){
			  			ctxj1.drawImage(imgj1, 0, 0,canvasj1.width,canvasj1.height);
					}
			}

			break;

		case "imgj2":
			if (rjugador2==rtarjeta) {
				var canvasj2 = document.getElementById("imgj2");
				var ctxj2 = canvasj2.getContext("2d");

				var imgj2 = new Image();
				imgj2.src = "img/tache.jpg";
				rjugador2 = (imgj2.src).toString();
				ctxj2.drawImage(imgj2,0,0,canvasj2.width,canvasj2.height);
				
				imgj2.onload = function(){
			  		ctxj2.drawImage(imgj2, 0, 0,canvasj2.width,canvasj2.height);
				}
			}
			break;

		case "imgj3":
			if (rjugador3==rtarjeta) {
				var canvasj3 = document.getElementById("imgj3");
				var ctxj3 = canvasj3.getContext("2d");

				var imgj3 = new Image();
				imgj3.src = "img/tache.jpg";
				rjugador3 = (imgj3.src).toString();
				ctxj3.drawImage(imgj3,0,0,canvasj3.width,canvasj3.height);
				
				imgj3.onload = function(){
			  			ctxj3.drawImage(imgj3, 0, 0,canvasj3.width,canvasj3.height);
					}
			}
			break;

		case "imgj4":
			if (rjugador4==rtarjeta) {
				var canvasj4 = document.getElementById("imgj4");
				var ctxj4 = canvasj4.getContext("2d");

				var imgj4 = new Image();
				imgj4.src = "img/tache.jpg";
				rjugador4 = (imgj4.src).toString();
				ctxj4.drawImage(imgj4,0,0,canvasj4.width,canvasj4.height);
				
				imgj4.onload = function(){
			  			ctxj4.drawImage(imgj4, 0, 0,canvasj4.width,canvasj4.height);
					}
			}
			break;

	}
	if (rjugador1==rjugador2 && rjugador2==rjugador3 && rjugador3==rjugador4 && rjugador4==rjugador1) {
		setTimeout(ganaste,1500);
	}
}

function marcarpc() {
	if (rpc1 == rtarjeta) {
		var canvasp1 = document.getElementById("imgp1");
		var ctxp1 = canvasp1.getContext("2d");

		var imgp1 = new Image();
		imgp1.src = "img/tache.jpg";
		rpc1 = (imgp1.src).toString();
		ctxp1.drawImage(imgp1,0,0,canvasp1.width,canvasp1.height);
		
		imgp1.onload = function(){
	  			ctxp1.drawImage(imgp1, 0, 0,canvasp1.width,canvasp1.height);
			}
	}
	if (rpc2 == rtarjeta) {
		var canvasp2 = document.getElementById("imgp2");
		var ctxp2 = canvasp2.getContext("2d");

		var imgp2 = new Image();
		imgp2.src = "img/tache.jpg";
		rpc2 = (imgp2.src).toString();
		ctxp2.drawImage(imgp2,0,0,canvasp2.width,canvasp2.height);
		
		imgp2.onload = function(){
	  			ctxp2.drawImage(imgp2, 0, 0,canvasp2.width,canvasp2.height);
			}
	}
	if (rpc3 == rtarjeta) {
		var canvasp3 = document.getElementById("imgp3");
		var ctxp3 = canvasp3.getContext("2d");

		var imgp3 = new Image();
		imgp3.src = "img/tache.jpg";
		rpc3 = (imgp3.src).toString();
		ctxp3.drawImage(imgp3,0,0,canvasp3.width,canvasp3.height);
		
		imgp3.onload = function(){
	  			ctxp3.drawImage(imgp3, 0, 0,canvasp3.width,canvasp3.height);
			}
	}
	if (rpc4 == rtarjeta) {
		var canvasp4 = document.getElementById("imgp4");
		var ctxp4 = canvasp4.getContext("2d");	

		var imgp4 = new Image();
		imgp4.src = "img/tache.jpg";
		rpc4 = (imgp4.src).toString();
		ctxp4.drawImage(imgp4,0,0,canvasp4.width,canvasp4.height);
		
		imgp4.onload = function(){
	  			ctxp4.drawImage(imgp4, 0, 0,canvasp4.width,canvasp4.height);
			}
	}
	if (rpc1==rpc2 && rpc2==rpc3 && rpc3==rpc4 && rpc4==rpc1) {
		setTimeout(perdiste,1500);
	}
}