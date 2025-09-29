var students = [
	{ name: "Ana", age: 18 },
	{ name: "Beatriz", age: 20 },
	{ name: "Carla", age: 24 },
	{ name: "Daniel", age: 19 },
	{ name: "Elias", age: 20 },
];

var allAdult = true;

console.log("==> Usando for: ");
for (var i = 0; i < students.length; i++) {
	if (students[i].age < 18) {
		allAdult = false;
		break;
	}
}
console.log(allAdult);

console.log("\n==> Usando every: ");
var allAdultStudents = students.every(function (student) {
	return student.age >= 18;
});
console.log(allAdultStudents);

console.log("\n==> Usando arrow function: ");
var allAdultStudents2 = students.every((student) => {
	student.age >= 18;
});
console.log(allAdultStudents2);
