function power(n) {
    if (n <= 1) {
      return false;
    }
    for (var i = 2; i <= n; i++) {
      for (var j = 2; j <= n; j++) {
        if (Math.pow(i, j) === n) {
          return `${"true as "+i+" ^ "+j+" = "+n}`
        }
      }
    }
    return false;
  }
  console.log(power(16));
  console.log(power(15));
  console.log(power(17));
  console.log(power(256));