var numbers = [1, 2, 3, 4, 5];
var total = 0;

console.log("==> Usando for: ");
for (var i = 0; i < numbers.length; i++) {
	total += numbers[i];
}

console.log(total);

console.log("\n==> Usando reduce: ");

var sum = numbers.reduce(function (sum, num) {
	return sum + num;
}, 0);
console.log(sum);

console.log("\n==> Usando reduce para criar array de números: ");

var students = [
	{ name: "Mateus", age: 21 },
	{ name: "Maria", age: 23 },
	{ name: "João", age: 19 },
];

var names = students.reduce(function(arrayNames, student) {
  arrayNames.push(student.name);
  return arrayNames;
}, []);
console.log(names);
