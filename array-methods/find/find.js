var students = [{ name: "João" }, { name: "Maria" }, { name: "Pedro" }];

var student;

console.log("==> Usando for: ");
for (var i = 0; i < students.length; i++) {
	if (students[i].name === "Pedro") {
		student = students[i];
		break;
	}
}
console.log(student);

console.log("\n==> Usando find: ");
var findedStudent = students.find(function (student) {
	return student.name === "Maria";
});
console.log(findedStudent);
