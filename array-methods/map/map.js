var numbers = [1, 2, 3, 4];
var double = [];

console.log("==> Usando for: ");
for (var i = 0; i < numbers.length; i++) {
	double.push(numbers[i] * 2);
}
console.log(double);

console.log("\n==> Usando map: ");
var tripledNumbers = numbers.map(function (number) {
	return number * 3;
});
console.log(tripledNumbers);
