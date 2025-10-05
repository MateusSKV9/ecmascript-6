var map = new Map();

map.set("um", 1);
map.set("dois", 2);
map.set("tres", 3);

for (var chave of map.keys()) {
	console.log(chave);
}

console.log("---");

for (var valor of map.values()) {
	console.log(valor);
}

console.log("---");

for (var entrada of map.entries()) {
	console.log(entrada);
}
