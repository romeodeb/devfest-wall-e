var _quizzData = [
	
	
	{
		'theme' : 'php',
		'question' : 'Que donne le code suivant en PHP5 ?<code>$b = false;<br>$a = unset($b);<br>var_dump($a);<br></code>',
		'reponses' : 
		[
			'NULL', 'Une erreur PHP', 'bool(true)', 'bool(false)' , 'ressource(#)'
		],
		'answer' : 2,
		'difficulty' : 3 //1,2 ou 3

	},
	{
		'theme' : 'php',
		'question' : 'Qu\'affiche le code suivant ? <code>$a = \'a\'.file_exists(__FILE__);<br>$a1 = \'wiki\';<br>$a2 = \'kiwi\';<br>echo ${$a};</code>',
				'reponses' : 
		[
			'kiwi', 'wiki', 'Une erreur PHP' , 'Aucune des réponses précédentes'
		],
		'answer' : 2,
		'difficulty' : 1 //1,2 ou 3

	},
	{
		'theme' : 'php',
		'question' : 'On interprète le code suivant:<code>$a = \'ki\' || \'wi\';<br>$b = \'ki\' or \'wi\';<br></code>Que donne var_dump($a, $b); ?',
		'reponses' : 
		[
			'bool(true) bool(true)', 'string(2) "ki" bool(true)', 'bool(true) string(2) "ki"', 'ki wi' 
		],
		'answer' : 3,
		'difficulty' : 3 //1,2 ou 3

	},
	{
		'theme' : 'php',
		'question' : 'Quelle fonction retire un élément de la fin d\'un tableau ?',
		'reponses' : 
		[
			'array_splice()', 'array_pop()', 'array_pad()', 'array_shift()' 
		],
		'answer' : 2,
		'difficulty' : 1 //1,2 ou 3

	},
	{
		'theme' : 'php',
		'question' : 'Quelle fonction permet d\'effacer un fichier ?',
		'reponses' : 
		[
			'delete()', 'unlink()', 'remove()', 'clearfile()' 
		],
		'answer' : 2,
		'difficulty' : 1 //1,2 ou 3

	},
	{
		'theme' : 'java',
		'question' : 'ma question1',
		'reponses' : 
		[
			'reponse1', 'reponse2', 'reponse3', 'reponse4' 
		],
		'answer' : 1,
		'difficulty' : 1 //1,2 ou 3

	},
	{
		'theme' : 'java',
		'question' : 'ma question2',
		'reponses' : 
		[
			'reponse1', 'reponse2', 'reponse3', 'reponse4' 
		],
		'answer' : 1,
		'difficulty' : 1 //1,2 ou 3

	}	

	
];
