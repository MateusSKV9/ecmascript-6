var numbers = [1, 2, 3, 4, 5];

for (var number of numbers) {
	if (number === 2) {
    console.log("-");
		continue;
	}
	console.log(number);
}
