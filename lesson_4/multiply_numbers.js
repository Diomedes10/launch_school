let array = [1,2,3,4,5,6,7,8,9,10];

function multiplyNumbers(arr, mult) {
  let multArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    let newElement = arr[i] * mult;
    multArr.push(newElement);
  }
  return multArr;
}

console.log(multiplyNumbers(array, 10));