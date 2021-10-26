function isNumberPrime() {
  const number = prompt (`Введите любое число`);
  if (number < 2) {
    alert(`Введите число большее или равное 2`);
  } else if (number <= 1000) {
    for (const j = 2; j < number; j++) {
      if (number % j === 0) {
        alert(`${number} - простое число`);
        break;
      }
    }
  } else if (number > 1000) {
    alert(`Данные неверны`);
  }
}
isNumberPrime();