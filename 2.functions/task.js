function getArrayParams(...arr) {
  const arrLength = arr.length;
  let avg = 0, min = 0, max = 0, sum = 0;

  if (arrLength) {
    min = arr[0];
    max = arr[0];
    sum = arr[0];

    for (let index = 1; index < arrLength; index++) {
      if (arr[index] < min) {
        min = arr[index];
      }

      if (arr[index] > max) {
        max = arr[index];
      }

      sum += arr[index];
    }

    avg = Number((sum / arrLength).toFixed(2));
  }

  return {min: min, max: max, avg: avg};
}

function summElementsWorker(...arr) {
  let sum = 0;

  for (let index = 0; index < arr.length; index++) {
    sum += arr[index];
  }

  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  return Math.max.apply(null, arr) - Math.min.apply(null, arr);
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0, sumOddElement = 0;

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] % 2 === 0) {
      sumEvenElement += arr[index];
    }
    else {
      sumOddElement += arr[index];
    }
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0, countEvenElement = 0;

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] % 2 === 0) {
      sumEvenElement += arr[index];
      countEvenElement++;
    }
  }

  return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let index = 0; index < arrOfArr.length; index++) {
    const res = func(...arrOfArr[index]);

    if (res > maxWorkerResult) {
      maxWorkerResult = res;
    }
  }

  return maxWorkerResult;
}
