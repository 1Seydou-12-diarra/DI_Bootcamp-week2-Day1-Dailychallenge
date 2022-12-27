// Exercice 1 :
// En utilisant ce tableau :
// Supprimez Banana de la baie.
// Triez le tableau par ordre alphabétique.
// Ajoutez "Kiwi" à la fin du tableau.
// Supprimez "Apples" du tableau. N'utilisez pas la même méthode que dans la partie 1.
// Triez le tableau dans l'ordre inverse. (Pas alphabétique, mais inversez le tableau actuel, c'est-à-dire que ['a', 'c', 'b'] devient ['b', 'c', 'a'])
// À la fin, vous devriez voir ce résultat :

const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
 fruits.shift("Banana");
 fruits.sort();
 fruits.push("Kiwi");
 fruits.splice(0,1);
 fruits.reverse();
 console.log(fruits);

//  Exercice 2 :
// En utilisant ce tableau  Accédez puis console.log « Oranges ».:

const moreFruits = ["Banana", 
["Apples", 
["Oranges"],
"Blueberries"]
];
console.log( moreFruits[1][1]);