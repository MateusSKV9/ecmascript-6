var names = ["Mateus", "Maria", "João", "Filipe"];

console.log("==> Usando for: ");
for (var i = 0; i < names.length; i++) {
	console.log(i + 1 + ". " + names[i]);
}

console.log("\n==> Usando forEach: ");
names.forEach(function (name, index) {
	console.log(index + 1 + ". " + name);
});

function printName(name, index) {
	console.log(index + 1 + "." + name);
	i++;
}

console.log("\n==> Passando uma função não anônima: ");
names.forEach(printName);

// O forEach lista ou percorre apenas os dados existente no array no momento da sua invocação

console.log("\n==> Canais: ");
var channels = ["Globo", "Sbt", "Record"];
channels.forEach(function (channel) {
	channels.push("TV Cultura");
	console.log(channel);
});

console.log("\n" + channels.join(" - "));
