var _quizzData = [
	
	{
		'theme' : 'jQuery',
		'question' : 'Comment peut-on sélectionner les images d\'une largeur de 300 pixels ?',
		'reponses' : 
		[
			'$("img[width=300px]")', 
			'$("img[width=300]")', 
			'$("img").width("300")', 
			'$(width(" ",300))' 
		],
		'answer' : 2,
		'difficulty' : 1 //1,2 ou 3
	},	
	{
		'theme' : 'jQuery',
		'question' : 'Comment peut-on sélectionner les deux premiers titres <h3> d\'une page ?',
		'reponses' : 
		[
			'$("h3+h3")', 
			'$("h3(1,2)")', 
			'$("h3:lt(2)")', 
			'$("h3 :slice(0,2)")' 
		],
		'answer' : 3,
		'difficulty' : 1 //1,2 ou 3
	},	
	{
		'theme' : 'jQuery',
		'question' : 'Comment peut-on empêcher l\'exécution d\'un lien cliqué ?',
		'reponses' : 
		[
			'$("a").click(function() { exit; })', 
			'$("a").click(function() { return true; })', 
			'$("a").click(function(e) { e.preventDefault; })', 
			'$("a").click(function(e) { e.preventDefault(); })' 
		],
		'answer' : 4,
		'difficulty' : 1 //1,2 ou 3 
	},	
	{
		'theme' : 'jQuery',
		'question' : 'Comment peut-on ajouter la classe .actif sur un élément <li> si celle-ci n\'est pas présente ?',
		'reponses' : 
		[
			'$("li").addClass(.actif)', 
			'$("li").addClass(".actif")', 
			'$("li!actif").addClass("actif")', 
			'$("li").toggleClass("actif")' 
		],
		'answer' : 4,
		'difficulty' : 1 //1,2 ou 3
	},	
	{
		'theme' : 'jQuery',
		'question' : 'Comment peut-on modifier la couleur de fond de la page dynamiquement en jaune doré ?',
		'reponses' : 
		[
			'$("body").css("background:gold")', 
			'$("body").css("background-color","gold")', 
			'$("body").css({background-color:gold})', 
			'$("body").background("#fc0")' 
		],
		'answer' : 2,
		'difficulty' : 1 //1,2 ou 3
	},	
	{
		'theme' : 'jQuery',
		'question' : 'Comment peut-on fixer la largeur d\'un paragraphe à la moitié de sa largeur initiale (bloc occupant toute la place disponible) ?',
		'reponses' : 
		[
			'$("p").width("50%")', 
			'$("p").setWidth("-50%")', 
			'$("p").width(function() { $(this).css("width")/2; })', 
			'$("p").width(0.5)' 
		],
		'answer' : 1,
		'difficulty' : 1 //1,2 ou 3
	},	
	{
		'theme' : 'jQuery',
		'question' : 'Quelle est la meilleure façon de modifier le texte d\'un bouton de validation de formulaire ?',
		'reponses' : 
		[
			'$("input:submit").text("Valider")', 
			'$("form input[type=submit]").html("Valider")', 
			'$("input:submit").val("Valider")', 
			'$("input[type=submit]").attr("name","Valider")' 
		],
		'answer' : 3,
		'difficulty' : 1 //1,2 ou 3
	},	
	{
		'theme' : 'jQuery',
		'question' : 'Comment peut-on faire disparaître un élément de façon animée et rapide ?',
		'reponses' : 
		[
			'$("h1").animate({transparency:0})', 
			'$("h1").hide(300)', 
			'$("h1").hide()', 
			'$("h1").display("none","fast")' 
		],
		'answer' : 2,
		'difficulty' : 1 //1,2 ou 3
	},	
	{
		'theme' : 'jQuery',
		'question' : 'Comment peut-on déployer verticalement un paragraphe, puis une seconde après réduire son opacité de moitié ?',
		'reponses' : 
		[
			'$("<p>").slideDown().delay("1s").hide()', 
			'$("p").slideDown().delay(1000).fadeTo("fast",0.5)', 
			'$("p").slideDown().delay(1).fadeTo(0.5)', 
			'$("p").deploy(1000).opacity("-50%")' 
		],
		'answer' : 2,
		'difficulty' : 1 //1,2 ou 3
	},	
	{
		'theme' : 'jQuery',
		'question' : 'Comment peut-on parcourir uniquement les éléments <div> contenant un titre <h2> ?',
		'reponses' : 
		[
			'$("div h2")', 
			'$("div").has("h2")', 
			'$("div:children(h2)")', 
			'$("h2","div")' 
		],
		'answer' : 2,
		'difficulty' : 1 //1,2 ou 3
	},	
	{
		'theme' : 'jQuery',
		'question' : 'Comment peut-on définir un même gestionnaire d\'événement au clic et au focus sur une image ?',
		'reponses' : 
		[
			'$("img").click().focus().function() { ... }', 
			'$("img").bind("focus click",function() { ... })', 
			'$("img").event("focus,click", { ... })', 
			'$("img").bind("focus").bind("click", { ... })' 
		],
		'answer' : 2,
		'difficulty' : 2 //1,2 ou 3
	},	
	{
		'theme' : 'jQuery',
		'question' : 'Quelle est la meilleure façon de dupliquer sur la page l\'élément portant l\'id #test ?',
		'reponses' : 
		[
			'$("#test").clone()', 
			'$("#test").clone().insertAfter("#test")', 
			'$("#test").clone().insertAfter($(this))', 
			'$("#test").clone().after()' 
		],
		'answer' : 2,
		'difficulty' : 2 //1,2 ou 3
	},	
	{
		'theme' : 'jQuery',
		'question' : 'Comment peut-on copier l\'alternative texte des images de la page dans leur attribut titre ? (Pratique déconseillée en terme d\'accessibilité)',
		'reponses' : 
		[
			'$("img").attr("title",$(this).attr("alt"))', 
			'$("img").attr("title","alt")', 
			'$("img").each(function() { $(this).attr("title",$(this).attr("alt")) })', 
			'$("img").each(function() { $(this).attr("title") = $(this).attr("alt"); })' 
		],
		'answer' : 3,
		'difficulty' : 2 //1,2 ou 3
	},	
	{
		'theme' : 'jQuery',
		'question' : 'Comment peut-on cocher le premier bouton radio d\'un formulaire ?',
		'reponses' : 
		[
			'$("form input.radio:first").attr("checked")', 
			'$("form radio:first").attr("checked","true")', 
			'$("form :radio:first").attr("checked","checked")', 
			'$("form input:radio[0]").attr("checked","checked")' 
		],
		'answer' : 3,
		'difficulty' : 2 //1,2 ou 3
	},	
	{
		'theme' : 'jQuery',
		'question' : 'Comment peut-on ajouter un texte en bas de document avant la fin de l\'élément <body> ?',
		'reponses' : 
		[
			'$("body").append("<p>texte</p>")', 
			'$("body").prepend("<p>texte</p>")', 
			'$("<p>texte</p>").prepend("body")', 
			'$("<p>texte</p>").append("body")' 
		],
		'answer' : 1,
		'difficulty' : 2 //1,2 ou 3
	},	
	{
		'theme' : 'jQuery',
		'question' : 'A partir d\'un jeu d\'éléments, comment peut-on sélectionner uniquement ceux qui ne sont pas de type <span> ?',
		'reponses' : 
		[
			'$("*").filter(":not(span)")', 
			'$("*").not("")', 
			'$("*").find(":not(span)")', 
			'$("*").is(":not(span)")' 
		],
		'answer' : 1,
		'difficulty' : 2 //1,2 ou 3
	},	
	{
		'theme' : 'jQuery',
		'question' : 'Comment peut-on déclarer un nouveau plug-in pour jQuery ?',
		'reponses' : 
		[
			'jQuery.add(function monplugin() { ... })', 
			'jQuery.monplugin { function() { } }', 
			'$.extend.monplugin { ... return true; }', 
			'$.fn.monplugin = function() { ... }' 
		],
		'answer' : 4,
		'difficulty' : 2 //1,2 ou 3
	},	
	{
		'theme' : 'jQuery',
		'question' : 'Comment peut-on charger dans un élément portant l\'id #cible présent sur la page, l\'élément #liste d\'une page externe "resultats.html" ?',
		'reponses' : 
		[
			'$.ajaxLoad("#liste","test.html").append("#cible")', 
			'$("#cible").load("resultats.html #liste")', 
			'$("#liste").load("resultats.html","#cible")', 
			'$("#cible").get("resultats.html #liste")' 
		],
		'answer' : 2,
		'difficulty' : 2 //1,2 ou 3
	},	
	{
		'theme' : 'jQuery',
		'question' : 'Comment peut-on effectuer une requête Ajax de type XML sur un script PHP ?',
		'reponses' : 
		[
			'$.ajaxStart(type:"xml", url:"script.php", success:function data(); )', 
			'$.getJSON("script.php", function(xml) { ... })', 
			'$.ajax({type:"POST",dataType: "xml", url:"script.php"})', 
			'$.post(dataType:"xml",url:"script.php", function() { ...} )' 
		],
		'answer' : 3,
		'difficulty' : 2 //1,2 ou 3
	},	
	{
		'theme' : 'jQuery',
		'question' : 'Comment affiche-t-on dans la console le retour texte d\'un appel Ajax s\'étant bien déroulé ?',
		'reponses' : 
		[
			'$.ajax({ url: \'test.html\', success: function(data) { console.log(data); } )', 
			'$.ajax({ url: \'test.html\', complete: function(text) { alert(text); } )', 
			'$.ajax({ url: \'test.html\', onready: function(text) { console.log(text); } )', 
			'$.ajax({ url: \'test.html\', function(data) { console(data); } )' 
		],
		'answer' : 1,
		'difficulty' : 2 //1,2 ou 3
	},		
	{
		'theme' : 'php',
		'question' : 'Que signifie PHP ?',
		'reponses' : 
		[
			'Page Helper Process', 
			'Programming Home Pages', 
			'PHP: Hypertext Preprocessor' , 
			'Programme Hyper Performant'
		],
		'answer' : 3,
		'difficulty' : 1  //1,2 ou 3
	},
	{
		'theme' : 'php',
		'question' : 'Quelle fonction retourne la longueur d\'une chaîne de texte ?',
		'reponses' : 
		[
			'strlen', 
			'strlength', 
			'length' , 
			'substr'
		],
		'answer' : 1,
		'difficulty' : 1  //1,2 ou 3
	},
	{
		'theme' : 'php',
		'question' : 'Comment accède-t-on au 1er élément chaton dans le tableau suivant ? <code> $tableau = Array(\'chaton\' , \'ornithorynque\', \'dauphin\');<br></code> ',
		'reponses' : 
		[
			'$tableau[1]', 
			'$tableau[0]', 
			'$tableau{0}' , 
			'$tableau.get(1)'
		],
		'answer' : 2,
		'difficulty' : 1  //1,2 ou 3
	},
	{
		'theme' : 'php',
		'question' : 'Comment vérifie-t-on l\'égalité de deux variables : $a et $b ?',
		'reponses' : 
		[
			'$a = $b', 
			'$a == $b', 
			'$a != $b' , 
			'if($a,$b)'
		],
		'answer' : 2,
		'difficulty' : 1  //1,2 ou 3
	},
	{
		'theme' : 'php',
		'question' : 'Quelle est l\'utilité de l\'opérateur || ?',
		'reponses' : 
		[
			'Il sert à vérifier que toutes les conditions sont réalisées.', 
			'Il sert à vérifier qu\'une, et une seule, des conditions est réalisée.', 
			'Il sert à vérifier qu\'une, au moins, des conditions est réalisée.' , 
			'Il sert à rien.'
		],
		'answer' : 3 ,
		'difficulty' : 1  //1,2 ou 3
	},
	{
		'theme' : 'php',
		'question' : 'Quelles valeurs peut prendre le type booléen ?',
		'reponses' : 
		[
			'0 ou 1', 
			'TRUE ou FALSE', 
			'TRUE ou FALSE ou NULL' , 
			'Toutes sauf NULL'
		],
		'answer' : 2,
		'difficulty' : 1  //1,2 ou 3
	},
	{
		'theme' : 'php',
		'question' : 'La boucle for ($i=0 ; $i<=3 ; $i++ ) { echo $i; }...',
		'reponses' : 
		[
			'Sera éxécutée 1 fois', 
			'Sera éxécutée 2 fois', 
			'Sera éxécutée 3 fois' , 
			'Sera éxécutée 4 fois'
		],
		'answer' : 4,
		'difficulty' : 1  //1,2 ou 3
	},
	{
		'theme' : 'php',
		'question' : 'Sachant que $a = 4. Quelle instruction affiche : 4 = quatre ?',
		'reponses' : 
		[
			'echo \'$a = quatre\'', 
			'echo \'$a = 2+2\'', 
			'echo "$a = quatre"' , 
			'echo \'$a = $a+2\''
		],
		'answer' : 3,
		'difficulty' : 1  //1,2 ou 3
	},
	{
		'theme' : 'php',
		'question' : 'Sachant que $dodo = 6. Quelle est la valeur de ma nuit : $dodo += 2; ?',
		'reponses' : 
		[
			'4', 
			'6', 
			'8' , 
			'12'
		],
		'answer' : 3,
		'difficulty' : 1  //1,2 ou 3
	},
	{
		'theme' : 'php',
		'question' : 'Dans le cas d\'envoi d\'informations plus ou moins sensibles par formulaire, quelle méthode utilisera-t-on de préférence ?',
		'reponses' : 
		[
			'get', 
			'mailto', 
			'post' , 
			'post-it'
		],
		'answer' : 3,
		'difficulty' : 1  //1,2 ou 3
	},
	{
		'theme' : 'php',
		'question' : 'Quelle fonction retourne le nombre de secondes écoulées depuis le 1er janvier 1970 ?',
		'reponses' : 
		[
			'time', 
			'timestamp', 
			'mktime' , 
			'microtime'
		],
		'answer' : 1,
		'difficulty' : 2  //1,2 ou 3
	},
	{
		'theme' : 'php',
		'question' : 'Quelle instruction permet d\'ouvrir un fichier en écriture afin d\'ajouter des données à la fin de son contenu ?',
		'reponses' : 
		[
			'fopen("fichier","r+")', 
			'fopen("fichier","w")', 
			'fopen("fichier","a")' , 
			'fopen("fichier")'
		],
		'answer' : 3,
		'difficulty' : 2  //1,2 ou 3
	},
	{
		'theme' : 'php',
		'question' : 'Quelle fonction retire un élément de la fin d\'un tableau ?',
		'reponses' : 
		[
			'array_splice()', 
			'array_pop()', 
			'array_pad()' , 
			'array_shift()'
		],
		'answer' : 2,
		'difficulty' : 2  //1,2 ou 3
	},
	{
		'theme' : 'php',
		'question' : 'Quelle fonction permet d\'envoyer des en-têtes HTTP au navigateur avant le contenu de la page ?',
		'reponses' : 
		[
			'parse_url()', 
			'http_post()', 
			'header()' , 
			'http_header()'
		],
		'answer' : 3,
		'difficulty' : 2  //1,2 ou 3
	},
	{
		'theme' : 'php',
		'question' : 'Dans quel tableau de données retrouve-t-on les cookies du visiteur ?',
		'reponses' : 
		[
			'$SETCOOKIE', 
			'$COOKIES', 
			'$HTTP_COOKIES' , 
			'$_COOKIE'
		],
		'answer' : 4,
		'difficulty' : 2  //1,2 ou 3
	},
	{
		'theme' : 'php',
		'question' : 'Quelle fonction permet de lire le résultat d\'une ressources MySQL renvoyée par mysql_query() ?',
		'reponses' : 
		[
			'mysql_fetch_row()', 
			'mysql_data_seek()', 
			'mysql_affected_rows()' , 
			'mysql_result()'
		],
		'answer' : 1,
		'difficulty' : 2  //1,2 ou 3
	},
	{
		'theme' : 'php',
		'question' : 'Quelle fonction permet d\'effacer un fichier ?',
		'reponses' : 
		[
			'delete()', 
			'unlink()', 
			'remove()' , 
			'clearfile()'
		],
		'answer' : 2,
		'difficulty' : 2  //1,2 ou 3
	},
	{
		'theme' : 'php',
		'question' : 'Comment peut-on trier un tableau en ordre inverse ?',
		'reponses' : 
		[
			'$tableau = ksort($tableau)', 
			'ksort($tableau)', 
			'$tableau = rsort($tableau)' , 
			'rsort($tableau)'
		],
		'answer' : 4,
		'difficulty' : 2  //1,2 ou 3
	},
	{
		'theme' : 'php',
		'question' : 'Comment définit-on une constante ?',
		'reponses' : 
		[
			'set(\'maconstante\' = \'valeur\')', 
			'define("maconstante","valeur")', 
			'const $maconstante = valeur' , 
			'maconstante = valeur'
		],
		'answer' : 2,
		'difficulty' : 2  //1,2 ou 3
	},
	{
		'theme' : 'php',
		'question' : 'Quelle instruction n\'est pas le nom d\'une fonction ?',
		'reponses' : 
		[
			'exit', 
			'print_r', 
			'define' , 
			'echo'
		],
		'answer' : 1,
		'difficulty' : 2  //1,2 ou 3
	},
	{
		'theme' : 'php',
		'question' : 'Comment vérifier la syntaxe d\'une adresse e-mail contenue dans la variable $email ?',
		'reponses' : 
		[
			'strpos($email,"*@*.*")', 
			'ereg($email,"[:alpha:]*@[:alpha:]*\.[:alpha:]*")', 
			'preg_match("/^(\w|-)+@((\w|-)+\.)+[a-z]{2,6}$/i",$email)' , 
			' '
		],
		'answer' : 3,
		'difficulty' : 3  //1,2 ou 3
	},
	{
		'theme' : 'php',
		'question' : 'Par défaut, dans quel ordre de priorité sont affectées les variables envoyées par HTTP ?',
		'reponses' : 
		[
			'get, cookie, post', 
			'post, get, cookie', 
			'get, post, cookie' , 
			'post,cookie, get'
		],
		'answer' : 3,
		'difficulty' : 3  //1,2 ou 3
	},
	{
		'theme' : 'php',
		'question' : 'Comment définit-on le constructeur d\'une classe (compatible PHP3/4/5) ?',
		'reponses' : 
		[
			'grâce à public static void()', 
			'en utilisant __construct()', 
			'en nommant la fonction comme la classe' , 
			' '
		],
		'answer' : 3,
		'difficulty' : 3  //1,2 ou 3
	},
	{
		'theme' : 'php',
		'question' : 'Comment mémorise-t-on de façon pratique une variable d\'un script à l\'autre sur un serveur web ?',
		'reponses' : 
		[
			'Grâce à serialize()', 
			'En utilisant $_SESSION', 
			'Au moyen de register_globals()' , 
			' '
		],
		'answer' : 2,
		'difficulty' : 3  //1,2 ou 3
	},
	{
		'theme' : 'php',
		'question' : 'Quelle fonction de bufferisation (temporisation) envoie au navigateur les données contenues par le tampon, et stoppe la tamporisation de sortie ?',
		'reponses' : 
		[
			'ob_flush()', 
			'ob_end_flush()', 
			'ob_get_flush()' , 
			' '
		],
		'answer' : 2,
		'difficulty' : 3  //1,2 ou 3
	},
	{
		'theme' : 'php',
		'question' : 'De quelle façon autorise-t-on l\'accès à un fichier<code>- en lecture/écriture/exécution pour le propriétaire<br>- en lecture/écriture pour le groupe<br>- en lecture pour les autres</code>',
		'reponses' : 
		[
			'chmod(\'fichier\',0764)', 
			'chmod(\'fichier\',\'u+wrx g+rw o+r\')', 
			'chown(\'fichier\',\'0777\')' , 
			' '
		],
		'answer' : 1,
		'difficulty' : 3  //1,2 ou 3
	},
	{
		'theme' : 'php',
		'question' : 'Quel mot clé permet de conserver la valeur d\'une variable locale dans une même fonction appelée plusieurs fois de suite ?',
		'reponses' : 
		[
			'global', 
			'const', 
			'static' , 
			' '
		],
		'answer' : 3,
		'difficulty' : 3  //1,2 ou 3
	},
	{
		'theme' : 'php',
		'question' : 'Quelle fonction permet d\'obtenir les informations suivantes à propos d\'un fichier : date de dernier accès, date de modification, date de création ?',
		'reponses' : 
		[
			'stat()', 
			'filemtime()', 
			'filegroup()' , 
			' '
		],
		'answer' : 1,
		'difficulty' : 3  //1,2 ou 3
	},
	{
		'theme' : 'php',
		'question' : 'Quelle méthode permet d\'attraper par défaut les exceptions lancées par un script, à l\'aide d\'une fonction propre function gestion_exception($e) { ... } ?',
		'reponses' : 
		[
			'$handler->setdefault(\'gestion_exception\')', 
			'set_exception_handler(\'gestion_exception\')', 
			'exception_handler($e) = gestion_exception()' , 
			' '
		],
		'answer' : 2,
		'difficulty' : 3  //1,2 ou 3
	},
	{
		'theme' : 'php',
		'question' : '<code>$a = M_PI;<br>$b = &$a;<br></code>Sachant qu\'au cours de l\'éxécution du script, $a = 10, que vaudra pow($b,2) * sqrt(3)/2 + $a; ?',
		'reponses' : 
		[
			'pi² sqrt(3)/2 + 10', 
			'pi² sqrt(3)/2 + pi', 
			'Quel est le tordu qui a pu pondre un truc pareil ?' , 
			'50 sqrt(3) + 10'
		],
		'answer' : 4,
		'difficulty' : 3  //1,2 ou 3
	},
	{
		'theme' : 'php',
		'question' : 'On évalue le code suivant :<code>$kiwi = \'vert\';<br>$fruit = &$kiwi;<br>$fruit = array();<br>$fruit[\'kiwi\'] = $kiwi;<br></code>Que contient $fruit ?',
		'reponses' : 
		[
			'Infiniment de rien', 
			'Un kiwi', 
			'Du vert !' , 
			'La variable n'est pas définie.'
		],
		'answer' : 1,
		'difficulty' : 3  //1,2 ou 3
	},
	{
		'theme' : 'php',
		'question' : 'Sachant que l\'on veut retrouver une portion de texte sous la forme crochet gauche, 2 à 6 caractères alphanumériques ou souligné, crochet droit avec preg_match, quelle expression utiliser :',
		'reponses' : 
		[
			'"/\[[A-Za-z0-9]{2,6}\]/"', 
			'\'`\[\w{2,6}\]`\'', 
			'\'#\[[A-Z0-9_]{2,6}\]#iA\'' , 
			'"\`\[\w{2,6}\]\`"'
		],
		'answer' : 2,
		'difficulty' : 3  //1,2 ou 3
	},
	{
		'theme' : 'php',
		'question' : 'Soit query() un fonction faisant une requête SQL et escape() une fonction effectuant un échappement des caractères potentiellement dangereux. Quelle requête est sécurisée de manière optimale ?',
		'reponses' : 
		[
			'query(\'SELECT * FROM `table` WHERE champ1=\'.escape($a).\' AND champ2=\'.escape($b))', 
			'query(sprintf(\'SELECT * FROM `table` WHERE champ1="%s" AND champ2="%d"\', escape($a), escape($b))', 
			'query(escape(\'SELECT * FROM `table` WHERE champ1=\'.$a.\' AND champ2=\'.$b))' , 
			'query(sprintf(\'SELECT * FROM `table` WHERE champ1="%s" AND champ2="%d"\', escape($a), $b)'
		],
		'answer' : 4,
		'difficulty' : 3  //1,2 ou 3
	},
	{
		'theme' : 'php',
		'question' : 'On interprète le code suivant:<code>$a = \'ki\' || \'wi\';<br>$b = \'ki\' or \'wi\';<br></code>Que donne var_dump($a, $b); ?',
		'reponses' : 
		[
			'bool(true) bool(true)', 
			'string(2) "ki" bool(true)', 
			'bool(true) string(2) "ki"', 
			'ki wi' 
		],
		'answer' : 3,
		'difficulty' : 3 //1,2 ou 3
	},
	{
		'theme' : 'php',
		'question' : 'En utilisant la fonction header() de php afin d\'envoyer un code HTTP 404, puis exit(), qu\'est-ce qui est affiché (aucun envoi n\'a encore été fait au client) ?',
		'reponses' : 
		[
			'Une page blanche avec un code html minimaliste "HTTP/1.1 404 Not Found"', 
			'Une erreur PHP', 
			'La page d\'erreur 404 par défaut de mon site ou de mon CMS/Blog' , 
			'Une page blanche ou la page type 404 intégrée au navigateur'
		],
		'answer' : 4,
		'difficulty' : 3  //1,2 ou 3
	},
	{
		'theme' : 'php',
		'question' : 'Ma page index.php contient le code suivant :<code>$a = \'a\'.file_exists(__FILE__);<br>$a1 = \'wiki\';<br>$a2 = \'kiwi\';<br>echo ${$a};<br></code>Qu\'est-ce qui s\'affiche si on y accède ?',
		'reponses' : 
		[
			'Une page blanche', 
			'kiwi', 
			'wiki' , 
			'Une erreur PHP'
		],
		'answer' : 3,
		'difficulty' : 3  //1,2 ou 3
	},
	{
		'theme' : 'php',
		'question' : 'Quel est l\'effet de l\'utilisation de la structure return(); dans un fichier inclus (sans être dans une fonction) ?',
		'reponses' : 
		[
			'Retour au script parent sans exécuter la suite du fichier', 
			'Une erreur PHP', 
			'Arrêt du script à la manière de exit()' , 
			'Aucun, il est ignoré'
		],
		'answer' : 1,
		'difficulty' : 3  //1,2 ou 3
	},
	{
		'theme' : 'php',
		'question' : 'Que donne le code suivant en PHP5 ?<code>$b = false;<br>$a = unset($b);<br>var_dump($a);<br></code>',
		'reponses' : 
		[
			'NULL', 
			'Une erreur PHP', 
			'bool(true)', 'bool(false)' , 
			'ressource(#)'
		],
		'answer' : 2,
		'difficulty' : 3 //1,2 ou 3
	},
	{
		'theme' : 'php',
		'question' : 'PHP possède deux analyseurs XML, quelle est leur principale différence ?',
		'reponses' : 
		[
			'L\'un commence par la fin du fichier, l\'autre par le début', 
			'L\'un ignore les erreurs, l\'autre arrête l\'analyse', 
			'L\'un nécessite une DTD pour travailler, l\'autre pas' , 
			'L\'un charge toute la chaine en mémoire, l\'autre travail sur un flux'
		],
		'answer' : 4,
		'difficulty' : 3  //1,2 ou 3
	},
	{
		'theme' : 'php',
		'question' : 'Laquelle de ces affirmations concernant PHP6 est fausse ?',
		'reponses' : 
		[
			'Le type string est destiné à disparaître', 
			'La syntaxe "goto label" sera utilisable', 
			'Une classe fille pourra avoir plusieurs classes mères' , 
			'Les directives magic_quotes_gpc et register_global disparaîtront'
		],
		'answer' : 3,
		'difficulty' : 3  //1,2 ou 3
	},
	{
		'theme' : 'php',
		'question' : 'Quelle est la meilleure façon d\’additionner des nombres flottants en PHP avec deux chiffres après la virgule ?<code>Données pour la question :<br>$a = \'1.2\' ;<br>$b = \'2.4\' ;<br>$c = \'3.60\' ; //Résultat à obtenir</code>',
		'reponses' : 
		[
			'A)	$c = $a + $b', 
			'B)	$c = floatval($a) + floatval($b)', 
			'C)	$c = bcadd($a, $b, 2)' , 
			'D)	$c = bcadd($a, $b)'
		],
		'answer' : 3,
		'difficulty' : 3  //1,2 ou 3
	},
	{
		'theme' : 'JavaScript / DOM',
		'question' : 'Quels sont les types de nombres définis en JavaScript ?',
		'reponses' : 
		[
			'Integer et Float.', 
			'Number.', 
			'Number et Double.', 
			'Number et Integer.'
		],
		'answer' : 2,
		'difficulty' : 2 //1,2 ou 3
	},
	{
		'theme' : 'JavaScript / DOM',
		'question' : 'Que signifie l\'acronyme AJAX ?',
		'reponses' : 
		[
			'Advanced JavaScript with XMLHttpRequest.', 
			'Asynchronous JavaScript and XML.', 
			'JavaScript extensible.', 
			'Rien, c\’est juste une suite de lettres sans aucune signification.'
		],
		'answer' : 2,
		'difficulty' : 2 //1,2 ou 3
	},
	{
		'theme' : 'JavaScript / DOM',
		'question' : 'Quel est l\'équivalent pour un noeud de l\'arbre DOM de node.childNodes[1] (en supposant que le noeud demandé existe) ?',
		'reponses' : 
		[
			'node.firstChild', 
			'node.firstChild.nextSibling', 
			'node.previousSibling.parentNode', 
			'node.lastChild.previousSibling'
		],
		'answer' : 2,
		'difficulty' : 2 //1,2 ou 3
	},
	{
		'theme' : 'JavaScript / DOM',
		'question' : 'Quelle syntaxe est correcte pour que la fonction init soit appelée au chargement de la page ?',
		'reponses' : 
		[
			'window.onload = init', 
			'window.onload = init()', 
			'window.onload() = init', 
			'window.onload() = init()'
		],
		'answer' : 1,
		'difficulty' : 2 //1,2 ou 3
	},
	{
		'theme' : 'JavaScript / DOM',
		'question' : 'Quand l\'événement "load" se déclenche-t-il pour une page ?',
		'reponses' : 
		[
			'Dès que le navigateur commence à recevoir le code HTML.', 
			'Quand le code HTML a fini d\'être chargé.', 
			'Quand l\'arbre DOM a été construit.', 
			'Quand l\'arbre DOM a été construit et toutes les ressources chargées (images, ...).'
		],
		'answer' : 4,
		'difficulty' : 2 //1,2 ou 3
	},
	{
		'theme' : 'JavaScript / DOM',
		'question' : 'Que peut-on dire de l\'attribut innerHTML ?',
		'reponses' : 
		[
			'C\'est un attribut qui n\'est pas spécifié dans le DOM, mais qui est plutôt bien supporté par les navigateurs modernes.', 
			'C\'est un attribut spécifié dans le DOM.', 
			'C\'est un attribut qui n\'est supporté que par Internet Explorer.', 
			'C\'est un attribut qui ne fonctionne pas le vendredi.'
		],
		'answer' : 1 ,
		'difficulty' : 2 //1,2 ou 3
	},
	{
		'theme' : 'JavaScript / DOM',
		'question' : 'Peut-on accéder aux commentaires d\'un document (X)HTML ?',
		'reponses' : 
		[
			'Non, ce n\'est pas possible', 
			'Oui, avec document.body.commentaries', 
			'Oui, avec node.nodeType évalué à 7', 
			'Oui, avec Node.COMMENT_NODE'
		],
		'answer' : 4,
		'difficulty' : 2 //1,2 ou 3
	},
	{
		'theme' : 'JavaScript / DOM',
		'question' : 'for(; ; ) { ... } Que se passe-t-il avec cette instruction ?',
		'reponses' : 
		[
			'C\'est une boucle infinie qu\'on peut arrêter avec une condition', 
			'On obtient la valeur undefined', 
			'On obtient la valeur null', 
			'Il ne se passe rien ! Mais j\'ai triché pour répondre : J\'ai essayé de le faire !'
		],
		'answer' : 1,
		'difficulty' : 2 //1,2 ou 3
	},
	{
		'theme' : 'JavaScript / DOM',
		'question' : 'Lequel de ces codes n\’affichera pas 3 ?',
		'reponses' : 
		[
			'alert(Math.max(-4, 3))', 
			'var i = 3; alert(i++)', 
			'alert(parseInt("3"))', 
			'alert(Math.floor(2.9))'
		],
		'answer' : 4,
		'difficulty' : 2 //1,2 ou 3
	},
	{
		'theme' : 'JavaScript / DOM',
		'question' : 'for(; iI < iJ; iI++, iJ--) { ... } Est-il possible d\'écrire une boucle de cette forme ?',
		'reponses' : 
		[
			'Non, la boucle n\'est pas initialisée', 
			'Oui, sans problème', 
			'Non, on ne peut pas se servir de deux compteurs à la fois', 
			'Oui, à condition d\'avoir initialisé les variables en amont'
		],
		'answer' : 4,
		'difficulty' : 2 //1,2 ou 3
	},
	{
		'theme' : 'JavaScript / DOM',
		'question' : 'Quel est l\'équivalent de pouet.coin ?',
		'reponses' : 
		[
			'pouet[coin]', 
			'pouet["coin"]', 
			'pouet.getCoin()', 
			'Aucune des solutions précédentes'
		],
		'answer' : 2,
		'difficulty' : 3 //1,2 ou 3
	},
	{
		'theme' : 'JavaScript / DOM',
		'question' : 'Laquelle de ces expressions est évaluée à false ?',
		'reponses' : 
		[
			'"Infinity" == Infinity', 
			'NaN == NaN', 
			'"0xa" == 10', 
			'{"valueOf": function() {return 2;}} == 2'
		],
		'answer' : 2,
		'difficulty' : 3 //1,2 ou 3
	},
	{
		'theme' : 'JavaScript / DOM',
		'question' : 'Quelle est la méthode spécifiée dans le DOM-2 pour l\'ajout des gestionnaires d\'événements ',
		'reponses' : 
		[
			'addEventListener', 
			'attachEvent', 
			'attachEventListener', 
			'listen'
		],
		'answer' : 1,
		'difficulty' : 3 //1,2 ou 3
	},
	{
		'theme' : 'JavaScript / DOM',
		'question' : 'Quel est le résultat de parseInt("010",8) ?',
		'reponses' : 
		[
			'1', 
			'2', 
			'8', 
			'10'
		],
		'answer' : 3,
		'difficulty' : 3 //1,2 ou 3
	},
	{
		'theme' : 'JavaScript / DOM',
		'question' : 'window.i = 0; var i = 2; alert(window.i); : que va afficher ce code ?',
		'reponses' : 
		[
			'0', 
			'2', 
			'Game over', 
			'undefined'
		],
		'answer' : 2,
		'difficulty' : 3 //1,2 ou 3
	},
	{
		'theme' : 'JavaScript / DOM',
		'question' : 'Lequel de ces types d\’événements « bouillonne » (se propage) ?',
		'reponses' : 
		[
			'blur', 
			'focus', 
			'load', 
			'select'
		],
		'answer' : 4,
		'difficulty' : 3 //1,2 ou 3
	},
	{
		'theme' : 'JavaScript / DOM',
		'question' : 'Quelle chaîne de caractères ne correspond pas à l\'expression régulière /\ba/ ?',
		'reponses' : 
		[
			'"abcd"', 
			'"_a"', 
			'"-a"', 
			'"d c b a"'
		],
		'answer' : 2,
		'difficulty' : 3 //1,2 ou 3
	},
	{
		'theme' : 'JavaScript / DOM',
		'question' : 'Lorsqu\'on presse brièvement un caractère du clavier, quelle séquence d\'événements est générée ?',
		'reponses' : 
		[
			'keypress / keydown / keyup', 
			'keyup / keydown / keypress', 
			'keydown / keypress / keyup', 
			'keydown / keyup / keypress'
		],
		'answer' : 3,
		'difficulty' : 3 //1,2 ou 3
	},
	{
		'theme' : 'JavaScript / DOM',
		'question' : 'Si on presse brièvement une touche autre qu\'un caractère, est-ce la même séquence d\'événements (keydown / keypress / keyup) ?',
		'reponses' : 
		[
			'non, la séquence est alors keydown / keyup', 
			'oui, c\'est identique', 
			'non, la séquence est alors keypress / keydown / keyup', 
			'non, seul l\'événement keypress est généré'
		],
		'answer' : 1,
		'difficulty' : 3 //1,2 ou 3
	},
	{
		'theme' : 'JavaScript / DOM',
		'question' : 'Parmi les affirmations suivantes, laquelle est fausse pour JavaScript version 1.7 ?',
		'reponses' : 
		[
			'L\'élément script se déclare différemment', 
			'On gère les événements de manière différente', 
			'Javascript version 1.7 dispose d\'itérateurs', 
			'On peut se servir de générateurs'
		],
		'answer' : 2,
		'difficulty' : 3 //1,2 ou 3
	},	
	{
		'theme' : 'HTML5',
		'question' : 'Quel est le doctype d\'un document HTML5 ?',
		'reponses' : 
		[
			'<!DOCTYPE html5>', 
			'<!DOCTYPE html>', 
			'<!DOCTYPE html PUBLIC "-//W3C//DTD HTML5.0 Strict//EN">', 
			'<!DOCTYPE html5 PUBLIC "-//W3C//DTD HTML5.0 Strict//EN">' 
		],
		'answer' : 2,
		'difficulty' : 1 //1,2 ou 3
	},	
	{
		'theme' : 'HTML5',
		'question' : 'Quelle nouvelle balise de section permet de regrouper un contenu tangentiel au contenu principal du document ?',
		'reponses' : 
		[
			'<section id="sidebar">', 
			'<sidebar>', 
			'<aside>', 
			'<details>' 
		],
		'answer' : 3,
		'difficulty' : 1 //1,2 ou 3
	},	
	{
		'theme' : 'HTML5',
		'question' : 'La nouvelle balise <time> permet de baliser une date structurée. Quelle serait sa syntaxe pour le 1er avril 2012 à 13h37 ?',
		'reponses' : 
		[
			'<time datetime="2012-04-01T13:37:00Z"></time>', 
			'<time value="2012-04-01 13:37"></time>', 
			'<time datetime="01/04/2012 13H37M00S"></time>', 
			'<time datetime="1-avril-2012T13:37:00"></time> ' 
		],
		'answer' : 1,
		'difficulty' : 1 //1,2 ou 3
	},	
	{
		'theme' : 'HTML5',
		'question' : 'À partir de quelle version d\'Internet Explorer peut-on utiliser nativement les éléments de section HTML5 (sans hack ou script complémentaire) ?',
		'reponses' : 
		[
			'Internet Explorer 8', 
			'Internet Explorer 9', 
			'Internet Explorer 10', 
			'Internet Explorer 11' 
		],
		'answer' : 2,
		'difficulty' : 1 //1,2 ou 3
	},	
	{
		'theme' : 'HTML5',
		'question' : 'Quelle est la méthode pour associer une légende complète à une illustration ?',
		'reponses' : 
		[
			'<figure><img src="image.jpg"><figcaption>La légende...</figcaption></figure>', 
			'<figure src="image.jpg" legend="#cap1"></figure><figcaption id="cap1">La légende...</figcaption>', 
			'<figure><legend>La légende...</legend><img src="image.jpg"></figure>', 
			'<figure src="image.jpg" legend="La légende" />' 
		],
		'answer' : 1,
		'difficulty' : 1 //1,2 ou 3
	},	
	{
		'theme' : 'HTML5',
		'question' : 'Comment représenter une barre de progression à 50% d\'avancement ?',
		'reponses' : 
		[
			'<progress value="50" max="100">50%</progress>', 
			'<input type="progress" value="0.5">50%</progress>', 
			'<input type="progress" value="50" max="100" title="50%" />', 
			'<input type="progress" value=50% />' 
		],
		'answer' : 1,
		'difficulty' : 1 //1,2 ou 3
	},	
	{
		'theme' : 'HTML5',
		'question' : 'Comment associer une liste de choix/suggestions à un champ d\'entrée texte ?',
		'reponses' : 
		[
			'<input datalist="fruits"><list id="fruits"><option value="Kiwi"><option value="Orange"><option value="Mangue"></list>', 
			'<input list="fruits"><datalist id="fruits"><option>Kiwi</option><option>Orange</option><option>Mangue</option></datalist>', 
			'<input list="fruits"><select><datalist id="fruits" values="Kiwi,Orange,Mangue" /></select>', 
			'<input list="fruits" values="Kiwi,Orange,Mangue" />' 
		],
		'answer' : 2,
		'difficulty' : 1 //1,2 ou 3
	},	
	{
		'theme' : 'HTML5',
		'question' : 'Quel attribut permet d\'afficher une image par défaut pour l\'élément <video> ?',
		'reponses' : 
		[
			'<video preview="apercu.jpg">', 
			'<video><param name="thumbnail" value="apercu.jpg" /></video>', 
			'<video poster="apercu.jpg">', 
			'<video="apercu.jpg">' 
		],
		'answer' : 3,
		'difficulty' : 1 //1,2 ou 3
	},	
	{
		'theme' : 'HTML5',
		'question' : 'Quelle balise doit permettre l\'inclusion de sous-titres textes dans les vidéos lues avec <video> ?',
		'reponses' : 
		[
			'<track src="soustitres.vtt">', 
			'<subtitle source="soustitres.srt">', 
			'<captions source="soustitres.srt">', 
			'<source="soustitres.srt">' 
		],
		'answer' : 1,
		'difficulty' : 1 //1,2 ou 3
	},	
	{
		'theme' : 'Accessibilité',
		'question' : 'Quelle initiative menée par le W3C est chargée des questions d\'accessibilité numérique ?',
		'reponses' : 
		[
			'DGME', 
			'Wii', 
			'WCAG', 
			'WAI'
		],
		'answer' : 4,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'Accessibilité',
		'question' : 'En règle générale, quels outils sont employés par les personnes non-voyantes pour naviguer sur Internet ?',
		'reponses' : 
		[
			'Un correcteur optique', 
			'Une synthèse vocale et/ou une plage braille', 
			'Une souris détectant les liens sur les pages', 
			'Un écran en relief'
		],
		'answer' : 2,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'Accessibilité',
		'question' : 'Pour des raisons d\'accessibilité, le W3C a supprimé la balise <table> en XHTML.',
		'reponses' : 
		[
			'C\'est parfaitement Vrai', 
			'C\'est complètement Faux', 
			'Uniquement le vendredi', 
			'Le kiwi mange des bananes'
		],
		'answer' : 2,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'Accessibilité',
		'question' : 'Quel problème d\'accessibilité pose la règle suivante : #page {background: url(fond-noir.png) repeat; color: white;}',
		'reponses' : 
		[
			'Tous les navigateurs ne comprennent pas la valeur "white" pour l\'attribut color, et pourraient afficher le texte en noir sur fond noir.', 
			'Le texte blanc sur fond noir n\'est pas très lisible.', 
			'Si l\'image de fond n\'est pas chargée ou est désactivée par l\'utilisateur, le texte s\'affichera probablement en blanc sur fond blanc.', 
			'De toute façon, ça marchera chez la quasi-totalité des utilisateurs, pas besoin de se monter le bourrichon.'
		],
		'answer' : 3,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'Accessibilité',
		'question' : 'Dans quel cas le code suivant posera-t-il des problèmes d\'accessibilité ?<code><a id="lien" href="index.html" title="Page d\'accueil"> </a><br>#lien { background-image: url(\'icone-home.png\'); }</code>',
		'reponses' : 
		[
			'A: Les utilisateurs ayant désactivé les images', 
			'B: Les utilisateurs sans support de CSS', 
			'C: Les utilisateurs d\'un lecteur d\'écran tel que Jaws', 
			'Propositions A, B et C et plus si affinités'
		],
		'answer' : 4,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'Accessibilité',
		'question' : 'Pourquoi est-il préférable de doubler les a:hover par des a:focus ?',
		'reponses' : 
		[
			'Pour faciliter l\'accès au lien sans la souris', 
			'Pour des raisons de compatibilités entre les navigateurs', 
			'Pour les lecteurs vocaux', 
			'La Ford Focus a des actions au sein du W3C'
		],
		'answer' : 1,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'Accessibilité',
		'question' : 'Dans une démarche d\'accessibilité, quelle solution d\'ouverture de popup (nouvelle fenêtre) serait à privilégier parmi celles-ci ?',
		'reponses' : 
		[
			'<a href="page.html" target="_blank">Lien</a>', 
			'<a href="javascript:void(window.open(\'page.html\'));">Lien</a>', 
			'<a href="page.html" onclick="return !window.open(this.href);">Lien</a>', 
			'Dans une réelle démarche d\'accessibilité, aucune des solutions précédentes n\'est à privilégier'
		],
		'answer' : 4,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'Accessibilité',
		'question' : 'A qui profitent les liens d\'évitement placés en haut de page ("Aller au menu", "Aller au contenu", "Aller à la recherche",...) ?',
		'reponses' : 
		[
			'Aux personnes ayant des problèmes moteur', 
			'A ceux qui ne peuvent pas utiliser de souris', 
			'Aux personnes non-voyantes', 
			'Tous les internautes'
		],
		'answer' : 4,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'COBOL',
		'question' : 'Dans le code suivant de la FILE-CONTROL: SELECT fic1 ASSIGN (TO) fichier1. fic1 est :',
		'reponses' : 
		[
			'Connu uniquement dans le JCL', 
			'Connu dans le programme et dans le JCL', 
			'Connu uniquement à l\’intérieur du programme', 
			'Connu uniquement par le système d\’exploitation'
		],
		'answer' : 3,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'COBOL',
		'question' : 'Quelle est la clause permettant de définir un tableau ?',
		'reponses' : 
		[
			'GLOBAL', 
			'USAGE', 
			'OCCURS', 
			'SYNCHRONIZED'
		],
		'answer' : 3,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'COBOL',
		'question' : 'Les paramètres suivants : RANDOM , DYNAMIC',
		'reponses' : 
		[
			'Décrivent des organisations de fichiers', 
			'Sont des modes d\’accès de fichier', 
			'Existent en JCL mais pas en cobol', 
			'Existent dans le langage AMS mais pas en cobol'
		],
		'answer' : 2,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'COBOL',
		'question' : 'Sur Z/OS, comment se nomme la couche logicielle qui attribue les ressources machine aux informaticiens connectés ?',
		'reponses' : 
		[
			'ISMF', 
			'TSO', 
			'CICS', 
			'SDSF'
		],
		'answer' : 3,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'COBOL',
		'question' : 'Qu\'appelle-t-on un fichier VSAM ?',
		'reponses' : 
		[
			'un catalogue', 
			'un fichier séquentiel indexé sur un champ de l\'enregistrement', 
			'un fichier à plusieurs générations', 
			'un fichier au format csv'
		],
		'answer' : 2,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'COBOL',
		'question' : 'Quelle est la longueur maximale d\'un nom de fichier y compris les points ?',
		'reponses' : 
		[
			'36', 
			'44', 
			'52', 
			'64'
		],
		'answer' : 2,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'COBOL',
		'question' : 'Quel est l\'utilitaire nécessaire pour copier des membres d\'une bibliothèque (pds) à l\'autre ?',
		'reponses' : 
		[
			'REPRO IDCAMS', 
			'ICEGENER', 
			'ICECOPY', 
			'IEBCOPY'
		],
		'answer' : 4,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'COBOL',
		'question' : 'Quand on utilise l\'utilitaire IPOUPDTE sur un pds, quel est le nom du membre (créée à vide ou avec des lignes de commentaires) qui doit impérativement exister ?',
		'reponses' : 
		[
			'$$IBMPDS', 
			'MEMBER', 
			'$$$COIBM', 
			'Le nom n\'a pas d\'importance'
		],
		'answer' : 3,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'COBOL',
		'question' : 'Quelle est l\'instruction REXX qui permet de connaitre la position d\'un mot (séparé par des blanc) dans une chaine de caractères ?',
		'reponses' : 
		[
			'POS', 
			'WORDPOS', 
			'POSITION', 
			'strpos'
		],
		'answer' : 2,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'COBOL',
		'question' : 'Quel est le nom de l\'utilitaire utilisé pour trier les enregistrements d\'un fichier séquentiel ?',
		'reponses' : 
		[
			'SORT', 
			'IEBPTPCH', 
			'IEBCOPY', 
			'IPOUPDTE'
		],
		'answer' : 1,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'COBOL',
		'question' : 'Quelle est la commande, dans la log mvs, permettant de savoir par quelle ressource est détenu un fichier nommé SSTXH.ANOS.FIC10 ?',
		'reponses' : 
		[
			'/D GRS,SSTXH.ANOS.FIC10', 
			'/D GRS,RES=(*, SSTXH.ANOS.FIC10)', 
			'/D A,L', 
			'/D LLA'
		],
		'answer' : 2,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'COBOL',
		'question' : 'Quelle est la commande, sur la master console, permettant de connaître les STC (tâches) actives ?',
		'reponses' : 
		[
			'D A,L', 
			'D R,R', 
			'D LLA', 
			'D GRS'
		],
		'answer' : 1,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'COBOL',
		'question' : 'Quelle est la transcription en Héxadécimal d\'un espace (blanc) en EBCDIC ?',
		'reponses' : 
		[
			'40', 
			'00', 
			'BB', 
			'20'
		],
		'answer' : 1,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'COBOL',
		'question' : 'En jcl, qu\'elle est l\'instruction à coder à la suite de l\'appel d\'un programme d\'un step pour que ce dernier ne s\'exécute que si le step précédent retourne un code retour strictement supérieur à 3 ?',
		'reponses' : 
		[
			'COND=(3,LT)', 
			'COND=(3,GE)', 
			'COND=(3,GT)', 
			'COND=(>3)'
		],
		'answer' : 3,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'COBOL',
		'question' : 'Qu\'est ce qu\'un Mastercat ?',
		'reponses' : 
		[
			'Un fichier VSAM contenant des dsnames de fichiers créés sur une partition', 
			'un utilitaire MVS', 
			'le disque de Boot (initialisation) de la machine', 
			'Le maître des chats'
		],
		'answer' : 1,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'COBOL',
		'question' : 'Quelle est la commande qui permet, par ISPF, de compresser un pds (bibliothèque) ?',
		'reponses' : 
		[
			'COMPRESS', 
			'C', 
			'D', 
			'Z'
		],
		'answer' : 4,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'COBOL',
		'question' : 'Quelle est l\'instruction JCL dans la carte job, qui permet sans lancer le job, de vérifier sa syntaxe ?',
		'reponses' : 
		[
			'TYPRUN=SCAN', 
			'TYPRUN=HOLD', 
			'NOTIFY=&SYSUID', 
			'TYPRUN=VERIFY'
		],
		'answer' : 1,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'PYTHON',
		'question' : 'Qu\'affiche le script suivant ?<code>n = 0<br>while n<15 :<br>   n = n + 2<br>print(n)</code>',
		'reponses' : 
		[
			'14', 
			'15', 
			'16', 
			'17'
		],
		'answer' : 3,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'PYTHON',
		'question' : 'Qu\'affiche le script suivant ?<code>n = 10<br>while n>=11 :<br>   n = n + 2<br>print(n)</code>',
		'reponses' : 
		[
			'10', 
			'11', 
			'12', 
			'13'
		],
		'answer' : 1,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'PYTHON',
		'question' : 'Qu\'affiche le script suivant ?<code>n = 0<br>for i in range(5) :<br>   n = n + 1<br>print(n)</code>',
		'reponses' : 
		[
			'4', 
			'5', 
			'6', 
			'7'
		],
		'answer' : 2,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'PYTHON',
		'question' : 'Qu\'affiche le script suivant ?<code>n = 0<br>for i in range(5) :<br>   n = n + 1<br>print(i)</code>',
		'reponses' : 
		[
			'4', 
			'5', 
			'6', 
			'7'
		],
		'answer' : 1,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'PYTHON',
		'question' : 'Qu\'affiche le script suivant ?<code>resultat = ""<br>for c in "Bonsoir" :<br>   resultat = resultat + c<br>print(resultat)</code>',
		'reponses' : 
		[
			'Bonsoir', 
			'riosnoB', 
			'soirBon', 
			'BonsoirBonsoirBonsoir'
		],
		'answer' : 1,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'C++',
		'question' : 'Pourquoi le nom C++ ?',
		'reponses' : 
		[
			'Parce que c\'est l\'incrémenation du langage C', 
			'Parce que c\'est le langage C plus le langage Javascript', 
			'Parce que c\'est plus classe' , 
			'Parce que c\'est plus plus'
		],
		'answer' : 1,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'C++',
		'question' : 'Quel est le nom des #include au début d\'un code ?',
		'reponses' : 
		[
			'Les directives de procédure', 
			'Les directives de préprocesseur', 
			'Les directeurs de programme', 
			'Les directeurs de préprocesseur'
		],
		'answer' : 2,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'C++',
		'question' : 'Quelle est l\'utilité d\'un pointeur ?',
		'reponses' : 
		[
			'Mettre en valeur une variable', 
			'Accéder à l'adresse RAM d\'une variable', 
			'Changer l'adresse RAM d\'une variable', 
			'Changer l'adresse ROM d\'une variable'
		],
		'answer' : 2,
		'difficulty' : 1 //1,2 ou 3
	}
	{
		'theme' : 'C++',
		'question' : 'Comment faire une allocation dynamique ?',
		'reponses' : 
		[
			'Int *variable = new int', 
			'Int *variable = alloc(int)', 
			'Int *variable = point(int)', 
			'Int = point(int)'
		],
		'answer' : 1,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'C++',
		'question' : 'Comment s\'appelle une interface graphique ?',
		'reponses' : 
		[
			'Une CUI', 
			'Une GUI', 
			'Une GUO', 
			'Une CUO'
		],
		'answer' : 2,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'C++',
		'question' : 'Quel est le #include à ajouter pour réaliser un logarithme ?',
		'reponses' : 
		[
			'Cmath', 
			'Qmath', 
			'Qcmath', 
			'Lmath'
		],
		'answer' : 1,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'C++',
		'question' : 'QT utilise-t-il des variables propres à lui et plus complètes ?',
		'reponses' : 
		[
			'Faux', 
			'Tout dépend', 
			'Oui', 
			' '
		],
		'answer' : 2,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'C++',
		'question' : 'Pour créer automatiquement des ennemis dans un jeu de Tower Defense, j\'utilise :',
		'reponses' : 
		[
			'L\'allocation dynamique', 
			'L\'implémentation dynamique', 
			'Rien, je les crée un par un', 
			' '
		],
		'answer' : 1,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'C++',
		'question' : 'Quelle bibliothèque de graphisme 2D, de son, de réseau, etc. est l\'alternative C++ à la SDL du langage C ?',
		'reponses' : 
		[
			'SDL++', 
			'SFML', 
			'Ogre', 
			'GD'
		],
		'answer' : 2,
		'difficulty' : 1 //1,2 ou 3
	}
	{
		'theme' : 'C++',
		'question' : 'Peut on créer des interactions client-serveur et vice versa avec le C++ ?',
		'reponses' : 
		[
			'Bien sûr !', 
			'Bien sûr que non !', 
			'Tout dépend', 
			' '
		],
		'answer' : 1,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'C++',
		'question' : 'Qu\'ajouter à un exécutable pour lui permettre certaines fonctionnalités ?',
		'reponses' : 
		[
			'Un . lib', 
			'Un . dll', 
			'Un . txt', 
			'Un . c'
		],
		'answer' : 2,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'C++',
		'question' : 'Peut-on interagir avec des bases de données avec le C++ ?',
		'reponses' : 
		[
			'Oui', 
			'Non', 
			'Tout dépend', 
			' '
		],
		'answer' : 1,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'C++',
		'question' : 'Quel est l\'utilité de try{} catch(){} ?',
		'reponses' : 
		[
			'Tenter de réaliser un calcul très compliqué', 
			'Tenter de réaliser une opération qui peut échouer', 
			'Tenter de lancer un programme extérieur et recevoir sa réponse', 
			'Tenter de lancer une procédure extérieur et recevoir sa réponse'
		],
		'answer' : 2,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'C++',
		'question' : 'Le HTML est-il utile en C++ ?',
		'reponses' : 
		[
			'Non, car c\'est un langage internet...', 
			'Oui très, pour les options de mise en page surtout pour les interfaces graphiques', 
			'Uniquement en console', 
			' '
		],
		'answer' : 2,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'C++',
		'question' : 'Peut-on parser du XML à l\'aide du C++ ?',
		'reponses' : 
		[
			'Oui', 
			'Non', 
			'Cela n\'a pas de signification', 
			' '
		],
		'answer' : 1,
		'difficulty' : 1 //1,2 ou 3
	}
	{
		'theme' : 'C++',
		'question' : 'Le C++ est le langage par excellence pour réaliser des jeux en ligne',
		'reponses' : 
		[
			'Vrai', 
			'Faux, le javascript, accompagné d\'AJAX et de JSON, est une meilleure alternative', 
			'Tout dépend si c\'est un jeu par navigateur ou non', 
			' '
		],
		'answer' : 3,
		'difficulty' : 1 //1,2 ou 3
	},	
	{
		'theme' : 'JEE',
		'question' : 'Pourquoi le framwork Spring est-il qualifié comme un conteneur léger ?',
		'reponses' : 
		[
			'Pour la taille des jars', 
			'La faible charge de développement nécessaire', 
			'La possibilité de déployer une application sur un conteneur de servlet', 
			'En opposition avec EJB'
		],
		'answer' : 3,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'JEE',
		'question' : 'Que va afficher ce programme ? <code>public class A {<br>}<br>public class B extends A{<br>}<br>public class Test {<br>public static void main(String[] args) {<br>B b = new B();<br>A a = new A();<br>System.out.print(b instanceof A);<br>System.out.print(b instanceof B);<br>System.out.print(a instanceof A);<br>System.out.print(a instanceof B);<br>}<br>}<br></code>',
		'reponses' : 
		[
			'False false false false', 
			'False false false true', 
			'True true false true', 
			'True true true false'
		],
		'answer' : 4,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'JEE',
		'question' : 'Pour qu\'un attribut soit instancié avec un bean on doit utiliser l\'annotation ?',
		'reponses' : 
		[
			'@Autowired', 
			'@Value', 
			'@Controller', 
			'@Ressource'
		],
		'answer' : 4,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'JEE',
		'question' : 'Pour garder l\'ordre d\'insertion des clés, on doit utiliser la classe :',
		'reponses' : 
		[
			'TreeTable', 
			'HashTable', 
			'LinkedHashMap', 
			'LinkedHashSet'
		],
		'answer' : 3,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'JEE',
		'question' : 'Le fichier de configuration de Struts 2 est :',
		'reponses' : 
		[
			'Struts.xml', 
			'Application-context.xml', 
			'Struts-config.xml', 
			'Struts-ini.xml'
		],
		'answer' : 3,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'JEE',
		'question' : 'Le scope par défaut d\'un bean Spring ?',
		'reponses' : 
		[
			'Session', 
			'Singleton', 
			'Prototype', 
			'Spring'
		],
		'answer' : 2,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'JEE',
		'question' : 'Pour empêcher une classe d\'être étendue, on utilise la clause ',
		'reponses' : 
		[
			'Static', 
			'Volatile', 
			'Final', 
			'Abstract'
		],
		'answer' : 3,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'JEE',
		'question' : 'Quel est le fichier de configuration de Hibernate ?',
		'reponses' : 
		[
			'Hibernate.xml', 
			'Hibernate-cfg.xml', 
			'Hibernate-config.xml', 
			'Hibernate.cfg.xml'
		],
		'answer' : 4,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'JEE',
		'question' : 'Lequel n\'est pas un serveur d\'application dans un environement JEE ?',
		'reponses' : 
		[
			'JBOSS', 
			'JONAS', 
			'Tomcat', 
			'GlassFish'
		],
		'answer' : 3,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'JEE',
		'question' : 'Quelle édition java est destinée au développement d\'applications pour ordinateurs personnels ou des applets ?',
		'reponses' : 
		[
			'J2ME', 
			'J2EE', 
			'J2SE', 
			'J2PE'
		],
		'answer' : 3,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'C#',
		'question' : 'Parmi ces types de variables, lequel doit-on utiliser pour indiquer qu\'une méthode ne renvoie rien ?',
		'reponses' : 
		[
			'return', 
			'string.empty', 
			'void', 
			'int'
		],
		'answer' : 3,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'C#',
		'question' : 'Qu\'affiche le code suivant ? <code>static void Main(string[] args)<br>{<br>int i=Somme(3,Somme(4,5));<br>Console.WriteLine(i);<br>}<br>private static int Somme(int a,int b)<br>{<br>if(a==5)<br>return 1;<br>else<br>return a+b;<br>}<br></code>',
		'reponses' : 
		[
			'0', 
			'4', 
			'8', 
			'12'
		],
		'answer' : 4,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'C#',
		'question' : 'Qu\'affiche le code suivant ?<code>int[] tab=new int[] {1,2,3,4};<br>int resultat=tab[1]+tab[2];<br>Console.WriteLine(resultat);<br></code>',
		'reponses' : 
		[
			'1', 
			'3', 
			'5', 
			'7'
		],
		'answer' : 3,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'C#',
		'question' : 'Quelle est la réponse exacte concernant le code suivant ?<code>int[] tab = new int[4];<br>tab[0] = 2;<br>tab[1] = 4;<br>tab[2] = 6;<br>tab[3] = 8;<br>tab[4] = 10;<br>tab[3] = 0;<br></code>',
		'reponses' : 
		[
			'Le code ne compile pas', 
			'Le code s\'exécute sans problèmes', 
			'Le code provoque une erreur à l\'exécution car on tente de mettre 2 valeurs différentes à l\'indice 3', 
			'Le code provoque une erreur a l\’exécution car on accède à un indice en dehors des limites du tableau'
		],
		'answer' : 4,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'C#',
		'question' : 'À quoi sert le mot-clé using ?',
		'reponses' : 
		[
			'À importer un espace de noms', 
			'À référencer une assembly du framework .NET', 
			'À mettre une assembly dans le Global Assembly Cache (GAC)', 
			'À rien'
		],
		'answer' : 1,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'C#',
		'question' : 'Qu\'affiche le code suivant ?<code>int i;<br>for (i = 0; i < 10; i++);<br>Console.Write(i);<br></code>',
		'reponses' : 
		[
			'0123456789', 
			'012345678910', 
			'9', 
			'10'
		],
		'answer' : 4,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'C#',
		'question' : 'Que donne le code suivant ?<code>int[] tableau = new int[] { 1, 2, 3 };<br>foreach (int valeur in tableau)<br>{<br>Console.Write(valeur);<br>}<br>Console.Write(valeur);<br></code>',
		'reponses' : 
		[
			'123', 
			'1233', 
			'Le code ne compile pas', 
			'3'
		],
		'answer' : 3,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'C#',
		'question' : 'Qu\'obtenez-vous avec le code suivant ? <code>int[] tableau = new int[] { 1, 2, 3, 4 };<br>int i = 0;<br>while (i <= tableau.Length)<br>{<br>Console.Write(tableau[i]);<br>i++;<br>}<br></code>',
		'reponses' : 
		[
			'1234', 
			'4', 
			'Une boucle infinie', 
			'Ce code plante'
		],
		'answer' : 4,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'C#',
		'question' : 'En C#, les string (chaînes de caractères) sont... ',
		'reponses' : 
		[
			'... imbitables', 
			'... mutables', 
			'... immutables', 
			'... inclassables'
		],
		'answer' : 3,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'C#',
		'question' : 'Lorsqu\'on applique le Domain Driven Design, à quoi sert la base de données ?',
		'reponses' : 
		[
			'A contenir la logique métier dans des procédures stockées', 
			'A donner des droits d\'accès aux données aux utilisateurs', 
			'A persister les données', 
			'A archiver les vieux produits qui ne sont plus en vente'
		],
		'answer' : 3,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'C#',
		'question' : 'Quelle classe permettrait de corriger la grossière faute que contient le code suivant ? <code>1.	IList<Client> clients = ClientsRepository.GetAll();<br>2.	string commaSeparatedClientsName = string.Empty;<br>3.<br>4.	foreach (Client client in clients)<br>5.	{<br>6.	    commaSeparatedClientsName += client.Name + ",";<br>7.	}<br></code>',
		'reponses' : 
		[
			'ArrayList', 
			'StringBuilder', 
			'TagBuilder', 
			'CSVBuilder'
		],
		'answer' : 2,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'C#',
		'question' : 'Dans un projet contenant une couche métier, une couche d\'accès aux données, et une couche applicative, qui réfèrence logiquement quoi ? ',
		'reponses' : 
		[
			'La couche métier référence la couche applicative.La couche d\'accès aux données référence la couche applicative.La couche applicative ne référence rien.', 
			'La couche métier référence la couche d\'accès aux données.La couche d\'accès aux données référence la couche métier.La couche applicative ne référence rien.', 
			'La couche métier référence la couche d\'accès aux données.La couche d\'accès aux données référence la couche applicative.La couche applicative référence la couche d\'accès aux données.', 
			'La couche métier ne référence rien.La couche d\'accès aux données référence la couche métier.La couche applicative référence la couche métier et la couche d\'accès aux données.'
		],
		'answer' : 4,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'C#',
		'question' : 'Quelle est la différence entre les delegates Action et Func ?',
		'reponses' : 
		[
			'Action n\'a pas de type de retour, alors que Func en a un', 
			'Action s\'exécute instantanément alors que Func s\'exécute au bout d\'un certain délai défini par le développeur', 
			'Action est Threadsafe alors que Func ne l\'est pas', 
			'Action concerne les méthodes statiques alors que Func concerne les méthodes d\'instance'
		],
		'answer' : 1,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'C#',
		'question' : 'Lorsqu\'on utilise un ORM (comme Entity Framework ou NHibernate), qu\'appelle-t-on le problème du "select N+1" ? ',
		'reponses' : 
		[
			'C\'est lorsque qu\'au cours du calcul d\'une somme d\'agrégat on compte la ligne d\'en-tête', 
			'C\'est lorsque l\'on récupère auprès de la source de données une collection d\'objets en les requêtant un par un', 
			'C\'est lorsque l\'on récupère la longueur d\'une chaîne de caractères en oubliant de tronquer le caractère de terminaison', 
			'C\'est lorsque l\'on utilise une sous-requête alors qu\'on pourrait s\'en passer'
		],
		'answer' : 2,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'C#',
		'question' : 'Quelle sera la valeur de la variable foobar à la fin de l\'exécution de ce code ?<code>1.	int? foobar = 42, dummy = null;<br>2.	string text = null;<br>3.	foobar = text != null ? text.Length : 10;<br>4.	foobar = dummy ?? null;<br></code>',
		'reponses' : 
		[
			'10', 
			'null', 
			'4', 
			'42'
		],
		'answer' : 2,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'C#',
		'question' : 'En Domain Driven Design, que désigne-t-on sous le nom de "domain" ',
		'reponses' : 
		[
			'L\'ensemble des noms de réseaux et sous-réseaux appartenant à l\'entreprise', 
			'La spécialité à laquelle appartient le chef de projet', 
			'L\'ensemble des connaissances qui constituent la logique métier', 
			'L\'ensemble des technologies sélectionnées pour réaliser un projet'
		],
		'answer' : 3,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'C#',
		'question' : 'Comment appelle-t-on le code suivant ?<code>1.	x => x.Length == 12<br></code>',
		'reponses' : 
		[
			'Expression de demie-vie', 
			'Expression lambda', 
			'Expression adhoc', 
			'Query expression'
		],
		'answer' : 2,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'C#',
		'question' : 'Lequel de ces types n\'est pas un type valeur ? ',
		'reponses' : 
		[
			'DateTime', 
			'string', 
			'int', 
			'char'
		],
		'answer' : 2,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'C#',
		'question' : 'Quel sera le résultat de cette opération ? <code>1.	var result = 2 / 3;<br></code>',
		'reponses' : 
		[
			'result est de type double et sa valeur est 0.6666666666666666', 
			'result est de type decimal et sa valeur est 0.66666666', 
			'result est de type float et sa valeur est 0.6666', 
			'result est de type int et sa valeur est 0'
		],
		'answer' : 4,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'C#',
		'question' : 'A partir du Framework .NET 3.5, que permet d\'abstraire une interface ? ',
		'reponses' : 
		[
			'Les propriétés, les méthodes, les indexeurs et les événements', 
			'Les propriétés, les méthodes et les délégués', 
			'Les propriétés, les méthodes, les délégués, les énumérations et les événements', 
			'Les propriétés et les méthodes'
		],
		'answer' : 1,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'C#',
		'question' : 'Quelle est la différence entre ces deux lignes de code ?<code>1.	// Cas 1<br>2.	Person person = (Person)something;<br>3.<br>4.	// Cas 2<br>5.	Person person = something as Person;<br></code>',
		'reponses' : 
		[
			'Si something est bien de type Person, le cas 1 conservera aussi ses propriétés provenant d\'autres types, alors que le cas 2 les effacera', 
			'Si something n\'est pas de type Person, le cas 1 lèvera une exception alors que le cas 2 renverra une nouvelle instance de la classe Person', 
			'Si something n\'est pas de type Person, le cas 1 lèvera une exception alors que le cas 2 renverra null', 
			'Il n\'y aucune différence. On effectue juste la même opération de deux manières différentes'
		],
		'answer' : 3,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'C#',
		'question' : 'Ce code compilé en C# 4.0 va lever une RuntimeBinderException. Mais à quel moment ? <code>1.	dynamic title = "My favorite mistake";<br>2.	int numberOfLetters = title.Size;<br></code>',
		'reponses' : 
		[
			'Au moment de saisir le code dans Visual Studio', 
			'A la compilation du code', 
			'A l\'exécution du code', 
			'A l\'installation du programme'
		],
		'answer' : 3,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'C#',
		'question' : 'Quel type sera donné à la variable result grâce à l\'inférence de type ?',
		'reponses' : 
		[
			'Func<int, int, string>', 
			'On ne peut pas inférer le type d\'une expression lambda', 
			'Expression<int, int, string>', 
			'Expression<Func<int, int, string>>'
		],
		'answer' : 2,
		'difficulty' : 1 //1,2 ou 3
	},
	{
		'theme' : 'C#',
		'question' : 'A quel élément du pattern architectural Domain Driven Design correspond la définition suivante ?',
		'reponses' : 
		[
			'Value object', 
			'Entity', 
			'Aggregate', 
			'Repository'
		],
		'answer' : 1,
		'difficulty' : 1 //1,2 ou 3
	}
];
