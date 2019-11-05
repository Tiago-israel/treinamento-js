const pessoas = [
  { nome: "julia", idade: 23 },
  { nome: "ana", idade: 20 },
  { nome: "maria", idade: 15 },
  { nome: "tiago", idade: 40 },
  { nome: "julio", idade: 80 },
  { nome: "margarida", idade: 21 },
  { nome: "joão", idade: 14 },
  { nome: "denis", idade: 60 },
  { nome: "paula", idade: 10 },
  { nome: "paulo", idade: 46 },
  { nome: "rubens", idade: 70 }
];

const pessoas2 = [{ nome: "adriano", idade: 30 }];

// for (let i = 0; i < pessoas.length; i++) {
//   console.log(pessoas[i]);
// }

//iterando sobre o array
// pessoas.forEach((pessoa, indice, oldList) => {
//   console.log(pessoa);
//   console.log(pessoa);
// });

//Adicionando um item ao array
pessoas.push({ nome: "joaquin", idade: 50 });

// pessoas.forEach(pessoa => {
//   console.log(pessoa);
// });

//Mapear um array
const nomes = pessoas.map(pessoa => pessoa.nome);
const idades = pessoas.map(pessoa => pessoa.idade);

//console.log(nomes);
//console.log(idades);

//Função find
const pessoa = pessoas.find((pessoa, index) => pessoa.nome === "julia");
//console.log(pessoa);

pessoas.forEach((pessoa, indice) => {
  if (pessoa.nome === "julio") {
    //console.log(`${pessoa.nome} indice: ${indice}`);
  }
});

const maioresDeQuarenta = pessoas.filter(pessoa => pessoa.idade > 40);
//console.log(maioresDeQuarenta);

//Concatenar arrays
const concatenados = pessoas.concat(pessoas2);
//console.log(concatenados);

//Verifica todos items
const result = pessoas.every(pessoa => pessoa.idade < 180);
//console.log(result);

//pessoas.reduce()

let somaIdade = 0;

for (let i = 0; i < pessoas.length; i++) {
  somaIdade += pessoas[i].idade;
}

//console.log(somaIdade);

//Reduce : reduz o array para alguma coisa
const soma = pessoas.reduce((acc, pessoa) => {
  acc += pessoa.idade;
  return acc;
}, 0);

//console.log(soma);

//Composição de funçoes
const somaIdadePessoasMaior30 = pessoas
  .map(pessoa => pessoa.idade) // [10,30,40]
  .filter(idade => idade > 30) // [40]
  .reduce((acc, idade) => {
    acc += idade;
    return acc;
  }, 0);

//console.log(somaIdadePessoasMaior30);

//Remover item de um array
//pessoas.splice(4, 1);

//Preencher valores entre indices
pessoas.fill({ nome: "jack", idade: 40 }, 3, 4);
//console.log(pessoas);

//Join gera uma string a partir de um array
const texto = pessoas.map(p => p.nome).join(" ");
//console.log(texto);

//Reverse inverte um array
//console.log(pessoas.reverse());

//Verifica se algum item corresponde à uma condição
const igual60 = pessoas.some(p => p.idade === 60);
console.log(igual60);
