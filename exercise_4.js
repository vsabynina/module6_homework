function getNumbers (a, b) {
  const intervalNum = setInterval(function(){
    console.log(a);
    if (a === b) {
      clearInterval(intervalNum);
    } else if (a <= b) {
      a++;
    }
  }, 1000);
  }
getNumbers(5, 15);