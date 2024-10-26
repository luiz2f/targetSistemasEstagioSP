// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

const message_true = "Este número pertence a sequência de Fibonacci";
const message_false = "Este número não pertence a sequência de Fibonacci";

function isFibonacci(num) {
  let a = 0,
    b = 1;

  if (num === 0) return message_true;

  while (b <= num) {
    if (b === num) return message_true;

    let temp = a + b;
    a = b;
    b = temp;
  }

  return message_false;
}
