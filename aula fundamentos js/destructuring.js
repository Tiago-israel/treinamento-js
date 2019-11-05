//destructuring
//valor padrão
function imprimir({ nome = "usuário", idade = 0 }) {
  console.log(`${nome} ${idade}`);
}

const pessoa = {
  nome: "tiago",
  idade: 23
};

const pessoas = [pessoa];

//imprimir(pessoa);

const { nome, idade } = pessoa;
const [tiago] = pessoas;

//console.log(nome, idade);
console.log(tiago);
