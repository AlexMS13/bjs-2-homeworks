"use strict";
function solveEquation(a, b, c) {
  let arr = [];

  const D = Math.pow(b, 2) - 4 * a * c;

	 if (D == 0) {
		let sqrt = -b / (2 * a);
		arr.push(sqrt);
	} else if (D > 0) {
		let sqrt1 = (-b + Math.sqrt(D)) / (2 * a);
		let sqrt2 = (-b - Math.sqrt(D)) / (2 * a);
		arr.push(sqrt1);
    	arr.push(sqrt2);
	}

  return arr;
  
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let Rate = (percent / 100) / 12;

	let Payment = amount - contribution;

	let monthlyPay = Payment * (Rate + (Rate / (Math.pow((1 + Rate), countMonths) - 1)));

	let totalAmount = monthlyPay * countMonths;
  	totalAmount = Math.round(totalAmount * 100) / 100;
	return Math.round(totalAmount * 100) / 100;
} 