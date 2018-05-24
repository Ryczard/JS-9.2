var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'],
	maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'],
	allNames = femaleNames.concat(maleNames),
	newName = 'Marian';

console.log(allNames);

if (allNames.indexOf(newName) === -1){
	allNames.push(newName);
} 