var students = [
	{ name: "Mateus", age: 21 },
	{ name: "Maria", age: 11 },
	{ name: "João", age: 23 },
	{ name: "Pedro", age: 12 },
];

console.log("==> Alunos maiores de idade <== \n");

var adultStudents = [];

console.log("=> Usando for: ");
for (var i = 0; i < students.length; i++) {
	if (students[i].age >= 18) {
		adultStudents.push(students[i]);
	}
}
console.log(adultStudents);

console.log("\n=> Usando filter: ");
var filtredStudents = students.filter(function (student) {
	return student.age >= 18; // retorna true e adicona student à variável
});
console.log(filtredStudents);
