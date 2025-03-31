function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
    
  }
  let avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (!arr.length) return 0;
  return arr.reduce((one, two) => one + two);
}

function differenceMaxMinWorker(...arr) {
  if (!arr.length) return 0;
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (!arr.length) return 0;
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (const elem of arr) {
      if (elem % 2 === 0) {
          sumEvenElement += elem;
       } else {
          sumOddElement += elem;
      }
   }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (!arr.length) return 0;
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (const element of arr) {
      if (element % 2 === 0) {
          sumEvenElement += element;
          countEvenElement++;
      }
  }
  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
    for (const arr of arrOfArr) {
        const result = func(...arr);
       if (result > maxWorkerResult) {
          maxWorkerResult = result;
        }
    }
  return maxWorkerResult;
}
