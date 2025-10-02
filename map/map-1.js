var map = new Map();
function funcao() {}
var objeto = {};

map.set("string", "sou uma string");
map.set(objeto, "sou um objeto");
map.set(funcao, "sou uma funcao");

console.log(map.get("string"));
console.log(map.get(objeto));
console.log(map.get(funcao));
console.log(map);

console.log("tamanho: " + map.size);

console.log("possui string: " + map.has("string"));
console.log(map.has("abc"));

map.delete("string");
console.log(map.has("string"));
console.log(map);

map.clear();
console.log(map.size);
console.log(map);

