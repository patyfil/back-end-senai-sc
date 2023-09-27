// const numero1 = 5;
// const numero2 = 3;
// Adiciona os dois números
// const soma = numero1 + numero2;
// Exibe a soma
// console.log('A soma do ' + numero1 + ' e ' + numero2 + ' é: ' + soma);


// if (navigator.cookieEnabled) {
//   alert("O navegador suporta cookies.");
//   } else {
//   alert("O navegador não suporta cookies.");
//   }

// Utilizando a função console para exibir informações no navegador.
// let semaforo = "vermelho";
// if (semaforo === "verde") {
// console.log("Siga!");
// } else if (semaforo === "vermelho") {
// console.log("Pare!");
// } else {
// console.log("Atenção!");
// }


// SWITCH CASE
// const animal = "cachorro";
// switch (animal) {
// case "cachorro":
// console.log("Eu possuo um cachorro.");
// break;
// case "gato":
// console.log("Eu possuo um gato.");
// break;
// case "cobra":
// console.log("Eu possuo uma cobra.");
// break;
// case "papagaio":
// console.log("Eu possuo um papagaio.");
// break;
// default:
// console.log("Eu não possuo um animal de estimação.");
// break;
// }

// WHILE
// let contador = 1;
// while (contador < 10) {
// console.log(contador);
// contador = contador + 2;
// }

// FOR

// Exibe os números de 1 a 5
// Inicializa as variáveis
// const numero = 5;
// Looping de i = 1 até 5
// Em cada interação, a variável i é incrementada de 1 em 1
// for (let i = 1; i <= numero; i++) {
// console.log(i); // Exibe o valor de i
// }


// WHILE

// Exibe os números de 1 a 5
// Inicializa as variáveis
// let i = 1, numero = 5;
// // Looping de i = 1 até 5
// while (i <= numero) {
// console.log(i); // Exibe o valor de i
// i = i + 1; // Incrementa o valor de i de 1 em 1
// }

// // Declaração da função
// function saudacao() {
//   console.log("Olá mundo!");
// }

// // Chamada da função saudacao
// saudacao();

// // Declaração da função
// function saudacao(nome) {
//   console.log("Olá " + nome + "!");
//   }
//   // Leitura do valor
//   let valor = prompt("Entre com o seu nome: ");
//   // Chamada da função
//   saudacao(valor);

// // Programa para realizar a adição de dois números usando função
// // Declaração da função
// function adicao(a, b) {
//   console.log(a + b);
//   }
//   // Chamada da função
//   adicao(3, 4); // Resultado: 7
//   adicao(2, 9); // Resultado: 11


// // Função para somar dois números
// // Declaração da função
// function adicao(a, b) {
//   return a + b;
//   }
//   // Coleta duas entradas do usuário
//   let numero1 = parseFloat(prompt("Entre com o primeiro número: "));
//   let numero2 = parseFloat(prompt("Entre com o segundo número: "));
//   // Chamada da função
//   let resultado = adicao(numero1, numero2);
//   // Exibe o resultado
//   console.log("A soma é " + resultado);


// // Programa para encontrar o dobro de um número
// // Função é declarada dentro de uma variável
// let valor = function (numero) {
//   return numero * numero;
//   };
//   // Impressão do resultado
//   console.log(valor(4));
//   // Pode ser usado como valor de variável para outras variáveis
//   let calculo = valor(3);
//   console.log(calculo);


  // let exibir = function() {
  //   console.log("Eu sou uma função anônima!");
  //   };
  //   // Chamada da função
  //   exibir();


  // let adicionar = function (valorA, valorB) {
  //   return valorA + valorB;
  //   };
  //   // Chama a função e exibe o resultado
  //   console.log(adicionar(10, 20)); // Resultado: 30


//   let adicionar = (valorA, valorB) => valorA + valorB;
// // Chama a função e exibe o resultado
// console.log(adicionar(10, 20)); // Resultado: 30;


// let adicionar = (valorA, valorB) => {
//   return valorA + valorB;
//   };
//   // Chama a função e exibe o resultado
//   console.log(adicionar(10, 20)); // Resultado: 30


// let dobro = numero => numero * 2;
// console.log(dobro(3)); // Resultado: 6

// let dobro = function (numero) {
//   return numero * 2;
//   };
//   console.log(dobro(3)); // Resultado: 6


// let mensagem = () => console.log("Olá mundo!");
// mensagem();


let soma = (a, b) => { // A chave abre uma função multilinha
  let resultado = a + b;
  return resultado; // Se usarmos chaves, precisamos de uma instrução "return" explícita
  };
  console.log(soma(1, 2)); // Resultado: 3