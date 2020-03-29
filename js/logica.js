var juego = (function () {
	var canvas, ctx, loc = [], circulo=new Image(), tache=new Image(), ganado;

	function init() {
		canvas = document.getElementById('canvas');
		ctx = canvas.getContext("2d");
		iniciar();
	}
	function iniciar() {
		ctx.fillRect(225,25,5,610);
		ctx.fillRect(430,25,5,610);
		ctx.fillRect(25,225,610,5);
		ctx.fillRect(25,430,610,5);
		circulo.src = 'img/c.png';
		tache.src = 'img/t.png';
		ganado=false;
		addListener(canvas, 'click', aver);
		for (var i = 0; i < 9; i++) {
			loc[i]=0;
		}
	}

	//window.onload = alert(localStorage.getItem("aver"));

	function addListener(element, type, expression, bubbling) {
        bubbling = bubbling || false;

        if (window.addEventListener) {
            element.addEventListener(type, expression, bubbling);
        } else if (window.attachEvent) {
            element.attachEvent('on' + type, expression);
        }
    }

	function aver(e) {
		if(!ganado){
			var x = e.layerX;
			var y = e.layerY;
			var solo = true;
			if((x>25 && x<225) && (y>25 && y<225)){
				if(loc[0]==0){
					loc[0]=1;
					ctx.drawImage(circulo, 25, 25, 200, 200);
				}else{
					solo = false;
				}
			}else if((x>230 && x<430) && (y>25 && y<225)){
				if(loc[1]==0){
					loc[1]=1;
					ctx.drawImage(circulo, 230, 25, 200, 200);
				}else{
					solo = false;
				}
			}else if((x>435 && x<635) && (y>25 && y<225)){
				if(loc[2]==0){
					loc[2]=1;
					ctx.drawImage(circulo, 435, 25, 200, 200);
				}else{
					solo = false;
				}
			}else if((x>25 && x<225) && (y>230 && y<430)){
				if(loc[3]==0){
					loc[3]=1;
					ctx.drawImage(circulo, 25, 230, 200, 200);
				}else{
					solo = false;
				}
			}else if((x>230 && x<430) && (y>230 && y<430)){
				if(loc[4]==0){
					loc[4]=1;
					ctx.drawImage(circulo, 230, 230, 200, 200);
				}else{
					solo = false;
				}
			}else if((x>435 && x<635) && (y>230 && y<430)){
				if(loc[5]==0){
					loc[5]=1;
					ctx.drawImage(circulo, 435, 230, 200, 200);
				}else{
					solo = false;
				}
			}else if((x>25 && x<225) && (y>435 && y<635)){
				if(loc[6]==0){
					loc[6]=1;
					ctx.drawImage(circulo, 25, 435, 200, 200);
				}else{
					solo = false;
				}
			}else if((x>230 && x<430) && (y>435 && y<635)){
				if(loc[7]==0){
					loc[7]=1;
					ctx.drawImage(circulo, 230, 435, 200, 200);
				}else{
					solo = false;
				}
			}else if((x>435 && x<635) && (y>435 && y<635)){
				if(loc[8]==0){
					loc[8]=1;
					ctx.drawImage(circulo, 435, 435, 200, 200);
				}else{
					solo = false;
				}
			}else{
				solo = false;
			}
			if(solo){
				gana();
				if(!ganado){
					var al = Math.floor(Math.random()*2)+1;
					if(al==1){
						tac();
					}else if(al==2){
						tacal();
					}
				}
			}
		}
	}

	function tacal() {
		var ense = true;
		while(ense){
			var aver = Math.floor(Math.random()*9)+1;
			if(loc[aver]==0){
				ense = false;
				dibtac(aver);
			}
		}
		gana();
	}

	function tac() {
		if(!ganado){
			if(loc[4]==0){
				dibtac(4);
			}else{
				if(anada(1)){
					if(anada(2)){
						var simon = true;
						if(loc[0]==0 || loc[2]==0 || loc[6]==0 || loc[8]==0){
							while(simon){
								var n = esq();
								if(loc[n]==0){
									dibtac(n);
									simon=false;
								}
							}
						}else if(loc[1]==0 || loc[3]==0 || loc[5]==0 || loc[7]==0){
							while(simon){
								var n = lad();
								if(loc[n]==0){
									dibtac(n);
									simon=false;
								}
							}
						}
					}
				}
			}
			gana();
		}
	}

	function lad() {
		var ave=Math.floor(Math.random()*4)+1;
		if(ave==1){
			return 1;
		}else if(ave==2){
			return 3;
		}else if(ave==3){
			return 5;
		}else if(ave==4){
			return 7;
		}
	}

	function anada(num) {
		if((loc[4]==num && loc[8]==num) || (loc[1]==num && loc[2]==num) || (loc[3]==num && loc[6]==num)){
			if(loc[0]==0){
				dibtac(0);
				return false;
			}
		}else if((loc[4]==num && loc[6]==num) || (loc[0]==num && loc[1]==num) || (loc[5]==num && loc[8]==num)){
			if(loc[2]==0){
				dibtac(2);
				return false;
			}
		}else if((loc[4]==num && loc[2]==num) || (loc[7]==num && loc[8]==num) || (loc[3]==num && loc[0]==num)){
			if(loc[6]==0){
				dibtac(6);
				return false;
			}
		}else if((loc[4]==num && loc[0]==num) || (loc[7]==num && loc[6]==num) || (loc[5]==num && loc[2]==num)){
			if(loc[8]==0){
				dibtac(8);
				return false;
			}
		}
		if((loc[4]==num && loc[7]==num) || (loc[0]==num && loc[2]==num)){
			if(loc[1]==0){
				dibtac(1);
				return false;
			}
		}else if((loc[0]==num && loc[6]==num) || (loc[4]==num && loc[5]==num)){
			if(loc[3]==0){
				dibtac(3);
				return false;
			}
		}else if((loc[2]==num && loc[8]==num) || (loc[4]==num && loc[3]==num)){
			if(loc[5]==0){
				dibtac(5);
				return false;
			}
		}else if((loc[4]==num && loc[1]==num) || (loc[8]==num && loc[6]==num)){
			if(loc[7]==0){
				dibtac(7);
				return false;
			}
		}
		return true;
	}

	function esq() {
		var ave=Math.floor(Math.random()*4)+1;
		if(ave==1){
			return 0;
		}else if(ave==2){
			return 2;
		}else if(ave==3){
			return 6;
		}else if(ave==4){
			return 8;
		}
	}

	function dibtac(num) {
		loc[num]=2;
		if(num==0){
			ctx.drawImage(tache, 25, 25, 200, 200);
		}else if(num==1){
			ctx.drawImage(tache, 230, 25, 200, 200);
		}else if(num==2){
			ctx.drawImage(tache, 435, 25, 200, 200);
		}else if(num==3){
			ctx.drawImage(tache, 25, 230, 200, 200);
		}else if(num==4){
			ctx.drawImage(tache, 230, 230, 200, 200);
		}else if(num==5){
			ctx.drawImage(tache, 435, 230, 200, 200);
		}else if(num==6){
			ctx.drawImage(tache, 25, 435, 200, 200);
		}else if(num==7){
			ctx.drawImage(tache, 230, 435, 200, 200);
		}else if(num==8){
			ctx.drawImage(tache, 435, 435, 200, 200);
		}
	}

	function gana() {
		var nel=0;
		var nume=0;
		for (var i = 0; i < 9; i++) {
			if(loc[i]==0)
				break;
		}
		if(i==9){
			nel=3;
		}
		do{
			nume++;
			if(loc[0]==nume && loc[1]==nume && loc[2]==nume){
				nel=nume;
			}else if(loc[3]==nume && loc[4]==nume && loc[5]==nume){
				nel=nume;
			}else if(loc[6]==nume && loc[7]==nume && loc[8]==nume){
				nel=nume;
			}else if(loc[0]==nume && loc[3]==nume && loc[6]==nume){
				nel=nume;
			}else if(loc[1]==nume && loc[4]==nume && loc[7]==nume){
				nel=nume;
			}else if(loc[2]==nume && loc[5]==nume && loc[8]==nume){
				nel=nume;
			}else if(loc[0]==nume && loc[4]==nume && loc[8]==nume){
				nel=nume;
			}else if(loc[2]==nume && loc[4]==nume && loc[6]==nume){
				nel=nume;
			}
		}while(nume==1);
		if(nel==1){
			ganado=true;
			localStorage.setItem("ganado",1);
			location.replace("index.php");
		}else if(nel==2){
			ganado=true;
			alert("Perdiste");
			localStorage.setItem("ganado",0);
			location.replace("index.php");
		}else if(nel==3){
			ctx.clearRect(0,0,660,660);
			ganado=true;
			alert("Empate");
			iniciar();
		}
	}
	
	return{
		init : init
	}
})();