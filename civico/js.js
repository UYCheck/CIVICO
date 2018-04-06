
			function revisar(elemento){
				if(elemento.value==''){elemento.className='error';}
				else{elemento.className='input';}
			}

			function revisaLongitud(elemento, min){
				if(elemento.value!==''){ 
					var data = elemento.value;
					if(data.length<min){
						elemento.className='error';
					}else{
						elemento.className='input';
					}
				}
			}
			function revisarEmail(elemento){
				if(elemento.value!==''){ 
					var data = elemento.value;
					var exp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
					if(!exp.test(data)){
						elemento.className='error';
					}else{
						elemento.className='input';
					}	
				}
			}
			function validar(){
				var datosCorrectos=true;
				var error="";
				if(document.getElementById("elnombre").value==""){
					datosCorrectos=false;
					error="\n El nombre está vacío";
				}

				var exp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				if(!exp.test(document.getElementById("elemail").value)){
					datosCorrectos=false;
					error="\n Email inválido";
				}
				if(document.getElementById("elmensaje").value.length<25){
					datosCorrectos=false;
					error="\n El mensaje debe ser mayor a 25 caracteres";
				}
				if(!datosCorrectos){
					alert('Hay errores en el formulario'+ error);
				}

				return datosCorrectos;
			}

			

			function gup( name, url ) {
			    if (!url) url = location.href;
			    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
			    var regexS = "[\\?&]"+name+"=([^&#]*)";
			    var regex = new RegExp( regexS );
			    var results = regex.exec( url );
			    return results == null ? null : results[1];
			}

			function tieneParametros(){
				var url = location.href.toString();
				return url.indexOf("?") >= 0;
			}

			$(document).ready(function(){

				$(".close").on("click", function(){
					$("#modalform").css("display", "none");
				});

				if (tieneParametros()){
					$("#nombreform").html(gup("nombre").replace(/[+]/g," ").replace("%2C",","));
					$("#emailform").html(gup("email").replace("%40","@"));
					$("#mensajeform").html(gup("mensajen").replace(/[+]/g," ").replace(/[%2C]/g,","));
					blockModal();
				}
			});

			function blockModal(){
				$("#modalform").css("display", "block");
			}




