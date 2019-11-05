//function palavra reservada para criação de uma função
//x e y argumentos da função
//return resultado da função
function soma(x, y) {
  return x + y;
}

console.log(soma(5, 5));

//Função auto executavel
(function auto(x, y) {
  return x + y;
})(8, 8);

//atribuição da função à variavel
//função anonima : sem nome
const mult = function(x, y) {
  return x * y;
};
console.log(mult(4, 4));

function teste(nome) {
  return function teste2(sobrenome) {
    return `${nome} ${sobrenome}`;
  };
}

const sobrenome = teste("tiago");

console.log(sobrenome("israel"));
console.log(teste("joão")("silva"));

function subtracao() {
  return x - y;
}

//Arrow functions
const sub = (x, y) => x - y;

const processarNome = (nome, sobrenome) => {
  //...
  return `${nome} ${sobrenome}`;
};

console.log(processarNome("ze", "silva"));

const func = new Function("function teste(x){return x}");
console.log(func("tiago"));
