"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  // Вычисление дискриминанта
  const discriminant = b ** 2 - 4 * a * c;

  // Вычисление корней
  switch (true) {
    case discriminant > 0:
      arr.push((-b + Math.sqrt(discriminant)) / (2 * a));
      arr.push((-b - Math.sqrt(discriminant)) / (2 * a));
      break;
    case discriminant === 0:
      arr.push(-b / (2 * a));
      break;
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  // Преобразование процентной ставки
  const monthlyPercent = percent / 100 / 12;
  // Расчет тела кредита
  const loanBody = amount - contribution;
  // Расчет ежемесячной оплаты
  const payment = loanBody * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent) ** countMonths) - 1)));
  // Расчет общей суммы
  const totalAmount = payment * countMonths;

  return Number(totalAmount.toFixed(2));
}