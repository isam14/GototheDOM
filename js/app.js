//Step 2
//ajoute du texte avec des balises html
document.getElementById("addText").innerHTML = "Hello World";

	console.log('hello world');  


//ajoute que du texte
addText.textContent = "Hello World";
//Step 3
//element.removeChild(remove);

//exercice2
var removeId = document.getElementById('remove');
removeId.remove();

//exercice 3
var changeColor = document.getElementById('changeColor');
changeColor.style.backgoundColor = 'red';

// Exercice 5

var addChildren = document.getElementById('addChildren');
var child;

for (var i = 0; i < 4.; i++) {
	addChildren.innerHTML += "<p>blabla</p>";
}