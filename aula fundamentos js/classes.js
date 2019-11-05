class Pessoa {
  //atributos
  nome = "";
  idade = 0;

  //função responsável por criar uma instancia
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  //métodos do objeto
  informacao() {
    this.teste();
    return `${this.nome} ${this.idade}`;
  }

  teste() {
    return "ola";
  }

  static count() {
    return 10;
  }
}

class PessoaJuridica extends Pessoa {
  cnpj = "";

  constructor() {
    super("pj", 20);
  }
}

const pessoa = new Pessoa("tiago", 23);
const pj = new PessoaJuridica();

console.log(pessoa.informacao());
console.log(pj.informacao());
console.log("chamada metodo estatico", Pessoa.count());
