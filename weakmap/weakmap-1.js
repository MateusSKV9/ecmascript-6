var Pessoa = (function () {
	var dadosPrivados = new WeakMap();

	function Pessoa(nome) {
		dadosPrivados.set(this, { nome: nome });
	}

	Pessoa.prototype.getNome = function () {
		return dadosPrivados.get(this).nome;
	};

	return Pessoa;
})();

var mateus = new Pessoa("Mateus");
console.log(mateus.getNome());
console.log(mateus.nome);
