	var mega =[];
window.onload = function(){


	var cont = document.getElementById('container');
	for(var i=1; i<61; i++){
		mega[i-1] = i;
		if (i%10==1 && i!=1){ cont.innerHTML += '<br/>' } 
		if(i<10){
			cont.innerHTML += '<a href="#" onclick="selecionar(' + i + ')"><p class="cont_p">0' + i + '</p></a>';
		} else{
			cont.innerHTML += '<a href="#" onclick="selecionar(' + i + ')"><p class="cont_p">' + i + '</p></a>';
		}
	}
	console.log(mega);			
}

	var val = 0;
	var g=1;
	var cont =0
	var er =[];
	var inp= 0;
	
	for(var i =0; i<60; i++){
		er[i] = 1;
	}

	
	function selecionar(i){
		
	var inpId = '#inp'+g;
		
		if(cont<6){
			if (er[i-1] > 0) {
				$("p").eq(i-1).css('box-shadow', '1px 2px 3px #111');
				$("p").eq(i-1).css('transition', 'all 0.1s');
				inp = $("p").eq(i-1).text();      //valor a ser passado aos inputs
				$(inpId).val(inp);
				g++;
				console.log(inpId);
				er[i-1] = -er[i-1];
				cont++;
			}else if(er[i-1] < 0){
				$("p").eq(i-1).css('box-shadow', '');
				$("p").eq(i-1).css('transition', 'all 0.1s');
				g-=1;
				inpId = '#inp'+g;
				$(inpId).val('');
				console.log(inpId);
				er[i-1] = -er[i-1];
				cont--;
			}
		}else if(er[i-1] < 0){
				$("p").eq(i-1).css('box-shadow', '');
				$("p").eq(i-1).css('transition', 'all 0.3s');
				g-=1;
				inpId = '#inp'+g;
				$(inpId).val('');
				console.log(inpId);
				er[i-1] = -er[i-1];
				cont--;
	}
	}



	function confere(){

		var m1 = Math.ceil(Math.random()* mega.length);
		var m2 = Math.ceil(Math.random()* mega.length);
		var m3 = Math.ceil(Math.random()* mega.length);
		var m4 = Math.ceil(Math.random()* mega.length);
		var m5 = Math.ceil(Math.random()* mega.length);		
		var m6 = Math.ceil(Math.random()* mega.length);


		var array1 = [m1, m2, m3, m4, m5, m6];
		console.log(array1);

		for(var i=0; i<array1.length; i++){           //	LOOP DE COMPARAÇÃO PARA QUE
			for(var j=0; j<array1.length; j++){			// QUE OS VALORES SEJAMDIFERENTES
				if(array1[i] == array1[j] && i!=j){
					console.log("Iguais");
					if(array1[i] <60)
						array1[i] +=1;
					else if(array1[i]>1)
						array1[i] -=0;
				}else{

				}
			}
		}

		console.log(array1);

		var v1 = $('#inp1').val();
		var v2 = $('#inp2').val();
		var v3 = $('#inp3').val();
		var v4 = $('#inp4').val();
		var v5 = $('#inp5').val();
		var v6 = $('#inp6').val();

		var array2 = [v1, v2, v3, v4, v5, v6];
		var result=[];

		for(var i=0; i < array1.length;i++){
			for(var j=0; j<array2.length; j++){
				if(array1[i]==array2[j]){
					console.log("eeeeeeee");
					result.push(array1[i]);	
					console.log(result);
				}
			}
		}


		array1 = array1.sort(function (a, b) {  return a - b;  });
		
		for(var i =0; i<array1.length; i++){
			if(array1[i]<10){
				array1[i] = '0' + array1[i];
			}
		}

		$('#inpR1').val(array1[0]);
		$('#inpR2').val(array1[1]);
		$('#inpR3').val(array1[2]);
		$('#inpR4').val(array1[3]);
		$('#inpR5').val(array1[4]);
		$('#inpR6').val(array1[5]);

		console.log(array1);

		var divResult = document.getElementById('rShot');

		for(var i =0; i<result.length; i++){
			divResult.innerHTML = '<input class="resultado" type="number" name="" value="' + result[i] + '">';
		}
		document.getElementById('h2_bottom').innerHTML = '<br><h3> Você acertou: ' + result.length + ' números!</h3>';

		


		switch(result.length){
			case 0:
				setTimeout(function(){
					alert("Infelizmente você não acertou nenhum número!");
					location.reload();
				},1000);
				break;
			case 2:
				setTimeout(function(){
					alert("Recebeu um prêmio!");
					window.location.href = "https://www.youtube.com/watch?v=DdLYSziSXII";
				},1000);
				
				break;
			case 6:
				setTimeout(function(){
					alert("Meus parabéns! Você acaba de ganhar 18 bilhões de reais!");
					window.location.href = "https://www.youtube.com/watch?v=i0p1bmr0EmE";
				},1000);
				break;
		}
	}