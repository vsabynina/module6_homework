function getAmountOfNumbers() {
  const arr = [0, 1, 2, 3, 2, 1, 4, 5, 4];
  const arrOdd = [];
  const arrEven = [];
  const arrNull = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arrNull.push(arr[i]);
    }
    else if (arr[i] % 2 === 0) {
      arrEven.push(arr[i]);
    }
    else if (arr[i] % 2 === 1) {
      arrOdd.push(arr[i]);
    }
  }
  console.log(`Количество чётных элементов: ${arrEven.length}`);
  console.log(`Количество нечётных элементов: ${arrOdd.length}`);
  console.log(`Количество нулей: ${arrNull.length}`);
}
getAmountOfNumbers();


