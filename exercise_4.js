function getNumbers (a, b) {
  const intervalNum = setInterval(function(){
    if (a === b) {
      clearInterval(intervalNum);
    } else {
      for (a; a  <= b; a++) {
        console.log(a);
      }
    }
  }, 1000);
}
getNumbers(5, 15);