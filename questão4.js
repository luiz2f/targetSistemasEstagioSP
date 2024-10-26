// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

const monthlyRevenue = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

function calcPercentage(data) {
  let result = {};
  let total = 0;
  Object.entries(data).forEach(([state, value]) => {
    console.log(total, value);
    total += value;
  });
  Object.entries(data).forEach(([state, value]) => {
    console.log(total);
    const percent = (value / total) * 100;
    result[state] = parseFloat(percent.toFixed(2));
  });

  return result;
}

const percentages = calcPercentage(monthlyRevenue);
console.log(percentages);
