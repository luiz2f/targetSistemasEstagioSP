// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

const fs = require("fs").promises;
const path = require("path");

async function readJson(filePath) {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading JSON file:", error);
  }
}

const filePath = path.join(__dirname, "dados.json");
const data = await readJson(filePath);

function summarizeMonthlySales(data) {
  let minDailyRevenue, maxDailyRevenue, countDaysAboveAverage;

  const validDays = data.filter((d) => d.valor > 0);
  minDailyRevenue = Math.min(...validDays.map((d) => d.valor));
  maxDailyRevenue = Math.max(...validDays.map((d) => d.valor));
  const monthAverage =
    data.reduce((acc, curr) => acc + curr.valor, 0) / validDays.length;
  countDaysAboveAverage = validDays.filter((d) => d.valor > monthAverage);

  return {
    minDailyRevenue,
    maxDailyRevenue,
    countDaysAboveAverage: countDaysAboveAverage.length,
  };
}

console.log(summarizeMonthlySales(data));
