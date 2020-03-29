var tableron = (function () {
	var canvas, ctx, tablero = new Image(), perso = new Image(), dad = new Image(), posX, posY, tirado, posper, rei = new Image(), dads;

	function init() {
		canvas = document.getElementById('canvas');
		ctx = canvas.getContext("2d");
		addListener(canvas, 'click', aver);
		posX=0;
		posY=0;
		tirado=false;
		dads=0;
		updateperso(0);
		dibtod();
	}

	function updateperso(num) {
		posper=localStorage.getItem("posicion");
		if(localStorage.getItem("ganado")==2){
			localStorage.clear();
			localStorage.setItem("posicion",0);
			posper=0;
		}
		posper = parseInt(posper)+parseInt(num);
		if(localStorage.getItem("ganado")==0){
			posper=localStorage.getItem("posicion")-localStorage.getItem("original");
			localStorage.setItem("ganado",1);
		}
		localStorage.setItem("original",num);
		if(posper>30){
			posper=30;
		}
		if(posper==0){
			posX=90;
			posY=80;
		}else if(posper==1){
			posX=220;
			posY=80;
		}else if(posper==2){
			posX=310;
			posY=80;
		}else if(posper==3){
			posX=400;
			posY=80;
		}else if(posper==4){
			posX=490;
			posY=80;
		}else if(posper==5){
			posX=580;
			posY=80;
		}else if(posper==6){
			posX=660;
			posY=80;
		}else if(posper==7){
			posX=750;
			posY=80;
		}else if(posper==8){
			posX=840;
			posY=80;
		}else if(posper==9){
			posX=920;
			posY=80;
		}else if(posper==10){
			posX=920;
			posY=160;
		}else if(posper==11){
			posX=920;
			posY=250;
		}else if(posper==12){
			posX=840;
			posY=250;
		}else if(posper==13){
			posX=750;
			posY=250;
		}else if(posper==14){
			posX=660;
			posY=250;
		}else if(posper==15){
			posX=570;
			posY=250;
		}else if(posper==16){
			posX=480;
			posY=250;
		}else if(posper==17){
			posX=390;
			posY=250;
		}else if(posper==18){
			posX=300;
			posY=250;
		}else if(posper==19){
			posX=200;
			posY=250;
		}else if(posper==20){
			posX=100;
			posY=250;
		}else if(posper==21){
			posX=100;
			posY=350;
		}else if(posper==22){
			posX=100;
			posY=440;
		}else if(posper==23){
			posX=200;
			posY=440;
		}else if(posper==24){
			posX=300;
			posY=440;
		}else if(posper==25){
			posX=400;
			posY=440;
		}else if(posper==26){
			posX=500;
			posY=440;
		}else if(posper==27){
			posX=600;
			posY=440;
		}else if(posper==28){
			posX=710;
		posY=440;
		}else if(posper==29){
			posX=820;
			posY=440;
		}else if(posper==30){
			posX=960;
			posY=440;
		}
		localStorage.setItem("posicion",posper);
		dibtod();
	}

	tablero.onload = function() {
		ctx.drawImage(tablero,0,0);// medidas 1150x553
	}

	perso.onload = function() {
		ctx.drawImage(perso,posX,posY,50,50);
	}

	dad.onload = function() {
		ctx.drawImage(dad,600,560,90,90);
	}

	rei.onload = function(){
		ctx.drawImage(rei,750,560);
	}

	function dibtod() {
		tablero.src = 'img/tablerongo.png';
		perso.src = 'img/per.png';
		dad.src = 'img/1.png';
		rei.src = 'img/rei.png';
		ctx.fillStyle="rgb(59,59,59)";
        ctx.font="bold 16px Arial";
		ctx.fillText("Haz click en el dado para avanzar",300,600);
	}

	function addListener(element, type, expression, bubbling) {
        bubbling = bubbling || false;

        if (window.addEventListener) {
            element.addEventListener(type, expression, bubbling);
        } else if (window.attachEvent) {
            element.attachEvent('on' + type, expression);
        }
    }

	function aver(e) {
		var x=e.layerX;
		var y=e.layerY;
		if((x>750 && x<956) && (y>560 && y<630)){
			localStorage.clear();
			localStorage.setItem("posicion",0);
			updateperso(0);
		}
		if(!tirado){
			if((x>600 && x<690) && (y>560 && y<650)){
				tirar();
			}
		}
	}

	function tirar() {
		if(posper==30){
			alert("Ganaste");
		}else{
			var nel=setInterval(function () {
				var n = Math.floor(Math.random()*6)+1;
				dad.src = 'img/'+n+'.png';
				ctx.drawImage(dad,600,560,90,90);
				dads++;
				if(dads>=10){
					updateperso(n);
					n=Math.floor(Math.random()*6)+1;
					if(n==1){
						alert("Jugarás ahorcado");
						localStorage.setItem("ganado",2);
						clearInterval(nel);
						location.replace("juego.php");
					}else if(n==2){
						alert("Jugarás gato");
						localStorage.setItem("ganado",2);
						clearInterval(nel);
						location.replace("gato.php");
					}else if(n==3){
						alert("Jugarás loteria");
						localStorage.setItem("ganado",2);
						clearInterval(nel);
						location.replace("loteria.php");
					}else if(n==4){
						alert("Jugarás simon dice");
						localStorage.setItem("ganado",2);
						clearInterval(nel);
						location.replace("simon.php");
					}else if(n==5){
						alert("Jugarás memorama");
						localStorage.setItem("ganado",2);
						clearInterval(nel);
						location.replace("memorama.php");
					}else if(n==6){
						alert("Jugarás buscaminas");
						localStorage.setItem("ganado",2);
						clearInterval(nel);
						location.replace("mina.php");
					}
				}
			},500);
		}
	}

	return{
		init : init
	}
})();