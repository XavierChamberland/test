function Exercice1()
{
	//Écrivez ici le code pour l'exercice 1
}

function Exercice2()
{
	//Écrivez ici le code pour l'exercice 2
}

function Exercice3()
{
	//Écrivez ici le code pour l'exercice 3
}

function Exercice4()
{
	//Code à corriger de l'exercice 4
	
	var nom;
	var age;
	var majeur;
	var choix;
	
	nom = alert("Quel est votre nom?");
	majeur = confirm("Êtes-vous majeur(e)?");
	Age = prompt("Quel est votre âge?");
	
	if(majeur && age > 17)
	{
		alert("Vous dites la vérité!");
	}
	else
	{
		alert("Vous mentez!");
		majeur = false;
	}
	
	choix = confirm("Que préférez-vous (entrez le chiffre)? \n 1 - Les RPG \n 2 - Les shooters" + 
					"\n 3 - Les RTS \n 4 - Les MOBA")
	
	switch(choix)
	{
		case 1: 
			alert(nom + " a " + age + "ans et préfère les jeux de rôles!");
		case 2:
			alert(nom + " a " + age + "ans et préfère les jeux de tirs!");
		case 3:
			alert(nom + " a " + age + "ans et préfère les jeux de stratégies!");
		case 4:
			alert(nom + " a " + age + "ans et préfère les jeux d'arènes de combat!");
		default:
			alert(nom + " a " + age + "ans et ne sait pas entrer un chiffre entre 1 et 4!");
	}
}

function Exercice5()
{
	//Écrivez ici le code pour l'exercice 5
}