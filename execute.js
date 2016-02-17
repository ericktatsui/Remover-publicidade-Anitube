	//PopUp Blocker
	window.open = function() {
		console.log('popup bloqueado');

		return false;
	};

	var videoId = document.URL.split('/')[4]; //ID do vídeo
		embedTag = '<object type="application/x-shockwave-flash" data="http://static.anitube.se/player/jwplayer.flash.swf" width="100%" height="100%" bgcolor="#000000" id="aniPlayer'+ videoId +'" name="aniPlayer'+ videoId +'" class="jwswf swfPrev-beforeswfanchor0 swfNext-afterswfanchor0" tabindex="0"><param name="allowfullscreen" value="true"><param name="allowscriptaccess" value="always"><param name="seamlesstabbing" value="true"><param name="wmode" value="opaque"></object>', //Embed para injetar
		container = document.getElementById('videoPlayer'), //Div que o vídeo deve ficar
		allScripts = document.getElementsByTagName('script'), //Seleciona todos os script do site
		playerConfigUrl = null, //Aramazena url do script player config
		scriptsCount = allScripts.length;

	//Percorre todas tags
	for (var i = 0; i < scriptsCount; i++) {
		//Verifica se o atributo src do script começa com 'http://anitube.xpg.uol.com.br/player/config.php'
		if( allScripts[i].src.indexOf("/player/config.php") != -1 ){
			playerConfigUrl = allScripts[i].src;

			break;
		}
	};
	
	//Injeta javascript (player config) na div novamente. NEXT VERSION: remover algumas funções do js
	script = document.createElement('script');
	script.type = 'text/javascript';
	script.async = true;
	script.onload = function(){
        //Injeta player na div
		container.innerHTML = embedTag;
    };
    script.src = playerConfigUrl;
    container.appendChild(script);