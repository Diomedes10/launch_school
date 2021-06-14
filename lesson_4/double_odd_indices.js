let array = [1,2,3,4,5,6,7,8,9,10];

function doubleNumsWithOddIndices(numbers) {
  let doubledNums = [];

  for (let counter = 0; counter < numbers.length; counter += 1) {
    let currentNumber = numbers[counter];

    if (counter % 2 === 1) {
      doubledNums.push(currentNumber * 2);
    } else {
      doubledNums.push(currentNumber);
    }
  }

  return doubledNums;
}

console.log(doubleNumsWithOddIndices(array));