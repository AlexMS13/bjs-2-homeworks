"use strict";
function solveEquation(a, b, c) {
  let arr = [];

  const D = Math.pow(b, 2) - 4 * a * c;

  if (D < 0) {
		return arr;
	} else if (D == 0) {
		let sqrt = -b / (2 * a);
		arr.push(sqrt);
	} else {
		let sqrt1 = (-b + Math.sqrt(D)) / (2 * a);
		let sqrt2 = (-b - Math.sqrt(D)) / (2 * a);
		arr.push(sqrt1);
    	arr.push(sqrt2);
	}

  return arr;
  
}

"use strict";

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = (percent / 100) / 12;

	let S = amount - contribution;

	if (S <= 0) {
		throw new Error("Сумма кредита должна быть больше нуля.");
	}

	let monthlyPay = S * (P + (P / (Math.pow((1 + P), countMonths) - 1)));

	let totalAmount = monthlyPay * countMonths;
  	totalAmount = Math.round(totalAmount * 100) / 100;
	return Math.round(totalAmount * 100) / 100;
} 