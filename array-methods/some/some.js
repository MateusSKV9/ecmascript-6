var weights = [12, 32, 26, 39];

console.log("==> Usando for: ");
var hasBigger30 = false;
for (var i = 0; i < weights.length; i++) {
	if (weights[i] > 30) {
		hasBigger30 = true;
		break;
	}
}
console.log(hasBigger30);

console.log("\n==> Usando some: ");
var bigger50 = weights.some(function (weight) {
	return weight > 50;
});
console.log(bigger50);
